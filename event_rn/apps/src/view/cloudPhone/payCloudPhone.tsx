
import { BaseNavNavgator, DefaultListView, ImageBtn, request, tips } from 'dl-kit';
import { CloudPhoneModal, Product } from 'global';
import React from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';


interface State {
  cloudPhone?: CloudPhoneModal,
  refreshing: boolean,
  watchMore: boolean,
  nowSelectIndex?: number,
  proList: Product[],
  payType: 'weixin' | 'zhifubao',
  proNum: number,
}

/**
*  购买页面
*/
export default class PayCloudPhone extends BaseNavNavgator {
  state: State = {
    cloudPhone: this.data.cloudPhone,
    refreshing: true,
    watchMore: false,
    proList: [],
    payType: 'weixin',
    proNum: 1,
  }

  constructor(props: any) {
    super(props)
    this.loadData()
  }

  listView: DefaultListView | null = null;

  loadData = () => {
    this.setState({ refreshing: true });

    request.post('/tcssPlatform/product/proList', {}, false).then(res => {
      this.setState({ proList: res.list, refreshing: false, nowSelectIndex: undefined })
    }).catch(err => {
      this.setState({ refreshing: false })
    })

  }

  render() {
    let { refreshing, proList, watchMore, nowSelectIndex, payType, proNum } = this.state;
    let vipText = '云手机授权，云端运行，三端互通设备\n升级，安卓系统'
    let proDatas = watchMore ? proList : proList.slice(0, 5)
    let weixinPay = payType == 'weixin';


    return (
      <View style={{ flex: 1 }}>
        <ScrollView keyboardDismissMode='on-drag' refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.loadData} />}>
          {/* 顶部介绍 */}
          <ImageBackground style={{ height: 90, paddingHorizontal: 22, }} source={require('#/home/vipTipBG.png')}>
            <Text style={{ marginTop: 12, color: '#F0D398', fontSize: 16 }}>VIP云手机</Text>
            <Text style={{ color: '#FFE4B0', fontSize: 14, marginTop: 8, lineHeight: 16 }}>{vipText}</Text>
          </ImageBackground>

          {/* 商品列表 和展开关闭的按钮 */}
          <View style={{ backgroundColor: '#fff' }}>
            {
              proDatas.map((pro, index) => {
                let select = index == nowSelectIndex
                return (
                  <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 20, height: 40, borderRadius: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: select ? '#F2D7A0' : '#ccc', borderWidth: 0.5, backgroundColor: select ? '#FEFCEE' : '#fff' }}
                    onPress={() => this.setState({ nowSelectIndex: index })}>
                    <Text style={{ color: select ? '#B3944C' : '#666', fontSize: 14, marginLeft: 15 }}>{pro.proName}</Text>
                    <Text style={{ color: select ? '#885C20' : '#FE5437', fontSize: 10, marginRight: 20 }}>￥<Text style={{ fontSize: 14 }}>{pro.proPrice}</Text>元</Text>
                  </TouchableOpacity>
                )
              })
            }
            <TouchableOpacity style={{ height: 35, alignItems: 'center', justifyContent: 'center' }}
              onPress={() => this.setState({ watchMore: !watchMore })}>
              <Text style={{ color: '#6498FF', fontSize: 14 }}>{watchMore ? '收起' : '更多套餐'}</Text>
            </TouchableOpacity>
          </View>

          {/* 支付方式的选择 */}
          <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
            {
              this.state.cloudPhone ? null : (
                <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                  <Text style={{ color: '#333', fontSize: 15, marginLeft: 25 }}>购买数量</Text>
                  <Text style={{ color: '#999', fontSize: 13, marginLeft: 5, flex: 1 }}>（单次最多99台）</Text>
                  <ImageBtn imgWidth={30} imgHeight={30} source={require('#/home/reduce.png')} onPress={this.proNumReduce} />
                  <View style={{ width: 30, height: 30, marginHorizontal: 0.5, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 18, fontWeight: '800' }}>{proNum}</Text>
                  </View>
                  <ImageBtn style={{ marginRight: 20 }} imgWidth={30} imgHeight={30} source={require('#/home/add.png')} onPress={this.proNumAdd} />
                </View>
              )
            }
            <TouchableOpacity style={{ height: 40, flexDirection: 'row', alignItems: 'center' }}
              onPress={() => this.setState({ payType: 'weixin' })}>
              <Image style={{ width: 26, height: 26, marginLeft: 25 }} resizeMode='contain' source={require('#/home/weixinBtn.png')} />
              <Text style={{ color: '#999', fontSize: 15, marginLeft: 7, flex: 1 }}>微信支付</Text>
              <Image style={{ width: 21, height: 21, marginRight: 20 }} source={weixinPay ? require('#/home/selectBtn.png') : require('#/home/normalBtn.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderTopColor: '#eee', borderTopWidth: 1 }}
              onPress={() => this.setState({ payType: 'zhifubao' })}>
              <Image style={{ width: 26, height: 26, marginLeft: 25 }} resizeMode='contain' source={require('#/home/zfbBtn.png')} />
              <Text style={{ color: '#999', fontSize: 15, marginLeft: 7, flex: 1 }}>支付宝支付</Text>
              <Image style={{ width: 21, height: 21, marginRight: 20 }} source={weixinPay ? require('#/home/normalBtn.png') : require('#/home/selectBtn.png')} />
            </TouchableOpacity>
          </View>

        </ScrollView>

        {
          nowSelectIndex != undefined ? (
            <View style={{ height: 60, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ccc', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#666', fontSize: 14, marginLeft: 20, flex: 1 }}>总价：<Text style={{ color: '#FE5437', fontSize: 18 }}>{proList[nowSelectIndex].proPrice}元</Text></Text>
              <ImageBtn style={{ marginRight: 12 }} imgWidth={106} imgHeight={46} source={require('#/home/payBtn.png')} onPress={this.payBtnClick} />
            </View>
          ) : null
        }
      </View>
    );
  }

  /**
  *  数量加
  */
  proNumAdd = () => {
    let newProNum = this.state.proNum + 1;
    if (newProNum > 99) {
      tips.showTips('单次购买数量不能超过99台！')
    } else {
      this.setState({ proNum: newProNum })
    }
  }

  /**
  *  数量减
  */
  proNumReduce = () => {
    let newProNum = this.state.proNum - 1;
    if (newProNum < 1) {
      return
    } else {
      this.setState({ proNum: newProNum })
    }
  }

  /**
  *  支付按钮点击事件
  */
  payBtnClick = () => {
    let { cloudPhone, proList, watchMore, nowSelectIndex, payType, proNum } = this.state;
    let proId = proList[nowSelectIndex!].id

    if (cloudPhone) {
      // 续费
      let deviceId = cloudPhone.deviceId
      let product = [{ proId, deviceId }]
      request.post('/tcssPlatform/order/renewCreateOrder', { productJson: JSON.stringify(product) }, true).then(res => {
        this.orderPay(res.order.id);
      })
    } else {
      // 确认订单
      request.post('/tcssPlatform/order/confirmOrder', { productArr: JSON.stringify([proId]) }, true).then(res => {
        // 创建订单
        let product = [{ proId: res.list[0].id, num: proNum }]
        request.post('/tcssPlatform/order/createOrder', { productJson: JSON.stringify(product) }, true).then(res => {
          this.orderPay(res.order.id)
        })
      })
    }
  }

  /**
  *  发起支付
  */
  orderPay = (orderId: string) => {
    request.post('/tcssPlatform/pay/orderPay', { orderId, payType: this.state.payType == 'weixin' ? 1 : 2 }, true).then(res => {
      this.replace('PayResult', { title: '支付结果', orderPay: res.orderPay })
    }).catch(err => {
      this.replace('PayResult', { title: '支付结果' })
    })
  }



}