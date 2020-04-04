
import { BaseNavNavgator, request, tips } from 'dl-kit';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckImgCode from '../../module/checkImgCode';
import { getTempToken, isPhoneNum } from '../../module/publicFunc';

interface State {
    mobile: string,
    vcode: string,
    minutes: number,
    imgId: string,
    checkcode: string,
}

/**
*  修改手机号
*/
export default class ChangePhoneNum extends BaseNavNavgator {

    state: State = {
        mobile: '',
        vcode: '',
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
        let { mobile, vcode, minutes } = this.state
        return (
            <ScrollView style={{ flex: 1 }} keyboardDismissMode='on-drag'>
                {/* 手机号 */}
                <View style={{ marginTop: 15, marginHorizontal: 22, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
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
                <View style={{ marginTop: 10, marginHorizontal: 22, height: 45, backgroundColor: '#fff', borderRadius: 5, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <TextInput
                        style={{ padding: 0, flex: 1, fontSize: 16, marginLeft: 10 }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        keyboardType='number-pad'
                        placeholder='请输入验证码'
                        placeholderTextColor='#aaa'
                        value={vcode}
                        onChangeText={text => this.setState({ vcode: text })}
                    />
                    <TouchableOpacity style={{ width: 100, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.sendVcode}>
                        <Text style={{ color: '#FF6A41', fontSize: 14 }}>{minutes == 0 ? '获取验证码' : `重新获取 ${minutes}s`}</Text>
                    </TouchableOpacity>
                </View>

                {/* 立即注册按钮 */}
                <TouchableOpacity style={{ marginTop: 20, marginHorizontal: 22, height: 45, backgroundColor: '#258BEC', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                    onPress={this.changeMobileNow}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '800' }}>确认修改</Text>
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
            // 验证一下新手机号是否被注册过
            getTempToken((token, timestamp) => {
                request.post('/tcssPlatform/user/mobile/check', { token, timestamp, mobile }, true).then(res => {
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

        let mobile = this.state.mobile

        if (isPhoneNum(mobile)) {
            getTempToken((token, timestamp) => {
                let param = { token, timestamp, mobile, type: 1, sendType: 4, from: 1 }
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
    changeMobileNow = () => {
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


        // getTempToken((token, timestamp) => {

        let param = { mobile }
        request.post('/tcssPlatform/user/info/updateMobile', param, true).then(result => {
            tips.showTips('', 2000, () => {

            })
        })

        // })
    }




}