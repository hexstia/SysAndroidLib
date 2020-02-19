import React, { PureComponent } from 'react';
import { Slider, Text, View, ViewStyle } from 'react-native';
import Video from 'react-native-video';
import Icon from '../icon';

interface VideoProps {
  url: string,
  style: ViewStyle
}

export default class VideoView extends PureComponent<VideoProps> {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 1.0, // 总时长
    currentTime: 0.0, //  当前播放时长
    paused: false,
  }
  constructor(props: any) {
    super(props)
  }
  video: any

  render() {
    return (
      <View style={{ ...this.props.style }}>
        <Video
          ref={(ref: Video) => { //方法对引用Video元素的ref引用进行操作
            this.video = ref
          }}

          source={{ uri: this.props.url }}//设置视频源  
          style={{ flex: 1 }}//组件样式
          rate={this.state.rate}//播放速率
          paused={this.state.paused}//暂停
          volume={this.state.volume}//调节音量
          muted={this.state.muted}//控制音频是否静音
          resizeMode={this.state.resizeMode}//缩放模式
          onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
          onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
          onEnd={this.onEnd}//视频播放结束时的回调函数
          repeat={false}//确定在到达结尾时是否重复播放视频。
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
          {/* 播放按钮 */}
          <Icon style={{ fontSize: 16, color: '#fff' }} iconCode={this.state.paused ? 0xe7a3 : 0xe7a2} onPress={() => this.setState({ paused: !this.state.paused })} />
          {/* 已播放时间 */}
          <Text style={{ fontSize: 10, color: '#fff', marginLeft: 10 }}>{this.state.currentTime.toFixed(1)}</Text>
          {/* 进度条 */}
          <Slider style={{ flex: 1 }} disabled={false} step={0.01} maximumTrackTintColor='#999' minimumTrackTintColor='#fff' value={this.state.currentTime / this.state.duration} onValueChange={this.sliderAction} onSlidingComplete={this.onSlidingComplete} />
          {/* 未播放时间 */}
          <Text style={{ fontSize: 10, color: '#fff' }}>{this.state.duration.toFixed(1)}</Text>
        </View>
        {/* 大的播放按钮 */}
        {
          this.state.paused && (
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
              <Icon style={{ fontSize: 54, color: '#fff' }} iconCode={0xe761} onPress={() => this.setState({ paused: false })} />
            </View>
          )
        }

      </View>
    );
  }

  sliderAction = (v: number) => {
    this.setState({ paused: true })
  }

  onSlidingComplete = (v: number) => {
    let seekNum = v * this.state.duration
    this.video.seek(seekNum);
    this.setState({ paused: false })
  }

  onLoad = (data: any) => {
    this.setState({ duration: data.duration, paused: false });
  }

  onProgress = (timeData: { currentTime: number, playableDuration: number, seekableDuration: number }) => {
    this.setState({
      currentTime: timeData.currentTime
    })

  }

  onEnd = () => {
    this.setState({ paused: true, currentTime: 0 }, () => this.video.seek(0));

  };
}