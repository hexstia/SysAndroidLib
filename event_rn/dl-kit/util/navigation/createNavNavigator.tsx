import { TRouterName } from 'global';
import { createAppContainer, createStackNavigator, NavigationRouteConfigMap } from 'react-navigation';

/**
*  创建nav导航
*/
export default function createNavNavigator(routes: NavigationRouteConfigMap, initialRoute?: TRouterName) {

  const stackNavigator = createStackNavigator(routes, {
    initialRouteName: initialRoute || 'Base',
    cardStyle: { flex: 1, backgroundColor: '#f3f4f5' },

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: '#000',
      headerBackTitle: '返回',
      headerTitleAllowFontScaling: false
    }
  })

  const AppStackNavigator = createAppContainer(stackNavigator)

  return AppStackNavigator

}