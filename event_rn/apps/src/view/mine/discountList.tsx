
import dayjs from 'dayjs';
import { BaseNavNavgator, DefaultListView, request, tips } from 'dl-kit';
import { Discount, Product } from 'global';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ConvertDiscount from '../../module/convertDiscount';

interface State {
    nowSelectTabIndex: number,
    discountList: Discount[],
    chooseCallback?: (discount:Discount)=>{},
    product?: Product
}
/**
 *  优惠券列表
 */
export default class DiscountList extends BaseNavNavgator {
    state: State = {
        nowSelectTabIndex: 0,
        discountList: [],
        product: this.data.product,
        chooseCallback: this.data.chooseCallback
    };

    convertDiscount: ConvertDiscount | null = null;

    constructor(props: any) {
        super(props)
        this.setRight(
            <TouchableOpacity style={{marginRight: 16, width: 40, height: 25, justifyContent:'center', alignItems:'center'}}
                onPress={this.convert.bind(this)}>
                <Text style={{fontSize: 16, color:'#333'}}>兑换</Text>
            </TouchableOpacity>
        )
    }

    listView: DefaultListView | null = null;
    tabTexts = ['未使用', '已使用', '已过期/失效']

    loadData = (pageNum: number) => {

        console.log("商品 == ",this.state.product);

        if (pageNum == 0) {
            request.post('/client/coupon/list', {}, false).then(result => {
                this.setState({ discountList: result.list }, () => {
                    this.setListViewData()
                })
            }).catch(err => {

                this.listView && this.listView.setData(null, pageNum);
            })
        } else {
            this.listView && this.listView.setData([], pageNum);
        }

    }


    render() {
        let { nowSelectTabIndex } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {/* 顶部Tab切换 */}
                <View style={{ backgroundColor: '#fff', height: 45, flexDirection: 'row' }}>
                    {
                        this.tabTexts.map((t, index) => {
                            let select = nowSelectTabIndex == index;
                            return (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
                                    <TouchableOpacity style={{ backgroundColor: select ? '#6498FF' : '#fff', borderRadius: 3, paddingHorizontal: 15, paddingVertical: 4, justifyContent: 'center', alignItems: 'center' }}
                                        onPress={this.tabSelect.bind(this, index)}>
                                        <Text style={{ color: select ? '#fff' : '#333', fontSize: 15, lineHeight: 17 }}>{t}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
                <DefaultListView
                    ref={lv => this.listView = lv}
                    loadData={this.loadData}
                    renderItem={this.renderItem}
                    listEmptyComponent={this.renderListEmptyComponent}
                    onPressItem={this.onPressItem}
                    showItemSeparator={false} />

                {/* 兑换优惠券 */}
                <ConvertDiscount
                    ref={modal => this.convertDiscount = modal}
                    passCallback={this.convertPass}
                />
            </View>
        );
    }

    /**
     *  顶部Tab点击事件
     */
    tabSelect = (index: number) => {
        this.setState({ nowSelectTabIndex: index }, () => {
            this.setListViewData()
        })
    };

    /**
     *  设置列表数据
     */
    setListViewData = () => {
        let { nowSelectTabIndex, discountList, product } = this.state;

        switch (nowSelectTabIndex) {
            case 0: // 未使用
                let allOrderList = [];
                if(!! product ){ //如果携带有商品，则可使用的要加上商品类型进行过滤
                    allOrderList = discountList.filter(order => (order.charUseStatus == '2' && (order.proTypeId == null || order.proTypeId == product!.typeId) ));
                }else {
                    allOrderList = discountList.filter(order => (order.charUseStatus == '2' ));
                }
                this.listView && this.listView.setData(allOrderList, 0);
                break;

            case 1: // 已使用
                let successOrderList = discountList.filter(order => (order.charUseStatus == '3' ))
                this.listView && this.listView.setData(successOrderList, 0);
                break;

            case 2: // 已过期/失效
                let errOrderList = discountList.filter(order => order.charUseStatus == '4' || order.charUseStatus == '5')
                this.listView && this.listView.setData(errOrderList, 0);
                break;

        }
    };

    /**
     *  加载空列表页面
     */
    renderListEmptyComponent = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{ width: 180, height: 175, marginTop: 75 }} resizeMode='contain' source={require('#/home/emptyList.png')} />
                {/*<ImageBtn style={{ marginTop: 9 }} imgWidth={223} imgHeight={63} source={require('#/home/buyPhone.png')}*/}
                          {/*onPress={this.addCloudPhoneClick} />*/}
            </View>
        )
    };

    renderItem = (item: Discount, index: number) => {
        let { product } = this.state;
        let canUse = false;
        if(item.charUseStatus == '2'){
            if(item.couponType == 1){
                canUse = true
            }else {
                if( product != undefined ) {
                    canUse = product.proPrice * product.orderNum >= item.couponMinAmount;
                }else {
                    canUse = true;
                }
            }
        }

        return (
            <View style={{ backgroundColor: '#fff', marginTop: 10, borderRadius: 5, flexDirection: 'row', height:100, marginHorizontal:15, overflow:'hidden' }} key={index}>

                <View style={{ backgroundColor: canUse ? '#6498FF' : '#fff', width:95, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ color: canUse ? '#fff' : '#999', fontSize: 18, fontWeight: 'bold'}}>￥<Text style={{ fontSize: 26}}>{item.couponValue}</Text></Text>
                    {item.couponType == 2 && <Text style={{ color: canUse ? '#fff' : '#999', fontSize: 9, marginTop:3}}>满{item.couponMinAmount}可使用</Text>}
                    {
                        canUse &&
                        <View style={{ marginTop: 3, backgroundColor:'#fff', height:15, paddingHorizontal:6, paddingVertical:2, borderRadius:4}}>
                            <Text style={{ color:'#6498FF', fontSize: 9}}>立即使用</Text>
                        </View>
                    }
                </View>

                <View style={{ flex: 1, padding:10}}>
                    {/* 优惠券信息 */}
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: canUse ? '#333' : '#999', fontSize: 14 }}>{item.couponName}</Text>
                        <Text style={{ color: canUse ? '#333' : '#999', fontSize: 9, marginTop: 4 }}>{dayjs(item.startTime).format('YYYY-MM-DD')} - {dayjs(item.expireTime).format('YYYY-MM-DD')}</Text>
                        <Text style={{ color: canUse ? '#333' : '#999', fontSize: 9, marginTop: 4}}>{item.couponDesc}</Text>
                    </View>


                    {/* 使用情况 */}
                    <View style={{marginTop: 10}}>
                        <Text style={{ color: canUse ? '#666' : '#999', fontSize: 9 }}>领用时间：{dayjs(item.getTime).format('YYYY-MM-DD HH:mm:ss')}</Text>
                        { canUse == false && item.useTime && <Text style={{ color: '#999', fontSize: 9, marginTop: 2 }}>使用时间：{dayjs(item.useTime).format('YYYY-MM-DD HH:mm:ss')}</Text>}
                    </View>
                </View>

            </View>
        )
    };



    onPressItem = (item: Discount, index: number) => {

        // 只有可以使用的优惠券允许点击并跳转
        let { product } = this.state;
        let canUse = false;
        if(item.charUseStatus == '2'){
            if(item.couponType == 1){
                canUse = true
            }else {
                if( product != undefined ) {
                    canUse = product.proPrice * product.orderNum >= item.couponMinAmount;
                }else {
                    canUse = true;
                }
            }
        }

        if( canUse ){
            this.state.chooseCallback && this.state.chooseCallback(item);
            this.navigate('PayCloudPhone',{discount:item});
        }else{
            tips.showTips('该优惠卷无法使用');
        }
    };



    /**
     *  兑换优惠券
     */
    convert = () => {
        this.convertDiscount && this.convertDiscount.show()
    };

    /**
     * 兑换成功
     */
    convertPass = () => {
        this.loadData(0);
    }

}
