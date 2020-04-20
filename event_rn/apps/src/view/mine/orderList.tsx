
import dayjs from 'dayjs';
import { BaseNavNavgator, DefaultListView, Icon, ImageBtn, request } from 'dl-kit';
import { OrderInfo } from 'global';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { getOrderStatusStr } from '../../module/publicFunc';

interface State {
    nowSelectTabIndex: number,
    orderList: OrderInfo[],
}
/**
*  消息列表
*/
export default class OrderList extends BaseNavNavgator {
    state: State = {
        nowSelectTabIndex: 0,
        orderList: []
    }

    constructor(props: any) {
        super(props)
    }

    listView: DefaultListView | null = null;
    tabTexts = ['全部', '已支付', '支付失败']

    loadData = (pageNum: number) => {

        if (pageNum == 0) {
            request.post('/tcssPlatform/order/orderList', {}, false).then(result => {


                this.setState({ orderList: result }, () => {
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
    }

    /**
    *  设置列表数据
    */
    setListViewData = () => {
        let { nowSelectTabIndex, orderList } = this.state;

        switch (nowSelectTabIndex) {
            case 0: //全部
                this.listView && this.listView.setData(orderList, 0);
                break;

            case 1: // 支付成功
                let successOrderList = orderList.filter(order => (order.orderStatus == 20 || order.orderStatus == 30))
                this.listView && this.listView.setData(successOrderList, 0);
                break

            case 2: // 支付失败
                let errOrderList = orderList.filter(order => order.orderStatus == 15 || order.orderStatus == 10 || order.orderStatus == 0)
                this.listView && this.listView.setData(errOrderList, 0);
                break

        }
    }

    /**
    *  加载空列表页面
    */
    renderListEmptyComponent = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{ width: 180, height: 175, marginTop: 75 }} resizeMode='contain' source={require('#/home/emptyList.png')} />
                <ImageBtn style={{ marginTop: 9 }} imgWidth={223} imgHeight={63} source={require('#/home/buyPhone.png')}
                    onPress={this.addCloudPhoneClick} />
            </View>
        )
    }

    renderItem = (item: OrderInfo, index: number) => {
        let orderFail = item.orderStatus == 0
        let pro = item.detailList[0] || {}
        return (
            <View style={{ backgroundColor: '#fff', marginTop: 10, marginHorizontal: 15, borderRadius: 5, shadowColor: '#999', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6 }}
                key={item.id}>
                {/* 订单信息 */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: 12, marginLeft: 15, flex: 1 }}>
                        <Text style={{ color: '#333', fontSize: 12 }}>订单号：{item.orderNumber}</Text>
                        <Text style={{ color: '#333', fontSize: 12, marginTop: 6 }}>订单日期：{dayjs(item.orderTime).format('YYYY-MM-DD HH:mm:ss')}</Text>
                    </View>
                    <Text style={{ color: orderFail ? '#FE5437' : '#666', fontSize: 14, marginTop: 15, marginRight: 14 }}>{getOrderStatusStr(item.orderStatus)}</Text>
                </View>

                {/* 商品信息 */}
                <View style={{ marginLeft: 11, marginTop: 7, borderRadius: 2, borderWidth: 1, alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderColor: '#F2D7A0', backgroundColor: '#FEFCEE', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#B3944C', fontSize: 13, lineHeight: 15 }}>套餐类型：{pro.proName}</Text>
                </View>

                {/* 支付金额  */}
                <View style={{ marginLeft: 15, marginRight: 10, marginTop: 18, marginBottom: 21, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#666', fontSize: 13, flex: 1 }}>实付金额：<Text style={{ color: '#FE5437', fontSize: 15 }}>￥{item.orderAmount}</Text></Text>
                    <Text style={{ color: '#666', fontSize: 13 }}>查看订单</Text>
                    <Icon style={{ color: '#666', fontSize: 12, marginLeft: 3 }} iconCode={0xe649} />
                </View>
            </View>
        )
    }



    onPressItem = (item: OrderInfo, index: number) => {
        this.navigate('OrderDetail', { title: '订单详情', orderInfo: item })
    }



    /**
    *  添加云手机
    */
    addCloudPhoneClick = () => {
        this.navigate('PayCloudPhone', { title: '购买云手机' })
    }

}