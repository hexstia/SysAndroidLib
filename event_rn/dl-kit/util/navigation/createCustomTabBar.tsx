

import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import BaseComponent from '../../base/baseComponent';

const WIDTH = Dimensions.get("window").width

interface Props{
    navigation:any,
    jumpTo:any
}
export default class Tab extends BaseComponent<Props> {

    render() {
        const { navigation} = this.props;
        const { routes} = navigation.state;
        return (
            <SafeAreaView style={{
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: '#ddd',
                width: WIDTH,
                height: 49, 
                backgroundColor: '#fff',
            }}>
                <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                    {routes && routes.map((route, index) => this.renderItem(route, index))}
                </View>

            </SafeAreaView>
        );
    }

    renderItem = (route, index) => {
        const {
            navigation,
            jumpTo,
        } = this.props;

        const focused = index === navigation.state.index;
        // const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let item = this.tabDatas[index]
        let imgSource = focused ? item.selectIcon : item.defaultIcon
        return (
            <TouchableOpacity
                key={route.key}
                activeOpacity={1}
                style={{width: 72,height: 60,alignItems: 'center',justifyContent: 'center',}}
                onPress={() => jumpTo(route.key)}
            >
                <Image style={{width: 72, height: 60,}} source={imgSource} resizeMode='contain'/>

            </TouchableOpacity>
        );
    };
    
    tabDatas = [
        {
            title:'首页',
            defaultIcon:require('#/tabItem/homepage_gray.png'),
            selectIcon:require('#/tabItem/homepage_pink.png'),
        },

        {
            title:'极致服务',
            defaultIcon:require('#/tabItem/extreme_service_gray.png'),
            selectIcon:require('#/tabItem/extreme_service_pink.png'),
        },

        {
            title:'极致头条',
            defaultIcon:require('#/tabItem/extreme_headlines_gray.png'),
            selectIcon:require('#/tabItem/extreme_headlines_pink.png'),
        },

        {
            title:'我的',
            defaultIcon:require('#/tabItem/me_gray.png'),
            selectIcon:require('#/tabItem/me_pink.png'),
        },
    ]
}

