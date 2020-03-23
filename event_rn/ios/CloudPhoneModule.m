//
//  CloudPhoneModule.m
//  event_rn
//
//  Created by 何文文 on 2020/3/23.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "CloudPhoneModule.h"
#import "MainViewController.h"
#import <LJCloudPhone/LJCloudPhone.h>


@interface CloudPhoneModule ()<LJSDKUtilDelegate>

@property (nonatomic,strong) LJSDKUtil *ljSDKUtil;

// 链接socket 回调
@property(nonatomic,copy)RCTPromiseResolveBlock startWebsocketSuccess;
@property(nonatomic,copy)RCTPromiseRejectBlock startWebsocketFaild;

// 关闭socket 回调
@property(nonatomic,copy)RCTPromiseResolveBlock closeWebsocketSuccess;


@property(nonatomic,strong)NSDictionary * phoneModal;

@property(nonatomic,assign)BOOL socketConnect;

@end

@implementation CloudPhoneModule

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

-(NSArray<NSString *> *)supportedEvents{
  return @[@"cloudPhoneEvent",@"webSocketEvent"];
}
/**
启动websocket线程

 @param NSDictionary 支付数据, token:秘钥数据
 @success 成功的回调
 @faild 失败的回调
 */
RCT_EXPORT_METHOD(startWebsocketConnection:(NSDictionary *)data success:(RCTPromiseResolveBlock)success faild:(RCTPromiseRejectBlock)faild)
{
  NSString *token = data[@"token"];
  
  if (token == nil) {
    faild(@"缺少token参数",@"缺少token参数",nil);
    return;
  }
  
  self.startWebsocketSuccess = success;
  self.startWebsocketFaild = faild;
  
    [self.ljSDKUtil connectoWebSocketWithToken:token];
}


/**
发送一个websocket请求

 @param NSString socket数据
 @success 成功的回调
 @faild 失败的回调
 */
RCT_EXPORT_METHOD(sendWebsocketData:(NSString *)deviceId success:(RCTPromiseResolveBlock)success faild:(RCTPromiseRejectBlock)faild)
{
   if (deviceId == nil) {
     faild(@"缺少参数",@"缺少参数",nil);
     return;
   }
  
  if (self.socketConnect == NO) {
    faild(@"未启动websocket线程",@"未启动websocket线程",nil);
    return;
  }
  NSInteger i_deviceId = [deviceId integerValue];
  
  [self.ljSDKUtil sendOneWebSocketRequestWithDeviceId:i_deviceId];
  success(@"发送消息成功");
}

/**
 关闭websocket通信

 @success 成功的回调
 @faild 失败的回调
 */
RCT_EXPORT_METHOD(shutdownWebsocketConnect:(RCTPromiseResolveBlock)success faild:(RCTPromiseRejectBlock)faild)
{
   if (self.socketConnect == NO) {
     success(@"socket 处于关闭中");
     return;
   }
  
  self.closeWebsocketSuccess = success;
  [self.ljSDKUtil disConnectoWebSocket];
}


/**
  打开视频流

 @param NSString  设备id
 @success 成功的回调
 @faild 失败的回调
 */
RCT_EXPORT_METHOD(getDevicePermise:(NSString *)deviceId success:(RCTPromiseResolveBlock)success faild:(RCTPromiseRejectBlock)faild)
{
   if (deviceId == nil) {
      faild(@"缺少参数",@"缺少参数",nil);
      return;
    }
   
   if (self.socketConnect == NO) {
     faild(@"未启动websocket线程",@"未启动websocket线程",nil);
     return;
   }
   NSInteger i_deviceId = [deviceId integerValue];
   
   [self.ljSDKUtil openVideoStreamWithDeviceId:i_deviceId];
   success(@"打开成功");
}


/**
 跳转与启动视频流页面

 @param NSDictionary 云手机数据
 @success 成功的回调
 @faild 失败的回调
 */
RCT_EXPORT_METHOD(startDumpScreen:(NSDictionary *)data success:(RCTPromiseResolveBlock)success faild:(RCTPromiseRejectBlock)faild)
{
  if (data == nil) {
     faild(@"缺少参数",@"缺少参数",nil);
     return;
   }
  
  if (self.socketConnect == NO) {
    faild(@"未启动websocket线程",@"未启动websocket线程",nil);
    return;
  }
  
  self.phoneModal = data;

   BOOL isSuc =  [self.ljSDKUtil openMobileViewWithCurrentVc:[MainViewController instance]];
  
  if (isSuc) {
    success(@"成功打开视频页面");
  }else{
    faild(@"未打开视频流",@"未打开视频流",nil);
  }

}


/// 发送云手机事件消息
/// @param eventName 事件名称
-(void)sendCloudPhoneEvent:(NSString *)eventName{
  
  if (self.phoneModal) {
    [self.phoneModal setValue:eventName forKey:@"eventName"];
    [self sendEventWithName:@"cloudPhoneEvent" body:self.phoneModal];

  }else{
    NSLog(@"发发送云手机事件消息，缺少云手机信息");
  }

}

/// 发送webSocket 事件
/// @param eventName 事件名称
/// @param code code
/// @param message 消息内容
/// @param params 参数
-(void)sendWebSocketEvent:(NSString *)eventName code:(NSString *)code message:(NSString *)message params:(NSString *)params
{
  NSDictionary *bodyDic = @{@"eventName":eventName,@"code":code,@"message":message,@"params":params};
  [self sendEventWithName:@"webSocketEvent" body:bodyDic];
}


#pragma -mark SDK的代理方法


/// websocket 连接成功
-(void)ljSDKUtilWebSocketConnectedSuccess{
  if (self.startWebsocketSuccess) {
    self.startWebsocketSuccess(@"socket链接打开");
  }
  self.socketConnect = YES;
  [self sendWebSocketEvent:@"webSocketOnOpen" code:@"200" message:@"" params:@""];

}

/// websocket 连接报错
-(void)ljSDKUtilWebSocketConnectedFailWithError:(NSError *_Nullable)error{
  self.socketConnect = NO;
  [self sendWebSocketEvent:@"webSocektOnError" code:@"400" message:@"" params:@""];

}

/// websocket 断开连接
-(void)ljSDKUtilWebSocketDidClosedWithCode:(NSInteger)code reason:(NSString *_Nullable)reason{
  if (self.closeWebsocketSuccess) {
    self.closeWebsocketSuccess(@"成功关闭socket");
  }
  [self sendWebSocketEvent:@"webSocektOnClose" code:@"404" message:@"" params:@""];
  self.socketConnect = NO;
  

  

}

/// websocket 收到消息的调
/// @param message 收到的消息(json 串字符串)
-(void)ljSDKUtilWebSocketDidReceiveMsg:(id _Nullable )message{
  [self sendWebSocketEvent:@"webSocektMessage" code:@"200" message:message params:message];
}

/// 悬浮球的点击事件的回调
-(void)ljSDKUtilPanBtnClickCallBack{
  
  
}




-(LJSDKUtil *)ljSDKUtil{
    if (_ljSDKUtil == nil) {
        _ljSDKUtil = [[LJSDKUtil alloc] init];
        _ljSDKUtil.isDebugModel = YES;
        _ljSDKUtil.delegate = self;
        [_ljSDKUtil updatePanBtnImage:[UIImage imageNamed:@"float_btn"]];
    }
    return _ljSDKUtil;
}

@end
