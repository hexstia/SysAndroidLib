
import { BaseNavNavgator, configs, defaultStyle, ImageBtn, imagePicker, msg, request, tips } from 'dl-kit';
import { TRouterName, UserModel } from 'global';
import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { checkAuthor, logoutAndClear, saveUserInfo } from '../../module/publicFunc';

interface State {
    userInfo?: UserModel
}

interface Item {
    icon: ImageSourcePropType,
    title: string,
    text: string,
    nav: TRouterName,
    data: any,
    needAuth?: boolean
}

/**
*  我的页面
*/
export default class Mine extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
        userInfo: configs.userInfo
    }

    itemDatas: Item[] = [
        {
            icon: require('#/mine/buyIcon.png'),
            title: '购买云手机',
            text: '',
            nav: 'PayCloudPhone',
            data: { title: '购买云手机' }
        },
        {
            icon: require('#/mine/order.png'),
            title: '我的订单',
            text: '',
            nav: 'OrderList',
            data: { title: '我的订单' }

        },
        {
            icon: require('#/mine/cloudPhones.png'),
            title: '我的设备',
            text: '',
            nav: 'DeviceList',
            data: { title: '我的设备' }
        },
        {
            icon: require('#/mine/phoneNumber.png'),
            title: '手机号',
            text: (configs.userInfo?.mobile || '').replaceStrIndex(3, '****'),
            nav: 'ChangePhoneNum',
            data: { title: '修改手机号' },
            needAuth: true
        },
        {
            icon: require('#/mine/settingIcon.png'),
            title: '系统设置',
            text: '',
            nav: 'SysSetting',
            data: { title: '系统设置' }
        },
        {
            icon: require('#/mine/aboutLanjiang.png'),
            title: '关于蓝将',
            text: '',
            nav: 'BaseWebView',
            data: { title: '关于蓝将', uri: 'http://91lanjiang.com/cloud/cloudPhone/book?type=aboutApp' }
        }
    ]

    constructor(props: any) {
        super(props)

    }
    render() {
        let bgHeight = defaultStyle.device.width * 173 / 360
        let { userInfo } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {/* 顶部 */}
                <ImageBackground style={{ height: bgHeight, justifyContent: 'space-between' }} source={require('#/mine/topBGImg.png')}>
                    <ImageBtn style={{ alignSelf: 'flex-end', marginTop: 14 + defaultStyle.safeArea.navMarginTop, marginRight: 14 }}
                        source={require('#/mine/messageIcon.png')}
                        imgWidth={32}
                        imgHeight={32}
                        onPress={() => this.navigate('MessageList', { title: '消息列表' })} />
                    {/* 头像 */}
                    <TouchableOpacity style={{ width: 82, height: 82, marginBottom: -17, alignSelf: 'center' }}
                        onPress={this.uploadUserImg}>
                        <Image style={{ width: 82, height: 82, borderRadius: 41, alignSelf: 'center' }} source={userInfo ? { uri: userInfo.userImg } : require('#/mine/defaultHeaderIcon.png')} />
                    </TouchableOpacity>
                </ImageBackground>

                {/* 手机号 */}
                <Text style={{ color: '#333', fontSize: 16, alignSelf: 'center', marginTop: 22 }}>{(configs.userInfo?.mobile || '').replaceStrIndex(3, '****')}</Text>

                {/* 按钮栏目 */}
                <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
                    {
                        this.itemDatas.map(item => {
                            return (
                                <TouchableOpacity style={{ height: 45, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1 }}
                                    onPress={this.itemClick.bind(this, item)}>
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
                {
                    configs.token && (
                        <ImageBtn style={{ marginTop: 24, alignSelf: 'center' }}
                            imgWidth={223}
                            imgHeight={63}
                            source={require('#/mine/logoutBtn.png')}
                            onPress={this.logout} />
                    )
                }

            </View>
        );
    }

    /**
    *  每个栏目的点击事件
    */
    itemClick = (item: Item) => {
        if (!item.needAuth || checkAuthor()) {
            this.navigate(item.nav, item.data)
        }
    }

    /**
    *  退出登录
    */
    logout = () => {
        logoutAndClear()
        msg.emit('logout', { message: '退出登录' })
    }

    /**
    *  换头像
    */
    uploadUserImg = () => {
        if (checkAuthor()) {
            imagePicker({ cropping: true, width: 400, height: 400, multiple: false, mediaType: 'photo' }, (data: any) => {

                console.log('图片选择', data)
                request.upload('/tcssPlatform/user/info/uploadUserImg', { paths: [data.path] }, true).then(res => {
                    tips.showTips('上传成功!');
                    saveUserInfo(res.userInfo);
                    this.setState({
                        userInfo: res.userInfo
                    })
                })
            })
        }

    }
}