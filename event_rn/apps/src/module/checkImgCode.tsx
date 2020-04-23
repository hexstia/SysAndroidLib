
import { BaseComponent, request } from 'dl-kit';
import React from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface State {
    /**
    *  是否显示
    */
    visible: boolean,
    /**
    *  手输验证码
    */
    vcode: string,
    /**
    *  图片id
    */
    imgId: string,
    /**
    *  验证码
    */
    checkcode: string,
    /**
    *  图片base64 码
    */
    imgData: string,
    /**
    *  提示文字
    */
    tipText: string,
}

interface Props {
    passCallback: (imageId: string, checkcode: string) => void
}

/**
*  图形验证码
*/
export default class CheckImgCode extends BaseComponent<Props> {
    state: State = {
        visible: false,
        vcode: '',
        imgId: '',
        imgData: '',
        checkcode: '',
        tipText: '',
    }
    constructor(props: Props) {
        super(props)
    }

    getImgCode = () => {
        request.post('/tcssPlatform/user/checkcode', {}, false).then(result => {

            this.setState({ imgId: result.imgId, checkcode: result.checkcode, imgData: result.imgData })
        })
    }

    render() {
        let { visible, checkcode, vcode, tipText, imgData } = this.state
        return (
            <Modal visible={visible}
                transparent={true}
                animationType='none'>

                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center' }}>

                    {/* 卡片 */}
                    <View style={{ marginTop: 200, width: 300, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden' }}>
                        <View style={{ height: 35, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#333', fontSize: 15 }}>输入图形验证码</Text>
                        </View>

                        {/* 输入部分 */}
                        <View style={{ marginTop: 10, height: 90, flexDirection: 'row' }}>
                            <View style={{ height: 50, flex: 1, marginLeft: 15, backgroundColor: '#F5F5F5', paddingHorizontal: 10 }}>
                                <TextInput
                                    style={{ padding: 0, flex: 1, fontSize: 14 }}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                    placeholder='输入图片中的字符'
                                    placeholderTextColor='#aaa'
                                    value={vcode}
                                    onChangeText={text => this.setState({ vcode: text })}
                                />
                            </View>

                            <View style={{ marginLeft: 10, marginRight: 15, width: 100, alignItems: 'center' }}>
                                {/* <Text style={{ width: 100, height: 50, backgroundColor: '#f5f5f5' }}>{checkcode}</Text> */}
                                <Image style={{ width: 100, height: 50, backgroundColor: '#f5f5f5' }} source={{ uri: 'data:image/png;base64,' + imgData }} />
                                <Text style={{ color: '#999', fontSize: 12, marginTop: 6 }} onPress={this.changeImg}>看不清？换一张</Text>
                            </View>
                        </View>

                        {/* 取消确定按钮 */}
                        <View style={{ height: 45, borderTopColor: '#ccc', borderTopWidth: 0.5, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightColor: '#ccc', borderRightWidth: 0.5 }}
                                onPress={this.hidden}>
                                <Text style={{ color: '#999', fontSize: 15 }}>取消</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                                onPress={this.determineBtnClick}>
                                <Text style={{ color: '#6498FF', fontSize: 15 }}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 文字提示 */}
                    <Text style={{ color: '#f00', fontSize: 14, marginTop: 20 }}>{tipText}</Text>
                </View>
            </Modal>
        );
    }


    /**
 *  隐藏
 */
    hidden = () => {
        this.setState({
            visible: false
        })
    }

    /**
    *  显示
    */
    show = () => {
        this.setState({
            visible: true
        }, () => {
            this.getImgCode()
        })
    }

    /**
    *  看不清，换一张图片
    */
    changeImg = () => {
        this.setState({ vcode: '' }, () => {
            this.getImgCode();
        })
    }

    /**
    *  确定按钮点击事件
    */
    determineBtnClick = () => {
        let { checkcode, vcode, imgId } = this.state

        if (checkcode.toUpperCase() == vcode.toUpperCase()) {
            // 填写正确，立即回调
            this.setState({ visible: false, vcode: '' }, () => {
                this.props.passCallback(imgId, checkcode);
            })
        } else {
            this.setState({ tipText: '验证码不正确' })
            setTimeout(() => {
                this.setState({ tipText: '' })
            }, 2000);
        }
    }

}