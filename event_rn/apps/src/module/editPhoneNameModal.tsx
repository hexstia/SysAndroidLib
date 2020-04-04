
import { BaseComponent } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';



interface Props {
  /**
  *  修改云手机名称
  */
  updatePhoneName: (name: string, deviceId: number) => void,
}

interface State {
  visible: boolean,
  value: string,
  phone?: CloudPhoneModal
}
/**
*  编辑手机名称
*/
export default class EditPhoneNameModal extends BaseComponent<Props> {
  state: State = {
    visible: false,
    value: ''
  }
  constructor(props: Props) {
    super(props)

  }
  render() {
    let { visible, value, phone } = this.state
    if (visible) {
      return (
        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' }}>

          <View style={{ marginHorizontal: 55, borderRadius: 5, marginBottom: 350, backgroundColor: '#fff', overflow: 'hidden' }}>
            {/* 标题 */}
            <Text style={{ color: '#000', fontSize: 16, fontWeight: '700', marginTop: 10, marginBottom: 14, alignSelf: 'center' }}>修改名称</Text>
            {/* 输入框 */}
            <View style={{ height: 35, backgroundColor: '#F2F2F2', paddingHorizontal: 15 }}>
              <TextInput
                style={{ padding: 0, flex: 1, fontSize: 16 }}
                autoCapitalize='none'
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder={phone?.deviceName || '请输入'}
                placeholderTextColor='#aaa'
                value={value}
                onChangeText={text => this.setState({ value: text })}
                maxLength={10}
              />
            </View>
            {/* 按钮区域 */}
            <View style={{ marginTop: 15, height: 35, flexDirection: 'row', borderTopColor: '#ccc', borderTopWidth: 0.5 }}>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightColor: '#ccc', borderRightWidth: 0.5 }}
                onPress={this.onCancleClick}>
                <Text style={{ color: '#A2A5B0', fontSize: 14 }}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={this.onConfirmClick}>
                <Text style={{ color: '#007AFE', fontSize: 14 }}>确定</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      );
    } else {
      return null
    }

  }


  /**
  *  取消
  */
  onCancleClick = () => {
    this.setState({ visible: false })
  }

  /**
  *  确定
  */
  onConfirmClick = () => {
    this.setState({ visible: false }, () => {
      this.props.updatePhoneName(this.state.value, this.state.phone!.id)
    })
  }

  /**
  *  显示弹窗
  */
  showModal = (phone: CloudPhoneModal) => {
    if (phone) {
      this.setState({ visible: true, value: '', phone })
    } else {
      console.error('没有传云手机对象')
    }
  }

}