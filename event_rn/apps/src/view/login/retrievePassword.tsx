
import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { View } from 'react-native';

interface State {
    
}

/**
*  找回密码
*/
export default class RetrievePassword extends BaseNavNavgator {
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