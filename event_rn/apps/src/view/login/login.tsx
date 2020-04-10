
import { BaseNavNavgator, configs, defaultStyle, msg, request, tips } from 'dl-kit';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNArenaPay from 'react-native-arena-pay';
import CheckImgCode from '../../module/checkImgCode';
import { getTempToken, isPhoneNum, saveLoginInfo } from '../../module/publicFunc';


interface State {
    loginType: 'passwordLogin' | 'verCode',
    phone: string,
    password: string,
    verCode: string,
    minutes: number,
    imgId: string,
    checkcode: string,
}

export default class Login extends BaseNavNavgator {
    static navigationOptions = { header: null }


    state: State = {
        loginType: 'passwordLogin',
        phone: '',
        password: '',
        verCode: '',
        minutes: 0,
        imgId: '',
        checkcode: '',
    }

    interval: NodeJS.Timeout | undefined = undefined;
    checkImgCode: CheckImgCode | null = null;

    constructor(props: any) {
        super(props)


    }
    render() {
        let { loginType, phone, password, verCode, minutes } = this.state;

        return (
            <ScrollView style={{ flex: 1 }} keyboardDismissMode='on-drag'>
                {/* logo */}
                <Image style={{ marginTop: defaultStyle.safeArea.navMarginTop + 25, width: 75, height: 75, borderRadius: 8, backgroundColor: '#eee', alignSelf: 'center' }}
                    resizeMode='contain'
                    source={require('#/login/logo.png')} />

                {/* 手机号 */}
                <View style={{ marginTop: 25, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16 }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        keyboardType='phone-pad'
                        placeholder='请输入手机号'
                        placeholderTextColor='#aaa'
                        value={phone}
                        onChangeText={text => this.setState({ phone: text })}
                    />
                </View>

                {/* 密码 或者 验证码 */}
                {
                    loginType == 'passwordLogin' ? (
                        <View style={{ marginTop: 10, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
                            <TextInput
                                style={{ padding: 0, flex: 1, fontSize: 16 }}
                                autoCapitalize='none'
                                secureTextEntry={true}
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                placeholder='请输入密码（8-20位字母数字组合）'
                                maxLength={20}
                                placeholderTextColor='#aaa'
                                value={password}
                                onChangeText={text => this.setState({ password: text })}
                            />
                        </View>
                    ) : (
                            <View style={{ marginTop: 10, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, alignSelf: 'stretch', flexDirection: 'row' }}>
                                <TextInput
                                    style={{ padding: 0, flex: 1, fontSize: 16, marginLeft: 10 }}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                    placeholder='请输入验证码'
                                    placeholderTextColor='#aaa'
                                    maxLength={6}
                                    keyboardType='number-pad'
                                    value={verCode}
                                    onChangeText={text => this.setState({ verCode: text })}
                                />
                                <TouchableOpacity style={{ width: 100, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}
                                    onPress={this.sendVcode}>
                                    <Text style={{ color: '#FF6A41', fontSize: 14 }}>{minutes == 0 ? '获取验证码' : `重新获取 ${minutes}s`}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                }

                {/* 忘记密码  切换登录方式  按钮*/}
                <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#6498FF', fontSize: 14 }} onPress={this.gotoRetrievePassword}>忘记密码</Text>
                    <Text style={{ color: '#6498FF', fontSize: 14 }} onPress={this.changeLoginType} >{loginType == 'passwordLogin' ? '验证码登录' : '密码登录'}</Text>
                </View>

                {/* 登录按钮 */}
                <TouchableOpacity style={{ marginTop: 14, marginHorizontal: 10, height: 58, flexDirection: 'row' }}
                    onPress={this.loginBtnClick}>
                    <Image style={{ flex: 1, height: 58 }} resizeMode='contain' source={require('#/login/loginBtn.png')} />
                </TouchableOpacity>

                {/* 注册按钮 */}
                <TouchableOpacity style={{ marginTop: 2, marginHorizontal: 10, height: 58, flexDirection: 'row' }}
                    onPress={this.gotoRegisterPage}>
                    <Image style={{ flex: 1, height: 58 }} resizeMode='contain' source={require('#/login/registerBtn.png')} />
                </TouchableOpacity>

                {/* 第三方登录 标题 */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 14, marginTop: 20 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8' }} />
                    <Text style={{ color: '#999999', fontSize: 14, marginHorizontal: 16 }}>第三方快捷登录</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8' }} />
                </View>

                {/* 微信和QQ的图标 */}
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 90 }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={this.qqLogin}>
                        <Image style={{ width: 40, height: 40 }} source={require('#/login/QQ_icon.png')} />
                        <Text style={{ marginTop: 10, color: '#999', fontSize: 14 }}>QQ登录</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={this.wexinLogin}>
                        <Image style={{ width: 40, height: 40 }} source={require('#/login/weixin_icon.png')} />
                        <Text style={{ marginTop: 10, color: '#999', fontSize: 14 }}>微信登录</Text>
                    </TouchableOpacity>
                </View>


                {/* 图形验证码 */}
                <CheckImgCode
                    ref={modal => this.checkImgCode = modal}
                    passCallback={this.imgCodePass}
                />

            </ScrollView>
        );
    }

    /**
    *  发送验证码
    */
    sendVcode = () => {

        if (this.state.minutes > 0) { return }
        let mobile = this.state.phone

        if (isPhoneNum(mobile)) {

            // 如果是验证码登录，要验证一下手机号是否注册过
            getTempToken((token, timestamp) => {
                request.post('/tcssPlatform/user/mobile/check', { token, timestamp, mobile }, true).then(res => {
                    tips.showTips('该账号未注册');
                }).catch(err => {
                    this.checkImgCode && this.checkImgCode.show()
                })
            })
        }
    }


    /**
    *  图形验证码通过
    */
    imgCodePass = (imageId: string, checkcode: string) => {
        if (this.state.minutes > 0) { return }

        let mobile = this.state.phone
        if (isPhoneNum(mobile)) {
            getTempToken((token, timestamp) => {
                let param = { token, timestamp, mobile, type: 1, sendType: 5, from: 1 }
                request.post('/tcssPlatform/vcode/send', param, true).then(result => {
                    console.log(result)
                    tips.showTips('验证码发送成功')
                    this.setState({
                        minutes: 60,
                        imgId: imageId,
                        checkcode
                    }, this.startInterval)
                })
            })
        }
    }


    /**
    *  开始计时
    */
    startInterval = () => {
        this.interval = setInterval(() => {

            this.setState({
                minutes: this.state.minutes - 1
            }, () => {
                if (this.state.minutes <= 0) {
                    this.interval && clearInterval(this.interval)
                    this.setState({
                        minutes: 0
                    })
                }
            })

        }, 1000);
    }


    /**
    *  跳转 找回密码
    */
    gotoRetrievePassword = () => {
        this.navigate('RegisterOrFindAccount', { title: '找回密码', type: 'FIND' })
    }

    /**
    *  切换登录状态
    */
    changeLoginType = () => {
        this.setState({ loginType: this.state.loginType == 'passwordLogin' ? 'verCode' : 'passwordLogin' })
    }

    /**
    *  登录
    */
    loginBtnClick = () => {

        let { loginType, phone, password, verCode, minutes, imgId } = this.state;

        if (!isPhoneNum(phone)) {
            return;
        }

        // 验证码登录要检查验证码是否有输入
        if (loginType == 'verCode') {
            if (verCode.length == 0) {
                tips.showTips('请输入验证码')
                return;
            }

            if (imgId.length == 0) {
                tips.showTips('请先获取验证码')
                return;
            }
        } else {
            let passReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;

            if (!passReg.test(password)) {
                tips.showTips('密码格式不正确请重新输入');
                return;
            }
        }

        getTempToken((token, timestamp) => {

            let param = { token, timestamp, mobile: phone, password, from: 1, vcode: verCode, loginType: loginType == 'passwordLogin' ? 0 : 1 }
            request.post('/tcssPlatform/user/loginApp', param, true).then(result => {
                saveLoginInfo(result)
                msg.emit('changeRootRoute', { rootRoute: 'TabNavigator' })
            })
        })

    }

    /**
    *  跳转注册页面
    */
    gotoRegisterPage = () => {
        this.navigate('RegisterOrFindAccount', { title: '快速注册', type: 'REGISTER' })
    }

    /**
    *  QQ登录
    */
    qqLogin = () => {
        RNArenaPay.QQLogin().then((res: any) => {
            console.log(res);
            this.authLogin(configs.QQAppKey, res.accessToken, res.openId)
        }, (error: any) => {
            console.log(JSON.stringify(error));
            tips.showTips('QQ登录失败')
        })

    }

    /**
    *  微信登录
    */
    wexinLogin = () => {

        // 微信登录
        RNArenaPay.wechatLogin().then((data: any) => {
            console.log('微信登录')
            console.log(data.code);
            this.authLogin(configs.wxAppKey, data.code);

        }, (error: any) => {
            console.log(JSON.stringify(error));
            tips.showTips('微信登录失败')
        })
    }

    /**
    *  第三方登录
    */
    authLogin = (appId: string, code: string, openId?: string) => {

        let { phone, password, verCode } = this.state;
        getTempToken((token, timestamp) => {

            let param = { token, timestamp, mobile: phone, password, from: 1, vcode: verCode, loginType: 2, appId, code, openId }
            request.post('/tcssPlatform/user/loginApp', param, true).then(result => {
                saveLoginInfo(result)
                msg.emit('changeRootRoute', { rootRoute: 'TabNavigator' })
            }).catch(err => {
                this.navigate('BindMobile', { title: '绑定手机', appId, code, openId })
                tips.showTips('请绑定账号');
            })
        })
    }

}