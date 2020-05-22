
import { BaseNavNavgator, Icon, ImageBtn, msg } from 'dl-kit';
import { OrderPay } from 'global';
import React from 'react';
import { BackHandler, Image, Platform, Text, TouchableOpacity, View } from 'react-native';

interface State {
}

/**
*  支付结果
  orderPay:支付结果对象
*/
export default class PayResult extends BaseNavNavgator {
  state: State = {

  }
  constructor(props: any) {
    super(props)
    this.setTitle('支付结果')
    this.setLeft(
      <TouchableOpacity style={{ width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }} onPress={this.back}>
        <Icon style={{ color: '#333', fontSize: 16 }} iconCode={0xe648} />
      </TouchableOpacity>
    )
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.back);
    }
  }

  render() {
    let orderPay: OrderPay = this.data.orderPay;

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={{ width: 146, height: 130, marginTop: 20 }} resizeMode='contain' source={orderPay ? require('#/home/paySuccess.png') : require('#/home/payFail.png')} />
        <Text style={{ color: '#999', fontSize: 15, marginTop: 11 }}>{orderPay ? '支付成功！' : '支付失败！'}</Text>
        <Text style={{ color: '#999', fontSize: 15, marginTop: 5 }}>{orderPay ? `支付金额${orderPay.amount}元` : '请检查问题，再试一次'}</Text>
        <ImageBtn style={{ marginTop: 13 }} imgWidth={223} imgHeight={63} source={require('#/home/goBackBtn.png')} onPress={this.back} />
      </View>
    );
  }

  back = () => {
    setTimeout(() => {
      msg.emit('phoneListChange', { hasNewPhone: !this.data.cloudPhone })
    }, 500);
    this.goBack()
    return true
  }

}