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


export interface CloudPhoneModal {
    /**
    *  开始时间
    */
    beginTime:string,
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

// 导出模型
export type TRouterName = keyof typeof router;
