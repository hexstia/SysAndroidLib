

import { createNavNavigator } from 'dl-kit';
import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { NavigationRouteConfigMap } from 'react-navigation';

interface TabRouteData {
    /**
    *  路由名称
    */
    routeName: string,
    /**
    *  页面
    */
    tabComponent: object,
    /**
    *  tabbar 文字
    */
    tabBarLabel: string,
    /**
    *  tabbar 默认图片
    */
    tabBarIcon_default: ImageSourcePropType,
    /**
    *  tabbar 选中图片
    */
    tabBarIcon_select: ImageSourcePropType,
}

/**
*  创建tabbar 的路由
*/
function createTabRoute(routeDatas: TabRouteData[]): NavigationRouteConfigMap {
    let tabRoute: any = {};
    for (const tabRouteData of routeDatas) {
        tabRoute[`${tabRouteData.routeName}`] = {
            screen: createNavNavigator({ Base: tabRouteData.tabComponent }), navigationOptions: {
                tabBarLabel: tabRouteData.tabBarLabel,
                tabBarIcon: ({ focused }: { focused: boolean }) => {
                    return focused ? <Image style={{ width: 25, height: 25 }} source={tabRouteData.tabBarIcon_select} /> : <Image style={{ width: 20, height: 20 }} source={tabRouteData.tabBarIcon_default} />
                }
            }
        }
    }

    return tabRoute;
}

export default createTabRoute