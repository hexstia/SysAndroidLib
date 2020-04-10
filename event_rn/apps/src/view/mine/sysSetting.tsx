
import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

interface State {
    openPush: boolean
}

/**
*  系统设置
*/
export default class SysSetting extends BaseNavNavgator {
    state: State = {
        openPush: true
    }
    constructor(props: any) {
        super(props)
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
                    <View style={{ height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#333', fontSize: 15, marginLeft: 18 }}>消息推送</Text>
                        <Switch style={{ marginRight: 18 }} tintColor='#6498FF' value={this.state.openPush} onValueChange={v => this.setState({ openPush: v })} />
                    </View>

                    <View style={{ height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <Text style={{ color: '#333', fontSize: 15, marginLeft: 18 }}>检查更新</Text>
                        <Text style={{ color: '#999', fontSize: 15, marginRight: 18 }}>当前版本V1.0</Text>
                    </View>

                    <TouchableOpacity style={{ height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopColor: '#eee', borderTopWidth: 1 }}
                        onPress={this.aboutLanjiang}>
                        <Text style={{ color: '#333', fontSize: 15, marginLeft: 18 }}>关于蓝将</Text>
                        <Text style={{ color: '#999', fontSize: 15, marginRight: 18 }}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    aboutLanjiang = () => {
        this.navigate('BaseWebView', { title: '关于蓝将', uri: 'http://91lanjiang.com/cloud/cloudPhone/book?type=aboutApp' })
    }
}