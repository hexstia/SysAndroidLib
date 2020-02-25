import { Dimensions, PixelRatio, Platform } from 'react-native';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let isHaveCatHeader = Platform.OS === 'ios' && (Math.floor(screenHeight / screenWidth * 100) === 216)

let navMarginTopFunc = () => {
    if (Platform.OS == 'android') {
        return 0;
    } else {
        return isHaveCatHeader ? 44 : 20
    }
}

export default {

    /**
    *  默认企业头像
    */
    defaultCompanyAvatar : 'https://ddzb-app.oss-cn-beijing.aliyuncs.com/item/image/company-img.png',
    /**
    *  默认人员头像
    */
    defaultPersonAvatar : 'https://ddzb-app.oss-cn-beijing.aliyuncs.com/item/image/my-headImg.png',
    
    color: {
        mainColor: '#23B36E',
        lightGreen:'#09c69E'
    },

    // 像素转点
    px2dp: (px: number) => {
        return px / PixelRatio.get()
    },

    device: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    
    
    safeArea:{
        navMarginTop:navMarginTopFunc(),
        navMarginBottom: isHaveCatHeader ? 34 : 0,
    },

    isIphoneX: () => {

        return (
            Platform.OS === 'ios' && (Math.floor(screenHeight / screenWidth * 100000) === 216533)
        )
    },

    isIphoneXrOrMax: () => {

        return (
            Platform.OS === 'ios' && (Math.floor(screenHeight / screenWidth * 100000) === 216425)
        )
    },
    isHaveCatHeader: isHaveCatHeader
}