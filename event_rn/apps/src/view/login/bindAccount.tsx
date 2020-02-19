import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { View } from 'react-native';

interface State {
}

/**
*  绑定账号
*/
export default class BindAccount extends BaseNavNavgator {
    state: State = {
    }
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
            </View>
        );
    }
}