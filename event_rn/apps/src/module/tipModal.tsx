
import { BaseComponent, ImageBtn } from 'dl-kit';
import React from 'react';
import { Modal, Text, View } from 'react-native';



interface Props {
}

interface State {
  visible: boolean,
  title: string
}
/**
*  编辑手机名称
*/
export default class TipModal extends BaseComponent<Props> {
  state: State = {
    visible: false,
    title: ''
  }
  constructor(props: Props) {
    super(props)

  }
  render() {
    let { visible } = this.state
    return (
      <Modal visible={visible}
        transparent={true}
        animationType='none'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' }}>

          <View style={{ marginBottom: 350, marginHorizontal: 50, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
            {/* 标题 */}
            <View style={{ height: 40, backgroundColor: '#6498FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ width: 30, marginLeft: 5 }} />
              <Text style={{ color: '#fff', fontSize: 18 }}>温馨提示</Text>
              <ImageBtn style={{ marginRight: 5 }} width={30} height={30} imgWidth={20} imgHeight={20} source={require('#/home/close.png')} onPress={this.close} />
            </View>

            {/* 提示文字 */}
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#333', fontSize: 16, marginTop: 38 }}>{this.state.title}</Text>
              <ImageBtn style={{ marginTop: 22, marginBottom: 20 }} imgWidth={173} imgHeight={53} source={require('#/home/define.png')} onPress={this.close} />
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
  showModal = (title: string) => {
    this.setState({ visible: true, title })
  }


}