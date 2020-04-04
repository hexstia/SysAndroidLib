
import { BaseNavNavgator, request, tips } from 'dl-kit';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckImgCode from '../../module/checkImgCode';
import { getTempToken, isPhoneNum } from '../../module/publicFunc';

interface State {
    mobile: string,
    vcode: string,
    minutes: number,
    imgId: string,
    checkcode: string
}

/**
*  快速注册
    type  REGISTER:注册  FIND：找回密码
*/
export default class BindAccount extends BaseNavNavgator {

    state: State = {
        mobile: '',
        vcode: '',
        minutes: 0,
        imgId: '',
        checkcode: ''
    }

    interval: NodeJS.Timeout | undefined = undefined;
    checkImgCode: CheckImgCode | null = null;

    constructor(props: any) {
        super(props)
    }
    render() {
        let { mobile, vcode, minutes } = this.state
        return (
            <ScrollView style={{ flex: 1 }} keyboardDismissMode='on-drag'>
                {/* 手机号 */}
                <View style={{ marginTop: 15, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16 }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        keyboardType='phone-pad'
                        placeholder='请输入手机号'
                        placeholderTextColor='#aaa'
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
                        placeholderTextColor='#aaa'
                        keyboardType='number-pad'
                        value={vcode}
                        onChangeText={text => this.setState({ vcode: text })}
                    />
                    <TouchableOpacity style={{ width: 100, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.sendVcode}>
                        <Text style={{ color: '#FF6A41', fontSize: 14 }}>{minutes == 0 ? '获取验证码' : `重新获取 ${minutes}s`}</Text>
                    </TouchableOpacity>
                </View>

                {/* 绑定手机按钮 */}
                <TouchableOpacity style={{ marginTop: 20, marginHorizontal: 10, height: 58, flexDirection: 'row' }}
                    onPress={this.bindAccount}>
                    <Image style={{ flex: 1, height: 58 }} resizeMode='contain' source={require('#/login/finishBtn.png')} />
                </TouchableOpacity>

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
        let mobile = this.state.mobile

        if (isPhoneNum(mobile)) {
            this.checkImgCode && this.checkImgCode.show()
        }
    }

    /**
    *  图形验证码通过
    */
    imgCodePass = (imageId: string, checkcode: string) => {
        if (this.state.minutes > 0) { return }

        let mobile = this.state.mobile

        if (isPhoneNum(mobile)) {
            getTempToken((token, timestamp) => {
                let param = { token, timestamp, mobile, type: 1, sendType: 1, from: 1, imgId: imageId }
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
    *  绑定账号
    */
    bindAccount = () => {
        let { mobile, vcode, imgId, checkcode } = this.state

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

        getTempToken((token, timestamp) => {

            let param = { token, imgId, checkcode, vcode, mobile, timestamp, openId: this.data.openId, code: this.data.code, appId: this.data.appId }

            request.post('/tcssPlatform/user/otherBindUser', param, true).then(result => {
                tips.showTips('绑定成功', 2000, () => {
                    this.goBack();
                })
            })
        })
    }




}