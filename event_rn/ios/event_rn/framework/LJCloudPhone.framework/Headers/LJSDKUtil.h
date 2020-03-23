//
//  SDKUtil.h
//  CloudMobile
//
//  Created by huateng on 2020/3/20.
//  Copyright © 2020 htrdit. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


@protocol LJSDKUtilDelegate <NSObject>


/// websocket 连接成功
-(void)ljSDKUtilWebSocketConnectedSuccess;

/// websocket 连接成功
-(void)ljSDKUtilWebSocketConnectedFailWithError:(NSError *_Nullable)error;

/// websocket 断开连接
-(void)ljSDKUtilWebSocketDidClosedWithCode:(NSInteger)code reason:(NSString *_Nullable)reason;

/// websocket 收到消息的调
/// @param message 收到的消息(json 串字符串)
-(void)ljSDKUtilWebSocketDidReceiveMsg:(id _Nullable )message;

/// 悬浮球的点击事件的回调
-(void)ljSDKUtilPanBtnClickCallBack;


@end


NS_ASSUME_NONNULL_BEGIN

@interface LJSDKUtil : NSObject

/** 是否设置调试模式 YES 是, NO:否 */
@property (nonatomic,assign) BOOL isDebugModel;


/*
 * 代理
 */
@property (nonatomic,weak) id<LJSDKUtilDelegate> delegate;

///连接webSocket
-(void)connectoWebSocketWithToken:(NSString *)token;
/// 关闭webSocket连接
-(void)disConnectoWebSocket;
/// 打开视频流的请求
-(void)openVideoStreamWithDeviceId:(NSInteger)deviceId;
/// 关闭视频流的请求(会退出显示页面)
-(void)closeVideoStreamWithDeviceId:(NSInteger)deviceId;
/// 弹窗(增加一个View)
-(void)showAlertViewWithView:(UIView *)view;
/// 发送一个webSocket请求 申请设备
-(void)sendOneWebSocketRequestWithDeviceId:(NSInteger)deviceId;

/// 弹出内部页: 返回值为是否成功, 不成功的原因是因为视频流未成功打开.需要等待视频流打开
/// @param currentVc 当前控制器
-(BOOL)openMobileViewWithCurrentVc:(UIViewController *)currentVc;
/// 修改悬浮窗按钮的图片
-(void)updatePanBtnImage:(UIImage *)image;


@end

NS_ASSUME_NONNULL_END
