
import { BaseNavNavgator, configs, defaultStyle, ImageBtn, msg } from 'dl-kit';
import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { logoutAndClear } from '../../module/publicFunc';

interface State {
}

interface Item {
    icon: ImageSourcePropType,
    title: string,
    text: string,
}

/**
*  我的页面
*/
export default class Mine extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
    }

    itemDatas: Item[] = [
        {
            icon: require('#/mine/buyIcon.png'),
            title: '购买云手机',
            text: '',
        },
        {
            icon: require('#/mine/order.png'),
            title: '我的订单',
            text: '',
        },
        {
            icon: require('#/mine/cloudPhones.png'),
            title: '我的设备',
            text: '',
        },
        {
            icon: require('#/mine/phoneNumber.png'),
            title: '手机号',
            text: configs.userInfo?.mobile || '',
        },
        {
            icon: require('#/mine/settingIcon.png'),
            title: '系统设置',
            text: '',
        }
    ]

    constructor(props: any) {
        super(props)

    }
    render() {
        let bgHeight = defaultStyle.device.width * 173 / 360
        return (
            <View style={{ flex: 1 }}>
                {/* 顶部 */}
                <ImageBackground style={{ height: bgHeight, justifyContent: 'space-between' }} source={require('#/mine/topBGImg.png')}>
                    <ImageBtn style={{ alignSelf: 'flex-end', marginTop: 14 + defaultStyle.safeArea.navMarginTop, marginRight: 14 }}
                        source={require('#/mine/messageIcon.png')}
                        imgWidth={32}
                        imgHeight={32}
                        onPress={() => this.navigate('MessageList', { title: '消息列表' })} />

                    <Image style={{ width: 82, height: 82, marginBottom: -17, alignSelf: 'center' }} source={require('#/mine/defaultHeaderIcon.png')} />
                </ImageBackground>

                {/* 手机号 */}
                <Text style={{ color: '#333', fontSize: 16, alignSelf: 'center', marginTop: 22 }}>{configs.userInfo?.mobile}</Text>

                {/* 按钮栏目 */}
                <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
                    {
                        this.itemDatas.map(item => {
                            return (
                                <TouchableOpacity style={{ height: 45, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                                    <Image style={{ width: 18, height: 18, marginLeft: 20 }} source={item.icon} />
                                    <Text style={{ color: '#333', fontSize: 15, marginLeft: 10, flex: 1 }}>{item.title}</Text>
                                    <Text style={{ color: '#666', fontSize: 15, marginLeft: 10 }}>{item.text}</Text>
                                    <Image style={{ width: 9, height: 15, marginLeft: 10, marginRight: 15 }} resizeMode='contain' source={require('#/mine/rightFlowIcon.png')} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                {/* 退出登录按钮 */}
                <ImageBtn style={{ marginTop: 24, alignSelf: 'center' }}
                    imgWidth={223}
                    imgHeight={63}
                    source={require('#/mine/logoutBtn.png')}
                    onPress={this.logout} />
            </View>
        );
    }


    logout = () => {
        logoutAndClear()
        msg.emit('logout', { message: '退出登录' })
    }
}