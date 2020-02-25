
import { BaseNavNavgator, request, tips } from 'dl-kit';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckImgCode from '../../module/checkImgCode';
import { getTempToken, isPhoneNum } from '../../module/publicFunc';

interface State {
    mobile: string,
    vcode: string,
    password: string,
    passwordAgain: string,
    minutes: number,
    imgId: string,
    checkcode: string,
    type: 'REGISTER' | 'FIND'
}

/**
*  快速注册
    type  REGISTER:注册  FIND：找回密码
*/
export default class RegisterOrFindAccount extends BaseNavNavgator {

    state: State = {
        mobile: '',
        vcode: '',
        password: '',
        passwordAgain: '',
        minutes: 0,
        imgId: '',
        checkcode: '',
        type: this.data.type
    }

    interval: NodeJS.Timeout | undefined = undefined;
    checkImgCode: CheckImgCode | null = null;

    constructor(props: any) {
        super(props)
    }
    render() {
        let { mobile, vcode, password, passwordAgain, minutes, type } = this.state
        return (
            <View style={{ flex: 1 }}>
                {/* 手机号 */}
                <View style={{ marginTop: 15, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16 }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        placeholder='请输入手机号'
                        value={mobile}
                        onChangeText={text => this.setState({ mobile: text })}
                    />
                </View>

                {/* 验证码 */}
                <View style={{ marginTop: 10, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16, marginLeft: 10 }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        placeholder='请输入验证码'
                        value={vcode}
                        onChangeText={text => this.setState({ vcode: text })}
                    />
                    <TouchableOpacity style={{ width: 100, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.sendVcode}>
                        <Text style={{ color: '#FF6A41', fontSize: 14 }}>{minutes == 0 ? '获取验证码' : `重新获取 ${minutes}s`}</Text>
                    </TouchableOpacity>
                </View>

                {/* 输入密码 */}
                <View style={{ marginTop: 10, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16 }}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        placeholder='输入密码（6-20位）'
                        value={password}
                        onChangeText={text => this.setState({ password: text })}
                    />
                </View>
                {/* 再次输入密码 */}
                <View style={{ marginTop: 10, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16 }}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        placeholder='请再次输入密码'
                        value={passwordAgain}
                        onChangeText={text => this.setState({ passwordAgain: text })}
                    />
                </View>

                {/* 立即注册按钮 */}
                <TouchableOpacity style={{ marginTop: 20, marginHorizontal: 10, height: 58, flexDirection: 'row' }}
                    onPress={this.registerNow}>
                    <Image style={{ flex: 1, height: 58 }} resizeMode='contain' source={type == 'REGISTER' ? require('#/login/registerNoewBtn.png') : require('#/login/findPasswordBtn.png')} />
                </TouchableOpacity>

                {/* 图形验证码 */}
                <CheckImgCode
                    ref={modal => this.checkImgCode = modal}
                    passCallback={this.imgCodePass}
                />
            </View>
        );
    }



    /**
   *  发送验证码
   */
    sendVcode = () => {
        if (this.state.minutes > 0) { return }
        let mobile = this.state.mobile

        if (isPhoneNum(mobile)) {
            this.checkImgCode && this.checkImgCode.show()
        }
    }

    /**
    *  图形验证码通过
    */
    imgCodePass = (imageId: string,checkcode:string) => {
        if (this.state.minutes > 0) { return }

        let mobile = this.state.mobile
        let type = this.state.type;

        if (isPhoneNum(mobile)) {
            getTempToken((token, timestamp) => {
                let param = { token, timestamp, mobile, type: 1, sendType: type == 'REGISTER' ? 1 : 2, from: 1 }
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
    *  立即注册
    */
    registerNow = () => {
        let { mobile, vcode, password, passwordAgain, imgId, checkcode, type } = this.state
        if (!isPhoneNum(mobile)) {
            return;
        }

        if (vcode.length == 0) {
            tips.showTips('请输入验证码')
            return;
        }

        if (imgId.length == 0) {
            tips.showTips('请输入图形验证码')
            return;
        }

        if (password.length == 0) {
            tips.showTips('请输密码')
            return;
        }

        if (password.length < 6 || password.length > 20) {
            tips.showTips('密码必须在6~20位之间')
            return;
        }

        if (password != passwordAgain) {
            tips.showTips('两次密码输入不一致')
            return;
        }


        getTempToken((token, timestamp) => {

            if (type == 'REGISTER') {
                let param = { token, loginName: mobile, imgId, checkcode, timestamp, vcode, mobile, password, type: 1 }
                request.post('/tcssPlatform/user/register', param, true).then(result => {
                    tips.showTips('账号注册成功！', 2000, () => {
                        this.goBack()
                    })
                })
            } else {
                let param = { token, newPassword: password, imgId, checkcode, vcode, mobile, timestamp }
                request.post('/tcssPlatform/user/register', param, true).then(result => {
                    tips.showTips('密码重置成功！', 2000, () => {
                        this.goBack()
                    })
                })
            }

        })
    }




}