
import { BaseNavNavgator, request } from 'dl-kit';
import React from 'react';
import { Text, View } from 'react-native';

interface State {
}
export default class CloudPhone extends BaseNavNavgator {
    static navigationOptions = { header: null }

    state: State = {
    }

    constructor(props: any) {
        super(props)
        this.loadData()
    }

    /**
    *  获取云手机列表
    */
    loadData = () => {
        let param = {}
        request.post('/cloudPhone/phone/list', param, true).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
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