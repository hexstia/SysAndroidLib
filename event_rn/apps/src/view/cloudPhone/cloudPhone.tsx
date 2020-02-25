
import { BaseNavNavgator, request } from 'dl-kit';
import { CloudPhoneModal } from 'global';
import React from 'react';
import { Text, View } from 'react-native';

interface State {
    showType:'viewType' | 'listType',
    phoneList:CloudPhoneModal[],
}
export default class CloudPhone extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
        showType:'viewType',
        phoneList:[]
    }

    constructor(props: any) {
        super(props)
        this.loadData()
    }

    /**
    *  获取云手机列表
    */
    loadData = () => {
        let param = {page:1,pageSize:1000}
        request.post('/cloudPhone/phone/list', param, true).then(result => {
            console.log('获取云手机列表',result)
        }).catch(err => {
            console.log('获取云手机列表',err)
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text >CloudPhone</Text>
            </View>
        );
    }
}