
import { BaseComponent, defaultStyle } from 'dl-kit';
import constact from 'dl-kit/configs/constant';
import React from 'react';
import { AsyncStorage, BackHandler, Modal, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  /**
  *  打开web 页面
  */
  openWebview: (title: string, url: string) => void
}

interface State {
  visible: boolean,
  title: string
}
/**
*  编辑手机名称
*/
export default class AgreementModal extends BaseComponent<Props> {
  state: State = {
    visible: false,
    title: ''
  }

  constructor(props: Props) {
    super(props)
    AsyncStorage.getItem(constact.locationSaveKey.showAgreementModal, (err, res) => {
      this.setState({ visible: res == undefined })
    })
  }

  render() {
    let { visible } = this.state
    let text1 = '请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了向你提供相关服务，我们需要收集你的设备信息、操作日志等个人信息。你可以在“系统设置”中查看、变更、删除个人信息并管理你的授权。你可阅读'
    let text2 = '《服务协议》'
    let text3 = '和'
    let text4 = '《隐私政策》'
    let text5 = '了解详细信息。如你同意，请点击“同意”开始接受我们的服务。'

    return (
      <Modal visible={visible}
        transparent={true}
        animationType='none'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>

          <View style={{ marginHorizontal: 30, backgroundColor: '#fff', borderRadius: 6, overflow: 'hidden' }}>
            <Text style={{ color: '#333', fontSize: 18, fontWeight: 'bold', marginTop: 20, alignSelf: 'center' }}>服务协议和隐私政策</Text>
            <Text style={{ color: '#333', fontSize: 14, marginTop: 10, lineHeight: 20, marginHorizontal: 20 }}>
              {text1}
              <Text style={{ color: defaultStyle.color.mainColor }}
                onPress={this.openWebview.bind(this, '服务协议', 'http://www.91lanjiang.com/cloud/cloudPhone/book?type=service_agreement')}>{text2}</Text>
              {text3}
              <Text style={{ color: defaultStyle.color.mainColor }}
                onPress={this.openWebview.bind(this, '隐私政策', 'http://www.91lanjiang.com/cloud/cloudPhone/book?type=privacy_policy')}>{text4}</Text>
              {text5}
            </Text>

            <View style={{ height: 0.5, backgroundColor: '#eee', marginTop: 15 }} />
            <View style={{ flexDirection: 'row', height: 40 }}>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={this.cancle}>
                <Text style={{ color: '#333', fontSize: 16 }}>暂不使用</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={this.agree}>
                <Text style={{ color: defaultStyle.color.mainColor, fontSize: 16 }}>同意</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </Modal>
    );
  }

  /**
  *  打开一个webview
  */
  openWebview = (title: string, url: string) => {
    this.setState({ visible: false }, () => {
      this.props.openWebview(title, url)
    })
  }

  /**
  *  暂不使用
  */
  cancle = () => {
    this.setState({ visible: false }, () => {
      BackHandler.exitApp()
    })
  }

  /**
  *  同意
  */
  agree = () => {
    this.setState({ visible: false }, () => {
      AsyncStorage.setItem(constact.locationSaveKey.showAgreementModal, constact.locationSaveKey.showAgreementModal)
    })
  }

}