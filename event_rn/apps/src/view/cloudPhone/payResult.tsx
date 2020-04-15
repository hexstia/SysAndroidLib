
import { BaseNavNavgator, ImageBtn, msg } from 'dl-kit';
import { OrderPay } from 'global';
import React from 'react';
import { Image, Text, View } from 'react-native';

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
    msg.emit('updateCloudPhone')
  }
  render() {
    let orderPay: OrderPay = this.data.orderPay;

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={{ width: 146, height: 130, marginTop: 20 }} resizeMode='contain' source={orderPay ? require('#/home/paySuccess.png') : require('#/home/payFail.png')} />
        <Text style={{ color: '#999', fontSize: 15, marginTop: 11 }}>{orderPay ? '支付成功！' : '支付失败！'}</Text>
        <Text style={{ color: '#999', fontSize: 15, marginTop: 5 }}>{orderPay ? `支付金额${orderPay.amount}元` : '请检查问题，再试一次'}</Text>
        <ImageBtn style={{ marginTop: 13 }} imgWidth={223} imgHeight={63} source={require('#/home/goBackBtn.png')} onPress={this.goback} />
      </View>
    );
  }

  goback = () => {
    this.goBack()
  }
}