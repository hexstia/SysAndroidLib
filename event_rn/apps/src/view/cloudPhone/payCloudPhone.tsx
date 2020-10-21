
import { BaseNavNavgator, DefaultListView, Icon, ImageBtn, request, tips } from 'dl-kit';
import { CloudPhoneModal, Discount, OrderPay, Product } from 'global';
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
  discountList: Discount[]
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
    discountList: [] //优惠券列表
  }

  constructor(props: any) {
    super(props)
    this.loadData()
  }

  listView: DefaultListView | null = null;
  convertDiscount: ConvertDiscount | null = null;
  payMoney: number = 0; //最终支付总金额
  payType: string = 'weixin'; //最终支付方式

  loadData = () => {
    this.setState({ refreshing: true });

    request.post('/tcssPlatform/product/proList', { typeId: 1 }, false).then(res => {
      this.setState({ proList: res.list, refreshing: false, nowSelectIndex: (res.list && res.list.length > 0) ? 0 : undefined },()=>{
        this.loadDiscountData();
      })
    }).catch(err => {
      this.setState({ refreshing: false })
    })

  }

  /**
   * 加载优惠券信息
   */
  loadDiscountData = () => {
    let { nowSelectIndex, proList } = this.state;
    let currentPro = proList[nowSelectIndex || 0];
    request.post('/client/coupon/list', { proTypeId: currentPro.typeId, useStatus: 2 }, false).then(result => {
      this.setState({ discountList: result.list }, () => {
        this.filterCanUseDiscounts();
      });
    }).catch(err => {

    })
  }

  /**
   * 筛选可使用的优惠券
   * @return {Discount[]}
   */
  filterCanUseDiscounts = () => {
    let { nowSelectIndex, proList, proNum, discountList } = this.state;
    let currentPro = proList[nowSelectIndex || 0];

    let canUseDiscounts = discountList.filter(function (item) {
      let canUse = false;
      if(item.charUseStatus == '2'){
        if(item.couponType == 1){
          canUse = true
        }else {
          if( currentPro != undefined ) {
            canUse = currentPro.proPrice * proNum >= item.couponMinAmount;
          }else {
            canUse = true;
          }
        }
      }
      return canUse;
    });

    return canUseDiscounts;
  }

  render() {
    let { refreshing, proList, watchMore, nowSelectIndex, payType, proNum, discount } = this.state;
    let vipText = '云手机授权，云端运行，三端互通设备\n升级，安卓系统';
    let proDatas = watchMore ? proList : proList.slice(0, 5);
    let canUseDiscounts = this.filterCanUseDiscounts();

    let finalPrice = 0, //最终总价
        finalDiscount = 0, //最终优惠金额
        finalPayType = payType; //最终支付方式

    // 计算未使用优惠券之前的总价
    if( nowSelectIndex != undefined ){
      finalPrice = proList[nowSelectIndex].proPrice * proNum
    }

    // 计算使用优惠券之后的总价
    if( discount != undefined && nowSelectIndex != undefined ){
      if(discount.couponType == 2){ //如果是满减
        if(finalPrice >= discount.couponMinAmount) {
          finalDiscount = discount.couponValue;
        }
      }else {
        finalDiscount = discount.couponValue;
      }
    }
    finalPrice -= finalDiscount;
    this.payMoney = finalPrice;
    if( finalPrice < 0 ){
      finalPrice = 0;
    }



    // 当总金额为0时，只能使用余额支付
    if (finalPrice == 0 && nowSelectIndex != undefined) {
      finalPayType = 'yue';
    }
    this.payType = finalPayType;



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
                    onPress={() => this.setState({ nowSelectIndex: index }, () => { this.filterCanUseDiscounts() }) }
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

                { canUseDiscounts.length > 0 && <Text style={{ color: '#666', fontSize: 14}}>可用优惠券({canUseDiscounts.length}张)</Text>}
                <TouchableOpacity style={{ marginLeft: 6, width: 50, height: 25, backgroundColor: '#6498FF', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{ this.convertDiscount?.show() }}>
                  <Text style={{ fontSize: 13, color: '#fff'}}>兑换</Text>
                </TouchableOpacity>
              </View>

              <Icon style={{ color: '#666', fontSize: 12, marginLeft: 3, marginRight: 20 }} iconCode={0xe649} />
            </TouchableOpacity>
          }

          {
            finalDiscount > 0 &&
            <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',  borderBottomColor: '#eee', borderBottomWidth: 1 }}>
              <Text style={{ color: '#333', fontSize: 15, marginLeft: 25 }}>{discount?.couponName}</Text>
              <Text style={{ marginLeft: 6, color: '#FE5437', fontSize: 14, marginRight: 20}}>{`-${finalDiscount}`}</Text>
            </View>
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
              <Image style={{ width: 26, height: 26, marginLeft: 25 }} resizeMode='contain' source={require('#/mine/ye.jpg')} />
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
            passCallback={this.discountPassSuccess}
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
    let { nowSelectIndex, proList, proNum } = this.state;
    let param_product = proList[nowSelectIndex || 0];
    param_product.orderNum = proNum;
    this.push(
        'DiscountList',
        {
          title: "选择优惠券",
          product: param_product,
          chooseCallback:(discount:any) => {
            this.setState({ discount: discount})
          }
        }
    )
  }

  /**
   * 优惠券兑换成功回调
   * @param discount  优惠券信息
   */
  discountPassSuccess = (discount:Discount) => {
    let { nowSelectIndex, proList, proNum } = this.state;
    let currentPro = proList[nowSelectIndex || 0];
    if(discount.proTypeId == null || currentPro.typeId == discount.proTypeId){
      if(discount.couponType == 2){ //如果该优惠券是满减类型，并且当前订单能够使用该优惠券
        if( nowSelectIndex != undefined ){
          let payPrice = proList[nowSelectIndex].proPrice * proNum;
          if(payPrice >= discount.couponMinAmount) {
            this.loadDiscountData();
            this.setState({discount:discount});
            return;
          }
        }
      }
    }
  }

  /**
  *  支付按钮点击事件
  */
  payBtnClick = () => {
    let { cloudPhone, proList, nowSelectIndex, proNum, discount } = this.state;
    if (nowSelectIndex == undefined) {
      tips.showTips('请选择商品')
      return;
    }
    let proId = proList[nowSelectIndex].id;


    if (cloudPhone) {
      // 续费
      let relationId = cloudPhone.id
      let product = [{ proId, relationId }]
      request.post('/tcssPlatform/order/renewCreateOrder', { productJson: JSON.stringify(product), couponId: discount ? discount.id : null, payMoney:this.payMoney }, true).then(res => {
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
        request.post('/tcssPlatform/order/createOrder', { productJson: JSON.stringify(product), orderType: 1, couponId: discount ? discount.id : null, payMoney:this.payMoney }, true).then(res => {
          this.orderPay(res.order.id)
        })
      })
    }
  }

  /**
  *  发起支付
  */
  orderPay = (orderId: string) => {

    let paramPayType = 1;
    if ( this.payType == 'weixin' ){
      paramPayType = 1;
    }else if ( this.payType == 'zhifubao'){
      paramPayType = 2;
    }else if ( this.payType == 'yue'){
      paramPayType = 3;
    }

    request.post('/tcssPlatform/pay/orderPay', { orderId, payType: paramPayType, payMethod: 2 }, true).then(res => {

      if (this.payType == 'weixin') {
        this.wexinPay(res.orderPay)
      } else if (this.payType == 'zhifubao') {
        this.aliPay(res.orderPay)
      } else if ( this.payType == 'yue') {
        this.navToPayResult(res.orderPay)
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