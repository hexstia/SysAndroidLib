declare module "*.json"
declare module "*.png"



import router from './apps/src/main/router';

export interface UserModel {
    companyId: number,//36
    companyName: string//"18911755085默认公司"
    contactPhone: string,
    contactUser: string,
    createTime: string,//"2020-02-20 17:50:38"
    createTimeStr: string,//"2020-02-20 17:50:38"
    deleteFlag: number,//0
    deviceSum: number,
    email: string,
    enable: boolean,// true
    enableStr: string,//"启用"
    enableToken: boolean,// true
    hourAd: number,
    id: number,// 37
    lastIp: string,
    lastIpAddr: string,
    loginName: string,//"18911755085"
    loginPlatForm: string,
    loginType: number,
    mobile: string,// "18911755085"
    password: string,//"2cfdbbef4e47899c0eb9a59eb1ad1eb6"
    roleId: number,
    searchValue: number,
    type: string,//"1"
    typeStr: string,//"普通用户"
    updateTime: string,//"2020-02-20 17:50:38"
    userImg: string,//
    userName: string,//"18911755085"
    wxNo: string,

}

/**
*  云手机
*/
export interface CloudPhoneModal {
    /**
    *  开始时间
    */
    beginTime: string,
    /**
    *  企业编号
    */
    companyId: number,
    /**
    *  创建时间
    */
    createTime: string,
    /**
    *  销毁时间
    */
    destructionTtime: string,
    /**
    *  设备编号
    */
    deviceId: number,
    /**
    *  设备编号数组
    */
    deviceIdArr: number[],
    /**
    *  设备ip
    */
    deviceIp: number,
    /**
    *  设备名称
    */
    deviceName: string,
    /**
    *  设备入口
    */
    devicePortal: string,
    /**
    *  手机唯一码
    */
    deviceUdid: string,
    /**
    *  结束时间
    */
    endTime: string,
    fromStatus: string,
    groupId: number,
    groupName: string,
    /**
    *  设备id
    */
    id: number,
    proId: number,
    proName: string,
    proType: string,
    /**
    *  剩余时间
    */
    remainingTime: string,
    searchValue: string,
    /**
    *  状态码 //'使用状态 1 在线 2被控制 5即将过期 10过期  15已销毁  20离线',
    */
    status: number,
    /**
    *  状态
    */
    statusStr: string,
    toStatus: number,
    typeId: number,
    /**
    *  更新时间
    */
    updateTime: string,
    /**
    *  屏幕截图 Base64
    */
    screenShot?: string
}


/**
*  商品
*/
export interface Product {
    childList: any[],
    /**
    *  创建时间
    */
    createTime: string,
    deviceId: number,
    hoursDesc: string,
    hoursType: string,
    /**
    *  id
    */
    id: number,
    orderNum: string,
    parentId: number,
    proCode: number,
    /**
    *  描述
    */
    proDesc: string,
    proHours: number,
    /**
    *  商品图片
    */
    proImg: string,
    /**
    *  商品名字
    */
    proName: string,
    /**
    *  商品价格
    */
    proPrice: number,
    /**
    *  商品状态
    */
    proStatus: number,
    /**
    *  类型id
    */
    typeId: number,
    typeName: string,
    /**
    *  更新时间
    */
    updateTime: string,
}


/**
*  消息
*/
export interface Message {
    appStatus: number,
    appStatusStr: string,
    backId: number,
    /**
    *  内容
    */
    content: string,
    /**
    *  创建时间
    */
    createTime: number,
    endTime: number,
    id: number,
    nextId: number,
    noticeId: number,
    pcStatus: number,
    pcStatusStr: string,
    proType: number,
    proTypeStr: string,
    /**
    *  阅读情况 1:已读  2:未读
    */
    readStatus: number,
    searchValue: string,
    startTime: number,
    /**
    *  标题
    */
    title: string,
    userId: number,
}

/**
*  
*/
export interface OrderDetailItem {
    createTime: string
    deviceId: number
    endTime: string
    id: number
    num: number
    orderId: number
    proId: number
    proImg: string
    proName: string
    proPrice: number
    relationId: number
    renewParameter: null
    updateTime: string
}


/**
*  订单
*/
export interface OrderInfo {
    /**
    *  创建时间
    */
    createTime: string
    /**
    *  详情列表
    */
    detailList: OrderDetailItem[]
    id: number
    mobile: string
    /**
    *  支付金额
    */
    orderAmount: number
    orderIds: string
    /**
    *  订单编号
    */
    orderNumber: string
    /**
    *  订单状态    '10 下单 15支付中 20 支付完成 30 订单完成',
    */
    orderStatus: number
    /**
    *  订单时间
    */
    orderTime: string
    /**
    *  订单状态
    */
    orderType: number
    ordreInvoice: number
    paramProName: string
    paramProType: string
    /**
    *  订单金额
    */
    payAmount: string
    payEndTime: string
    payStartTime: string
    payStatus: string
    payTime: string
    payType: string
    proHours: string
    proPrice: string
    proTypeId: string
    renewParameter: string
    /**
    *  更新时间
    */
    updateTime: string
    /**
    *  用户id
    */
    userId: number
    userName: string

}


/**
*  问题对象
*/
interface Question {
    /**
    *  内容
    */
    content: string
    /**
    *  创建时间
    */
    createTime: number
    /**
    *  结束时间
    */
    endTime: number
    id: number
    /**
    *  回答内容
    */
    replyContent: string
    searchValue: string
    startTime: number
    /**
    *  状态
    */
    status: number
    /**
    *  状态文案
    */
    statusStr: string
    /**
    *  标题
    */
    title: string
    /**
    *  用户id
    */
    userId: number
    userImg: string
    /**
    *  用户名字
    */
    userName: string
}


/**
*  广告数据
*/
export interface Banner {
    bannerType: number
    bannerTypeStr: string
    createTime: number
    endTime: number
    id: number
    imagePath: string
    proType: number
    proTypeStr: string
    searchValue: string
    skipUrl: string
    sort: number
    startTime: number
    status: number
    statusStr: string
    title: string
    type: number
    typeStr: string
}

/**
*  socket消息
*/
export interface SocketMessage {
    code: string
    eventName: 'webSocketOnOpen' | 'webSocektOnClose' | 'webSocektOnError' | 'webSocektMessage'
    message: string
    params: string
}


/**
*  支付信息
*/
export interface OrderPay {
    /**
    *  金额
    */
    amount: number
    countDevice: null
    createTime: string
    id: number
    mobile: null
    orderId: number
    orderType: null
    /**
    *  微信支付信息
    */
    outCodeUrl: string
    outNotifyData: null
    outPayData: string
    outSn: string
    overTime: null
    paramProName: null
    payEndTime: null
    payNumber: string
    payStartTime: null
    payStatus: number
    payTime: string
    payType: number
    proTypeId: null
    updateTime: string
}


/**
 * 云手机事件名称
 * cloudPhoneRestart：重启
 * cloudUploadFile：上传文件
 * cloudUploadApk：上传应用
 * cloudPhoneRenew：一键新机
 * cloudPhoneBack：回退
 * cloudPhoneHome ：home键点击
 */
export type CloudPhoneEventName = 'cloudPhoneRestart' | 'cloudUploadFile' | 'cloudUploadApk' | 'cloudPhoneRenew' | 'cloudPhoneBack' | 'cloudPhoneHome'



// 导出模型
export type TRouterName = keyof typeof router;
