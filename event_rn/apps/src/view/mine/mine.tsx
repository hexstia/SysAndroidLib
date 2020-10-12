
import { BaseNavNavgator, configs, defaultStyle, ImageBtn, imagePicker, msg, request, tips } from 'dl-kit';
import { TRouterName, UserModel } from 'global';
import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { checkAuthor, logoutAndClear, saveUserInfo } from '../../module/publicFunc';

interface State {
    userInfo?: UserModel,
    messageCount: number,
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
        userInfo: configs.userInfo,
        messageCount: 0,
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
            icon: require('#/mine/settingIcon.png'),
                title: '优惠券',
            text: '',
            nav: 'DiscountList',
            data: { title: '优惠券' }
        }
    ]

    constructor(props: any) {
        super(props)
    }

    viewDidFocus() {
        request.post('/tcssPlatform/user/noticeCount', {}, false).then(result => {
            this.setState({ messageCount: result.messageSum })
        })

        this.setState({ userInfo: configs.userInfo })
    }

    render() {

        let { userInfo, messageCount } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {/* 顶部 */}
                <ImageBackground style={{ height: 210, width: defaultStyle.device.width }} source={require('#/mine/topBGImg.png')}>
                    <ImageBtn style={{ alignSelf: 'flex-end', marginTop: 10 + defaultStyle.safeArea.navMarginTop, marginRight: 14 }}
                        source={messageCount > 0 ? require('#/mine/messageIcon.png') : require('#/mine/messageIcon_nor.png')}
                        imgWidth={32}
                        imgHeight={32}
                        onPress={() => this.navigate('MessageList', { title: '消息列表' })} />
                    {/* 头像 */}
                    <TouchableOpacity style={{ width: 82, height: 82, marginTop: 12, alignSelf: 'center' }}
                        onPress={this.uploadUserImg}>
                        <Image style={{ width: 82, height: 82, borderRadius: 41, alignSelf: 'center' }} source={(userInfo && userInfo.userImg && userInfo.userImg.length > 4) ? { uri: userInfo.userImg } : require('#/mine/defaultHeaderIcon.png')} />
                    </TouchableOpacity>

                    {
                        configs.token ? (
                            <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center', marginTop: 12 }}>{(configs.userInfo?.mobile || '').replaceStrIndex(3, '****')}</Text>
                        ) : (
                                <TouchableOpacity style={{ marginTop: 5, paddingVertical: 2, paddingHorizontal: 18, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 4, borderWidth: 1, borderColor: '#fff' }}
                                    onPress={this.gotoLogin}>
                                    <Text style={{ color: '#fff', fontSize: 14 }}>登录</Text>
                                </TouchableOpacity>
                            )
                    }

                </ImageBackground>

                {/* 按钮栏目 */}
                <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
                    {
                        this.itemDatas.map(item => {
                            return (
                                <TouchableOpacity style={{ height: 45, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1 }}
                                    onPress={this.itemClick.bind(this, item)}
                                    key={item.title}>
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
        msg.emit('changeRootRoute', { rootRoute: 'Login' })
    }

    /**
    *  跳转登录页面
    */
    gotoLogin = () => {
        msg.emit('changeRootRoute', { rootRoute: 'Login' })
    }

    /**
    *  换头像
    */
    uploadUserImg = () => {
        if (checkAuthor()) {
            imagePicker({ cropping: true, width: 400, height: 400, multiple: false, mediaType: 'photo' }, (data: any) => {

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