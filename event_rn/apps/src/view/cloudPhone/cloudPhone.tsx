
import { BaseNavNavgator, defaultStyle, request } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

interface State {
    showType: 'viewType' | 'listType',
    phoneList: CloudPhoneModal[],
}
export default class CloudPhone extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
        showType: 'viewType',
        phoneList: []
    }

    constructor(props: any) {
        super(props)
        this.loadData()
    }

    /**
    *  获取云手机列表
    */
    loadData = () => {
        let param = { page: 1, pageSize: 1000 }
        request.post('/cloudPhone/phone/list', param, true).then(result => {
            console.log('获取云手机列表', result)
        }).catch(err => {
            console.log('获取云手机列表', err)
        })
    }

    render() {
        let { showType } = this.state
        return (
            <View style={{ flex: 1 }}>
                {/* 导航栏 */}
                <View style={{ marginTop: defaultStyle.safeArea.navMarginTop, backgroundColor: '#fff', height: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 90 }} />

                    {/* 切换的tab */}
                    <ImageBackground style={{ width: 180, height: 35, flexDirection: 'row' }} resizeMode='contain' source={showType == 'viewType' ? require('#/home/viewBGImage.png') : require('#/home/listBgImage.png')} >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showType: showType == 'viewType' ? 'listType' : 'viewType' })} />
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showType: showType == 'viewType' ? 'listType' : 'viewType' })} />
                    </ImageBackground>

                    {/* 右侧俩按钮 */}
                    <View style={{ width: 90, height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.settingBtnClick}>
                            <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('#/home/setting.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.settingBtnClick}>
                            <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('#/home/refresh.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                


            </View>
        );
    }

    settingBtnClick = () => {

    }
}