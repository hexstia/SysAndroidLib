
import { BaseNavNavgator, configs, defaultStyle, msg, request, tips } from 'dl-kit';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
                <View style={{ ...defaultStyle.device }}>
                    {/* 顶部背景图 */}
                    <ImageBackground style={{ marginTop: 0, width: defaultStyle.device.width, height: 184 }}
                        source={require('#/login/topBG.png')} >
                        <Text style={{ marginTop: 60, marginLeft: 30, fontSize: 22, color: '#fff' }}>嗨，欢迎登录云手机！</Text>
                    </ImageBackground>

                    {/* 输入部分 */}
                    <View style={{ marginTop: -72, marginHorizontal: 30, paddingHorizontal: 15, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden' }}>
                        {/* 手机号 */}
                        <View style={{ marginTop: 10, height: 45, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
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
                                <View style={{ height: 45, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
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
                                    <View style={{ height: 45, borderBottomColor: '#ccc', borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={{ padding: 0, flex: 1, fontSize: 16 }}
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
                                        <TouchableOpacity style={{ width: 75, height: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#497EFF' }}
                                            onPress={this.sendVcode}>
                                            <Text style={{ color: '#fff', fontSize: 12 }}>{minutes == 0 ? '获取验证码' : `重新获取${minutes}s`}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                        }

                        {/* 忘记密码  切换登录方式  按钮*/}
                        <View style={{ marginTop: 10, marginBottom: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#6498FF', fontSize: 14 }} onPress={this.gotoRetrievePassword}>忘记密码</Text>
                            <Text style={{ color: '#6498FF', fontSize: 14 }} onPress={this.changeLoginType} >{loginType == 'passwordLogin' ? '验证码登录' : '密码登录'}</Text>
                        </View>
                    </View>


                    {/* 登录按钮 */}
                    <TouchableOpacity style={{ marginTop: -30, width: 282, height: 58, alignSelf: 'center' }}
                        onPress={this.loginBtnClick}>
                        <Image style={{ width: 282, height: 58 }} resizeMode='contain' source={require('#/login/loginBtn.png')} />
                    </TouchableOpacity>


                    {/* 注册按钮 */}
                    <TouchableOpacity style={{ marginTop: 8, paddingVertical: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#6498FF' }}
                        onPress={this.gotoRegisterPage}>
                        <Text style={{ color: '#6498FF', fontSize: 16 }}>注册账号</Text>
                    </TouchableOpacity>

                    {/* 微信和QQ的图标 */}
                    <View style={{ marginTop: 60, flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 90 }}>
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

                    {/* 底部图片 */}
                    <Image style={{ width: defaultStyle.device.width, height: 44 }} source={require('#/login/bottomImg.png')} />

                    {/* 图形验证码 */}
                    <CheckImgCode
                        ref={modal => this.checkImgCode = modal}
                        passCallback={this.imgCodePass}
                    />
                </View>

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
                request.post('/tcssPlatform/vcode/send', param, false).then(result => {
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

            if (imgId.length == 0) {
                tips.showTips('请先获取验证码')
                return;
            }

            if (verCode.length == 0) {
                tips.showTips('请输入验证码')
                return;
            }


        } else {

            if (password.length == 0) {
                tips.showTips('请输入密码')
                return;
            }

            // let passReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;

            // if (!passReg.test(password)) {
            //     tips.showTips('密码格式不正确请重新输入');
            //     return;
            // }
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

        // 如果是验证码登录，要验证一下手机号是否注册过
        // getTempToken((token, timestamp) => {

        //     // 验证这个找回是否已经绑定过微信 、 QQ。返回200表示成功可继续绑定，已绑定返回错误信息
        //     request.post('/tcssPlatform/user/checkOtherUser', { token, timestamp, mobile: 18911755005, platform: openId ? 2 : 1 }).then(res => {
        //         this.checkImgCode && this.checkImgCode.show()
        //         console.log('未绑定，可以绑定 哈哈')
        //     }).catch(err => {
        //         // let tipText = `此账号已绑定${openId ? 'QQ' : '微信'}`
        //         // tips.showTips(tipText);
        //     })

        // })

        // return;


        let { phone, password, verCode } = this.state;
        getTempToken((token, timestamp) => {

            let param = { token, timestamp, mobile: phone, password, from: 1, vcode: verCode, loginType: 2, appId, code, openId }
            tips.showLoading()
            request.post('/tcssPlatform/user/loginApp', param, false).then(result => {
                tips.hideLoading()
                saveLoginInfo(result)
                msg.emit('changeRootRoute', { rootRoute: 'TabNavigator' })
            }).catch(err => {
                tips.hideLoading()
                this.navigate('BindMobile', { title: '绑定手机', appId, code, openId })
                tips.showTips('请绑定账号');
            })
        })
    }

}