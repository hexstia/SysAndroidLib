
import { BaseNavNavgator } from 'dl-kit';
import { OrderInfo } from 'global';
import React from 'react';
import { Text, View } from 'react-native';
import { getOrderStatusStr } from '../../module/publicFunc';

interface State {
    orderInfo: OrderInfo
}

/**
*  订单详情
orderInfo:订单详情数据
*/
export default class OrderDetail extends BaseNavNavgator {
    state: State = {
        orderInfo: this.data.orderInfo
    }

    constructor(props: any) {
        super(props)
    }

    render() {
        let { orderInfo } = this.state;
        let orderFail = orderInfo.orderStatus == 0
        let proList = orderInfo.detailList
        let proNum = 0

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', marginTop: 10, marginHorizontal: 15, borderRadius: 5, overflow: 'hidden' }}>
                    {/* 订单信息 */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 12, marginLeft: 15, flex: 1 }}>
                            <Text style={{ color: '#333', fontSize: 12 }}>订单号：{orderInfo.orderNumber}</Text>
                            <Text style={{ color: '#333', fontSize: 12, marginTop: 6 }}>订单日期：{orderInfo.orderTime}</Text>
                        </View>
                        <Text style={{ color: orderFail ? '#FE5437' : '#666', fontSize: 14, marginTop: 15, marginRight: 14 }}>{getOrderStatusStr(orderInfo.orderStatus)}</Text>
                    </View>

                    {/* 商品信息 */}
                    <View style={{ marginTop: 10, marginHorizontal: 15, backgroundColor: '#F6F6F6', borderRadius: 3, paddingHorizontal: 10, paddingVertical: 10 }}>
                        {
                            proList.map(pro => {
                                proNum = proNum + pro.num
                                return <Text style={{ color: '#FE5437', fontSize: 12, lineHeight: 16 }}>设备号：{pro.deviceId}</Text>
                            })
                        }
                    </View>

                    {/* 设备信息 */}
                    <View style={{ marginTop: 10, marginBottom: 15, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ color: '#666', fontSize: 13 }}>设备台数：{proNum}台</Text>
                        <Text style={{ color: '#666', fontSize: 13, marginLeft: 9 }}>总计金额：¥ {orderInfo.orderAmount}</Text>
                    </View>

                </View>
            </View>
        );
    }
}