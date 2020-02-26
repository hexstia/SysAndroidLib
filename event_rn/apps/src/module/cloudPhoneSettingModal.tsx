
import { BaseComponent, defaultStyle, ImageBtn } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { ImageSourcePropType, Modal, Text, View } from 'react-native';

interface Props {

}

interface State {
  visible: boolean,
  cloudPhone?: CloudPhoneModal

}

interface Item {
  image: ImageSourcePropType,
  title: string,
  action: string,
}

/**
*  手机设置的弹窗
*/
export default class CloudPhoneSettingModal extends BaseComponent<Props> {
  state: State = {
    visible: false,

  }
  constructor(props: any) {
    super(props)
  }

  itemDatas: Item[] = [
    {
      image: require('#/home/reStart.png'),
      title: '重启',
      action: 'reStart'
    },
    {
      image: require('#/home/upFile.png'),
      title: '上传文件',
      action: 'upFile'
    },
    {
      image: require('#/home/upApp.png'),
      title: '上传应用',
      action: 'upApp'
    },
    {
      image: require('#/home/renew.png'),
      title: '一键新机',
      action: 'renew'
    },
  ]

  render() {
    let itemWidth = (defaultStyle.device.width - 50 * 2) / 3 - 1
    return (
      <Modal visible={this.state.visible}
        transparent={true}
        animationType='none'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' }}>

          <View style={{ marginBottom: 350, marginHorizontal: 50, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
            {/* 标题 */}
            <View style={{ height: 40, backgroundColor: '#6498FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ width: 30, marginLeft: 5 }} />
              <Text style={{ color: '#fff', fontSize: 18 }}>设置</Text>
              <ImageBtn style={{ marginRight: 5 }} width={30} height={30} imgWidth={20} imgHeight={20} source={require('#/home/close.png')} onPress={this.close} />
            </View>

            {/* 按钮区 */}
            <View style={{ marginTop: 4, marginBottom: 18, flexDirection: 'row', flexWrap: 'wrap' }}>

              {
                this.itemDatas.map(item => {
                  return (
                    <View style={{ width: itemWidth, alignItems: 'center' }}>
                      <ImageBtn style={{ marginTop: 18 }} width={26} height={26} imgWidth={26} imgHeight={26} source={item.image} onPress={this.itemClick.bind(this, item)} />
                      <Text style={{ color: '#999', fontSize: 12, marginTop: 8 }} onPress={this.itemClick.bind(this, item)} >{item.title}</Text>
                    </View>
                  )
                })
              }
            </View>
          </View>

        </View>
      </Modal>
    );
  }

  /**
  *  关闭
  */
  close = () => {
    this.setState({ visible: false })
  }

  /**
  *  显示弹窗
  */
  showModal = (cloudPhone: CloudPhoneModal) => {
    this.setState({ visible: true, cloudPhone })
  }

  /**
  *  item 点击事件
  */
  itemClick = (item: Item) => {
    this.setState({ visible: false }, () => {
      switch (item.action) {
        case 'reStart':
          break;

        case 'upFile':
          break;

        case 'upApp':
          break;

        case 'renew':
          break;
      }
    })

  }



}