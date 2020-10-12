
import { BaseComponent, request } from 'dl-kit';
import React from 'react';
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
    passCallback: () => void
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
                        <View style={{ flexDirection: 'row', marginVertical:10 }}>
                            <View style={{ height: 50, flex: 1, marginHorizontal:15, backgroundColor: '#F5F5F5', paddingHorizontal: 10 }}>
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

                    {/* 文字提示 */}
                    <Text style={{ color: '#f00', fontSize: 14, marginTop: 20 }}>{tipText}</Text>
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
        request.post('/tcssPlatform/user/checkcode', {code:code}, false).then(result => {

            // 兑换成功，立即回调
            this.setState({ visible: false, code: '' }, () => {
                this.props.passCallback();
            })

        }).catch(err => {
            this.setState({ tipText: '兑换失败' })
            this.setState({ tipText: '验证码不正确' })
            setTimeout(() => {
                this.setState({ tipText: '' })
            }, 2000);
        })

    }

}