
import { BaseComponent, request } from 'dl-kit';
import React from 'react';
import { Discount } from 'global';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface State {
    /**
     *  是否显示
     */
    visible: boolean,
    /**
     *  兑换码
     */
    code: string,
    /**
     *  提示文字
     */
    tipText: string,
}

interface Props {
    // 兑换成功
    passCallback: (discount:Discount) => void
}

/**
 *  优惠券兑换码
 */
export default class ConvertDiscount extends BaseComponent<Props> {
    state: State = {
        visible: false,
        code: '',
        tipText: '',
    }
    constructor(props: Props) {
        super(props)
    }


    render() {
        let { visible, code, tipText } = this.state
        return (
            <Modal visible={visible}
                   transparent={true}
                   animationType='none'>

                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center' }}>

                    {/* 卡片 */}
                    <View style={{ marginTop: 200, width: 300, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden' }}>
                        <View style={{ height: 35, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#333', fontSize: 15 }}>输入兑换码</Text>
                        </View>

                        {/* 输入部分 */}
                        <View style={{ marginVertical:10 }}>
                            <View style={{ height: 50, marginHorizontal:15, backgroundColor: '#F5F5F5', paddingHorizontal: 10 }}>
                                <TextInput
                                    style={{ padding: 0, flex: 1, fontSize: 14 }}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                    placeholder='输入兑换码'
                                    placeholderTextColor='#aaa'
                                    value={code}
                                    onChangeText={text => this.setState({ code: text })}
                                />
                            </View>
                            {/* 文字提示 */}
                            <Text style={{ marginHorizontal:15, color: '#f00', fontSize: 14, marginTop: 8 }}>{tipText}</Text>
                        </View>

                        {/* 取消确定按钮 */}
                        <View style={{ height: 45, borderTopColor: '#ccc', borderTopWidth: 0.5, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightColor: '#ccc', borderRightWidth: 0.5 }}
                                              onPress={this.hidden}>
                                <Text style={{ color: '#999', fontSize: 15 }}>取消</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                                              onPress={this.determineBtnClick}>
                                <Text style={{ color: '#6498FF', fontSize: 15 }}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
        );
    }


    /**
     *  隐藏
     */
    hidden = () => {
        this.setState({
            visible: false
        })
    }

    /**
     *  显示
     */
    show = () => {
        this.setState({
            visible: true
        })
    }


    /**
     *  确定按钮点击事件
     */
    determineBtnClick = () => {
        let { code } = this.state;

        //TODO:  这里需要掉兑换的接口
        request.post('/client/coupon/exchangeCode', {code:code}, false).then(result => {

            // 兑换成功，立即回调
            this.setState({ visible: false, code: '' }, () => {
                this.props.passCallback({
                    id: result.id,
                    //useStatus: number, //优惠券使用状态 1:未领取 2 领取了 3 使用了 4 禁用
                    charUseStatus: result.charUseStatus, //优惠券使用状态 1:未领取 2 领取了 3 使用了 4 禁用  5 过期
                    couponValue: result.couponValue, //优惠券抵扣金额
                    couponMinAmount: result.couponMinAmount, //使用优惠券最低金额
                    couponName: result.couponName, //优惠券名称
                    couponType: result.couponType, //优惠券类型 1: 直减券 2: 满减券
                    couponDesc: result.couponDesc, //优惠券使用规则
                    startTime: result.startTime, //开始时间
                    expireTime: result.expireTime, //过期时间
                    getTime: result.getTime, //领券时间
                    useTime: result.useTime, //使用时间
                    proTypeId: result.proTypeId //商品分类ID
                });
            })

        }).catch(err => {
            this.setState({ tipText: err.message });
            setTimeout(() => {
                this.setState({ tipText: '' })
            }, 2000);
        })

    }

}