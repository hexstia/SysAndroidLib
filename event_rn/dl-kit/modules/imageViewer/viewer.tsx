import React from 'react';
import { Modal, TouchableOpacity, View, ViewStyle } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import BaseComponent from '../../base/baseComponent';
import Icon from '../icon';

/**
*  大图展示
*/

interface ViewerProps {
  /**
   * 加载失败的图
   */
  failImageSource?: IImageInfo;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
     * 是否开启长按保存到本地的功能
     */
  saveToLocalByLongPress?: boolean;
  /**
   * 是否允许缩放图片
   */
  enableImageZoom?: boolean;

  /**
  *  视图样式
  */
  style?: ViewStyle;
  /**
   * 开启下滑关闭视图的功能
   * When swipe down, will trigger onCancel.
   */
  enableSwipeDown?: boolean;
  /**
   * threshold for firing swipe down function
   */
  swipeDownThreshold?: number;
  doubleClickInterval?: number;
  /**
   * 是否预加载图片
   */
  enablePreload?: boolean;
  /**
   * 翻页时的动画时间
   */
  pageAnimateTime?: number;
  /**
   * 长按图片的回调
   */
  onLongPress?: (image?: IImageInfo) => void;
  /**
   * 单击回调
   */
  onClick?: (close?: () => any, currentShowIndex?: number) => void;
  /**
   * 双击回调
   */
  onDoubleClick?: (close?: () => any) => void;
  /**
   * 图片保存到本地方法，如果写了这个方法，就不会调取系统默认方法
   * 针对安卓不支持 saveToCameraRoll 远程图片，可以在安卓调用此回调，调用安卓原生接口
   */
  onSave?: (url: string) => void;
  /**
   * 自定义头部
   */
  renderHeader?: (currentIndex?: number) => React.ReactElement<any>;
  /**
   * 自定义尾部
   */
  renderFooter?: (currentIndex?: number) => React.ReactElement<any>;
  /**
   * 自定义计时器
   */
  renderIndicator?: (currentIndex?: number, allSize?: number) => React.ReactElement<any>;
  /**
   * Render image component
   */
  renderImage?: (props: any) => React.ReactElement<any>;
  /**
   * 自定义左翻页按钮
   */
  renderArrowLeft?: () => React.ReactElement<any>;
  /**
   * 自定义右翻页按钮
   */
  renderArrowRight?: () => React.ReactElement<any>;
  /**
   * 弹出大图的回调
   */
  onShowModal?: (content?: any) => void;
  /**
   * 取消看图的回调
   */
  onCancel?: () => void;
  /**
   * 当用户向下滑动时触发的函数
   */
  onSwipeDown?: () => void;
  /**
   * 渲染loading元素
   */
  loadingRender?: () => React.ReactElement<any>;
  /**
   * 保存到相册的回调
   */
  onSaveToCamera?: (index?: number) => void;
  /**
   * 当图片切换时触发
   */
  onChange?: (index?: number) => void;
}




export default class Viewer extends BaseComponent<ViewerProps> {
  state = {
    show: false,
    imageUrls: [],
    index: 0
  }

  static defaultProps = {
    saveToLocalByLongPress: false,
    enablePreload: true
  }


  /**
  *  显示图片
  */
  showImages = (imageUrls: IImageInfo[], index = 0) => {

    this.setState({
      show: true,
      imageUrls,
      index
    })

  }

  render() {
    return (
      <Modal visible={this.state.show} transparent={true} >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <ImageViewer enablePreload={false} {...this.props}
            imageUrls={this.state.imageUrls}
            index={this.state.index} />
          <TouchableOpacity style={{ position: 'absolute', top: 54, left: 15 }}
            onPress={() => { this.setState({ show: false }) }}>
            <Icon iconCode={0xe64a} style={{ color: '#fff', fontSize: 20 }} />
          </TouchableOpacity>
        </View>
      </Modal >
    );
  }
}


interface IImageInfo {
  url: string;
  /**
   * 没有的话会自动拉取
   */
  width?: number;
  /**
   * 没有的话会自动拉取
   */
  height?: number;
  /**
   * 图片字节大小(kb为单位)
   */
  sizeKb?: number;
  /**
   * 原图字节大小(kb为单位)
   * 如果设置了这个字段,并且有原图url,则显示查看原图按钮
   */
  originSizeKb?: number;
  /**
   * 原图url地址
   */
  originUrl?: string;
  /**
   * Pass to image props 作用于Image标签
   */
  props?: any;
}