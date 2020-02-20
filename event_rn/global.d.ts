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

// 导出模型
export type TRouterName = keyof typeof router;
