

import { BaseNavNavgator } from 'dl-kit';
import React from 'react';
import { Text, View } from 'react-native';

interface State {
}
export default class CustomerService extends BaseNavNavgator {
    state: State = {
    }
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>CustomerService</Text>
            </View>
        );
    }
}