
import { BaseNavNavgator, DefaultListView, ImageBtn, request, tips, Icon } from 'dl-kit';
import { CloudPhoneModal, OrderPay, Product, Discount } from 'global';
import React from 'react';
import { Image, ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import RNArenaPay from 'react-native-arena-pay';
import ConvertDiscount from '../../module/convertDiscount';


interface State {
  cloudPhone?: CloudPhoneModal,
  discount?: Discount,
  refreshing: boolean,
  watchMore: boolean,
  nowSelectIndex?: number,
  proList: Product[],
  payType: 'weixin' | 'zhifubao' | 'yue',
  proNum: number,
}

/**
*  购买页面
*/
export default class PayCloudPhone extends BaseNavNavgator {
  state: State = {
    cloudPhone: this.data.cloudPhone,
    discount: this.data.discount, //优惠券
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
  convertDiscount: ConvertDiscount | null = null;

  loadData = () => {
    this.setState({ refreshing: true });

    request.post('/tcssPlatform/product/proList', { typeId: 1 }, false).then(res => {
      this.setState({ proList: res.list, refreshing: false, nowSelectIndex: (res.list && res.list.length > 0) ? 0 : undefined })
    }).catch(err => {
      this.setState({ refreshing: false })
    })

  }

  render() {
    let { refreshing, proList, watchMore, nowSelectIndex, payType, proNum, discount } = this.state;
    let vipText = '云手机授权，云端运行，三端互通设备\n升级，安卓系统';
    let proDatas = watchMore ? proList : proList.slice(0, 5);

    let finalPrice = 0, //最终总价
        finalDiscount = 0, //最终优惠金额
        finalPayType = payType; //最终支付方式

    // 计算未使用优惠券之前的总价
    if( nowSelectIndex != undefined ){
      finalPrice = proList[nowSelectIndex].proPrice * proNum
    }

    // 计算使用优惠券之后的总价
    if( discount != undefined ){
      if(finalPrice >= discount.lowerLimit) {
        finalDiscount = discount.amount;
      }
    }
    finalPrice -= finalDiscount;
    if( finalPrice < 0 ){
      finalPrice = 0;
    }


    // 当总金额为0时，只能使用余额支付
    if (finalPrice == 0 && nowSelectIndex != undefined) {
      finalPayType = 'yue';
    }



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
                    onPress={() => this.setState({ nowSelectIndex: index })}
                    key={pro.id}>
                    <Text style={{ color: select ? '#B3944C' : '#666', fontSize: 14, marginLeft: 15 }}>{pro.proName}</Text>
                    <Text style={{ color: select ? '#885C20' : '#FE5437', fontSize: 10, marginRight: 20 }}>￥<Text style={{ fontSize: 14 }}>{pro.proPrice}</Text>元</Text>
                  </TouchableOpacity>
                )
              })
            }
            {
              proList.length > 5 ? (
                <TouchableOpacity style={{ height: 35, alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => this.setState({ watchMore: !watchMore })}>
                  <Text style={{ color: '#6498FF', fontSize: 14 }}>{watchMore ? '收起' : '更多套餐'}</Text>
                </TouchableOpacity>
              ) : <View style={{ height: 10 }} />
            }

          </View>

        </ScrollView>

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
          {/* 优惠券 */}
          {
            nowSelectIndex != undefined &&
            <TouchableOpacity style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1 }}
                              onPress={this.discountPress}>
              <Text style={{ color: '#333', fontSize: 15, marginLeft: 25 }}>优惠券</Text>
              <View style={{ flex: 1 , flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={{ width: 50, height: 25, backgroundColor: '#6498FF', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{ this.convertDiscount.show() }}>
                  <Text style={{ fontSize: 13, color: '#fff'}}>兑换</Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 6, color: '#FE5437', fontSize: 14}}>{finalDiscount > 0 ? `-${finalDiscount}` : ''}</Text>
              </View>

              <Icon style={{ color: '#666', fontSize: 12, marginLeft: 3, marginRight: 20 }} iconCode={0xe649} />
            </TouchableOpacity>
          }


          {
            finalPayType != 'yue' &&
            <TouchableOpacity style={{ height: 40, flexDirection: 'row', alignItems: 'center' }}
                              onPress={() => this.setState({ payType: 'weixin' })}>
              <Image style={{ width: 26, height: 26, marginLeft: 25 }} resizeMode='contain' source={require('#/home/weixinBtn.png')} />
              <Text style={{ color: '#999', fontSize: 15, marginLeft: 7, flex: 1 }}>微信支付</Text>
              <Image style={{ width: 21, height: 21, marginRight: 20 }} source={finalPayType == 'weixin' ? require('#/home/selectBtn.png') : require('#/home/normalBtn.png')} />
            </TouchableOpacity>
          }

          {
            finalPayType != 'yue' &&
            <TouchableOpacity
                style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderTopColor: '#eee', borderTopWidth: 1 }}
                onPress={() => this.setState({ payType: 'zhifubao' })}>
              <Image style={{ width: 26, height: 26, marginLeft: 25 }} resizeMode='contain'
                     source={require('#/home/zfbBtn.png')}/>
              <Text style={{ color: '#999', fontSize: 15, marginLeft: 7, flex: 1 }}>支付宝支付</Text>
              <Image style={{ width: 21, height: 21, marginRight: 20 }}
                     source={finalPayType == 'zhifubao' ? require('#/home/selectBtn.png') : require('#/home/normalBtn.png')}/>
            </TouchableOpacity>
          }

          {
            finalPayType == 'yue' &&
            <TouchableOpacity style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderTopColor: '#eee', borderTopWidth: 1 }}
                              onPress={() => this.setState({ payType: 'yue' })}>
              <Image style={{ width: 26, height: 26, marginLeft: 25 }} resizeMode='contain' source={require('#/home/zfbBtn.png')} />
              <Text style={{ color: '#999', fontSize: 15, marginLeft: 7, flex: 1 }}>余额支付</Text>
              <Image style={{ width: 21, height: 21, marginRight: 20 }} source={require('#/home/selectBtn.png')} />
            </TouchableOpacity>
          }

        </View>

        {/* 底部支付部分 */}
        <View style={{ height: 60, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#666', fontSize: 14, marginLeft: 20, flex: 1 }}>总价：<Text style={{ color: '#FE5437', fontSize: 18 }}>{finalPrice}元</Text></Text>
          <ImageBtn style={{ marginRight: 12 }} imgWidth={106} imgHeight={46} source={require('#/home/payBtn.png')} onPress={this.payBtnClick} />
        </View>

        {/* 兑换优惠券 */}
        <ConvertDiscount
            ref={modal => this.convertDiscount = modal}
        />

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
   * 优惠券点击
   */
  discountPress = () => {
    let { nowSelectIndex, proList } = this.state;
    this.navigate(
        'DiscountList',
        {
          title: "选择优惠券",
          product: proList[nowSelectIndex],
          chooseCallback:(discount) => {
            this.setState({ discount: discount})
          }
        }
    )
  }

  /**
  *  支付按钮点击事件
  */
  payBtnClick = () => {
    let { cloudPhone, proList, nowSelectIndex, proNum } = this.state;
    if (nowSelectIndex == undefined) {
      tips.showTips('请选择商品')
      return;
    }
    let proId = proList[nowSelectIndex].id

    if (cloudPhone) {
      // 续费
      let relationId = cloudPhone.id
      let product = [{ proId, relationId }]
      request.post('/tcssPlatform/order/renewCreateOrder', { productJson: JSON.stringify(product) }, true).then(res => {
        this.orderPay(res.order.id);
      })
    } else {
      // 确认订单
      request.post('/tcssPlatform/order/confirmOrder', { productArr: JSON.stringify([proId]) }, true).then(res => {
        // 创建订单
        let product = []
        for (let i = 0; i < proNum; i++) {
          product.push({ proId: res.list[0].id, num: 1 })
        }
        request.post('/tcssPlatform/order/createOrder', { productJson: JSON.stringify(product), orderType: 1 }, true).then(res => {
          this.orderPay(res.order.id)
        })
      })
    }
  }

  /**
  *  发起支付
  */
  orderPay = (orderId: string) => {
    let { payType } = this.state;

    let paramPayType = 1;
    if ( payType == 'weixin' ){
      paramPayType = 1;
    }else if ( payType == 'zhifubao'){
      paramPayType = 2;
    }else if ( payType == 'yue'){
      paramPayType = 3;
    }

    // TODO:  这里不知道接口参数是否要改变
    request.post('/tcssPlatform/pay/orderPay', { orderId, payType: paramPayType, payMethod: 2 }, true).then(res => {

      if (payType == 'weixin') {
        this.wexinPay(res.orderPay)
      } else if (payType == 'zhifubao') {
        this.aliPay(res.orderPay)
      } else if ( payType == 'yue') {
        // TODO: 这里还不确定要干嘛
      }
    })
  }

  /**
  *  微信支付
  */
  wexinPay = (orderPay: OrderPay) => {
    let outCodeData = JSON.parse(orderPay.outCodeUrl);

    let payData = {
      appid: outCodeData.appid,
      partnerid: outCodeData.partnerid,
      prepayid: outCodeData.prepayid,
      noncestr: outCodeData.noncestr,
      timestamp: outCodeData.timestamp,
      package: outCodeData.package,
      sign: outCodeData.sign
    }

    RNArenaPay.wechatPay(payData).then((data: any) => {
      this.navToPayResult(orderPay)
    }, (error: any) => {
      this.navToPayResult()
    })
  }

  /**
  *  支付宝支付
  */
  aliPay = (orderPay: OrderPay) => {

    let outCodeUrl = orderPay.outCodeUrl

    // 支付宝支付
    RNArenaPay.aliPay({ payInfo: outCodeUrl }).then((data: any) => {
      this.navToPayResult(orderPay)
    }, (error: any) => {
      this.navToPayResult()
    })
  }

  /**
  *  跳转支付结果
  */
  navToPayResult = (orderPay?: OrderPay) => {
    this.replace('PayResult', { title: '支付结果', cloudPhone: this.state.cloudPhone, orderPay })
  }

}