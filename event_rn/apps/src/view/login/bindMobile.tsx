
import { BaseNavNavgator, msg, request, tips } from 'dl-kit';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckImgCode from '../../module/checkImgCode';
import { getTempToken, isPhoneNum, saveLoginInfo } from '../../module/publicFunc';

interface State {
  mobile: string,
  vcode: string,
  password: string,
  passwordAgain: string,
  minutes: number,
  imgId: string,
  checkcode: string
}

/**
*  第三方登录 - 绑定手机号
*/
export default class BindMobile extends BaseNavNavgator {

  state: State = {
    mobile: '',
    vcode: '',
    password: '',
    passwordAgain: '',
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
    let { mobile, vcode, password, passwordAgain, minutes } = this.state
    return (
      <ScrollView style={{ flex: 1 }} keyboardDismissMode='on-drag'>
        {/* 手机号 */}
        <View style={{ marginTop: 15, marginHorizontal: 15, height: 45, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 }}>
          <TextInput
            style={{ padding: 0, flex: 1, fontSize: 16 }}
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholder='请输入手机号'
            placeholderTextColor='#aaa'
            keyboardType='phone-pad'
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

        {/* 输入密码 */}
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
            onChangeText={text => this.setState({ password: text.trim() })}
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
            placeholder='请再输入密码'
            placeholderTextColor='#aaa'
            value={passwordAgain}
            onChangeText={text => this.setState({ passwordAgain: text.trim() })}
          />
        </View>

        {/* 绑定手机按钮 */}
        <TouchableOpacity style={{ marginTop: 20, marginHorizontal: 10, height: 58, flexDirection: 'row' }}
          onPress={this.registerNow}>
          <Image style={{ flex: 1, height: 58 }} resizeMode='contain' source={require('#/login/bindMobileBtn.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8, paddingVertical: 2, borderBottomColor: '#6498FF', borderBottomWidth: 1 }}
          onPress={this.replaceBindAccount}>
          <Text style={{ color: '#6498FF', fontSize: 15 }}>绑定已有账号</Text>
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

      // 如果是绑定手机号，要验证一下手机号是否注册过
      getTempToken((token, timestamp) => {
        request.post('/tcssPlatform/user/mobile/check', { token, timestamp, mobile }, true).then(res => {
          this.checkImgCode && this.checkImgCode.show()
        }).catch(err => {
          tips.showTips('该账号已注册，请选择绑定已有账号')
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
  *  立即注册
  */
  registerNow = () => {
    let { mobile, vcode, password, passwordAgain, imgId, checkcode } = this.state

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



    let passReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;

    if (!passReg.test(password)) {
      tips.showTips('密码格式不正确请重新输入');
      return;
    }

    if (password != passwordAgain) {
      tips.showTips('两次输入密码不一致! ')
      return;
    }


    getTempToken((token, timestamp) => {

      let param = { token, loginName: mobile, imgId, checkcode, timestamp, vcode, mobile, password, type: 1, openId: this.data.openId, code: this.data.code, appId: this.data.appId }

      request.post('/tcssPlatform/user/register', param, true).then(result => {
        tips.showTips('注册成功', 2000, () => {
          saveLoginInfo(result)
          msg.emit('changeRootRoute', { rootRoute: 'TabNavigator' })
        })
      })
    })
  }

  /**
  *  切换为绑定已有账号
  */
  replaceBindAccount = () => {
    this.replace('BindAccount', { ...this.data, title: '绑定账号' })
  }


}