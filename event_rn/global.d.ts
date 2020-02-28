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
    *  状态码
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

export interface OrderDetailItem {
    /**
    *  创建时间
    */
    createTime: string,
    id: number,
    /**
    *  数量
    */
    num: number,
    orderId: number,
    proHours: number,
    /**
    *  商品id
    */
    proId: number,
    /**
    *  商品图片
    */
    proImg: string,
    /**
    *  商品名称
    */
    proName: string,
    /**
    *  商品金额
    */
    proPrice: number,
    renewParameter: string,
    updateTime: string,
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


// 导出模型
export type TRouterName = keyof typeof router;
