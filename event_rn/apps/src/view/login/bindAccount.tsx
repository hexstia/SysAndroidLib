
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
*  绑定已有账号
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
                        maxLength={6}
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

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8, paddingVertical: 2, borderBottomColor: '#6498FF', borderBottomWidth: 1 }}
                    onPress={this.replaceBindMobile}>
                    <Text style={{ color: '#6498FF', fontSize: 15 }}>绑定新账号</Text>
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
            // 如果是验证码登录，要验证一下手机号是否注册过
            getTempToken((token, timestamp) => {
                request.post('/tcssPlatform/user/mobile/check', { token, timestamp, mobile }, false).then(res => {
                    tips.showTips('该账号未注册');
                }).catch(err => {
                    // 验证这个找回是否已经绑定过微信 、 QQ。返回200表示成功可继续绑定，已绑定返回错误信息
                    request.post('/tcssPlatform/user/checkOtherUser', { token, mobile, platform: this.data.openId ? 2 : 1 }, false).then(res => {
                        this.checkImgCode && this.checkImgCode.show()
                    }).catch(err => {
                        let tipText = `此账号已绑定${this.data.openId ? 'QQ' : '微信'}`
                        tips.showTips(tipText);
                    })
                })
            })
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
    *  绑定账号
    */
    bindAccount = () => {
        let { mobile, vcode, imgId, checkcode } = this.state

        if (!isPhoneNum(mobile)) {
            return;
        }

        if (imgId.length == 0) {
            tips.showTips('请先获取验证码')
            return;
        }

        if (vcode.length == 0) {
            tips.showTips('请输入验证码')
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


    /**
      *  切换为绑定已有账号
      */
    replaceBindMobile = () => {
        this.replace('BindMobile', { ...this.data, title: '绑定手机' })
    }


}