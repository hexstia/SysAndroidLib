
import dayjs from 'dayjs';
import { BaseNavNavgator, DefaultListView, Icon, msg, request } from 'dl-kit';
import { Discount } from 'global';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { getDiscountStatusStr } from '../../module/publicFunc';
import ConvertDiscount from '../../module/convertDiscount';

interface State {
    nowSelectTabIndex: number,
    discountList: Discount[],
    chooseCallback: (discount:Discount)=>{}
}
/**
 *  优惠券列表
 */
export default class DiscountList extends BaseNavNavgator {
    state: State = {
        nowSelectTabIndex: 0,
        discountList: [],
        chooseCallback: this.data.chooseCallback
    };

    convertDiscount: ConvertDiscount | null = null;

    constructor(props: any) {
        super(props)
        msg.on('phoneListChange', () => {
            this.loadData(0)
        })
        this.setRight(
            <TouchableOpacity style={{marginRight: 16, width: 40, height: 25, justifyContent:'center', alignItems:'center'}}
                              onPress={this.convert.bind(this)}>
                <Text style={{fontSize: 16, color:'#333'}}>兑换</Text>
            </TouchableOpacity>
        )
    }

    listView: DefaultListView | null = null;
    tabTexts = ['全部', '未使用', '已使用']

    loadData = (pageNum: number) => {

        if (pageNum == 0) {
            request.post('/tcssPlatform/order/orderList', {}, false).then(result => {

                let discountList = [{
                    id:1,
                    discountStatus:15,
                    amount:3,
                    lowerLimit: 50,
                    name:"云手机新人优惠体验",
                    describe:"仅可购买云手机",
                    startTime:new Date(),
                    endTime:new Date(),
                    receiveTime:new Date(),
                    useTime:new Date(),
                },{
                    id:2,
                    discountStatus:20,
                    amount:10,
                    lowerLimit: 50,
                    name:"这里是优惠券的名字",
                    describe:"仅可购买云手机",
                    startTime:new Date(),
                    endTime:new Date(),
                    receiveTime:new Date(),
                    useTime:new Date(),
                }];
                this.setState({ discountList: discountList }, () => {
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
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        let { nowSelectTabIndex, discountList } = this.state;

        switch (nowSelectTabIndex) {
            case 0: //全部
                this.listView && this.listView.setData(discountList, 0);
                break;

            case 1: // 未使用
                let successOrderList = discountList.filter(order => (order.discountStatus == 15 ))
                this.listView && this.listView.setData(successOrderList, 0);
                break

            case 2: // 已使用
                let errOrderList = discountList.filter(order => order.discountStatus == 20)
                this.listView && this.listView.setData(errOrderList, 0);
                break

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

        let canUse = item.discountStatus === 15;

        return (
            <View style={{ backgroundColor: '#fff', marginTop: 10, borderRadius: 5, flexDirection: 'row', height:100, marginHorizontal:15, overflow:'hidden' }}
                  key={item.id}>

                <View style={{ backgroundColor: canUse ? '#6498FF' : '#fff', width:95, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ color: canUse ? '#fff' : '#999', fontSize: 18, fontWeight: 'bold'}}>￥<Text style={{ fontSize: 26}}>{item.amount}</Text></Text>
                    <Text style={{ color: canUse ? '#fff' : '#999', fontSize: 9, marginTop:3}}>满{item.lowerLimit}可使用</Text>
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
                        <Text style={{ color: canUse ? '#333' : '#999', fontSize: 14 }}>{item.name}</Text>
                        <Text style={{ color: canUse ? '#333' : '#999', fontSize: 9, marginTop: 4 }}>{dayjs(item.startTime).format('YYYY-MM-DD')} - {dayjs(item.endTime).format('YYYY-MM-DD')}</Text>
                        <Text style={{ color: canUse ? '#333' : '#999', fontSize: 9, marginTop: 4}}>{item.describe}</Text>
                    </View>


                    {/* 使用情况 */}
                    <View style={{marginTop: 10}}>
                        <Text style={{ color: canUse ? '#666' : '#999', fontSize: 9 }}>领用时间：{dayjs(item.receiveTime).format('YYYY-MM-DD HH:mm:ss')}</Text>
                        { canUse == false && <Text style={{ color: '#999', fontSize: 9, marginTop: 2 }}>使用时间：{dayjs(item.useTime).format('YYYY-MM-DD HH:mm:ss')}</Text>}
                    </View>
                </View>

            </View>
        )
    };



    onPressItem = (item: Discount, index: number) => {
        // 未使用的优惠券点击后，跳转到下单页
        if( item.discountStatus == 15 ){
            this.state.chooseCallback && this.state.chooseCallback(item);
            this.navigate('PayCloudPhone',{discount:item});
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
