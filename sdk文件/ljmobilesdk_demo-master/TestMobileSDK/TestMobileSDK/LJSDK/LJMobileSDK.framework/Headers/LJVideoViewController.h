//
//  VideoViewController.h
//  TestMobile
//
//  Created by huateng on 2019/11/18.
//  Copyright © 2019 cyl. All rights reserved.
//

#import <UIKit/UIKit.h>
@class LJVideoViewController,GCDAsyncSocket;

NS_ASSUME_NONNULL_BEGIN

@protocol LJVideoViewControllerDelegate <NSObject>

@optional

/// websocket 连接成功
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerWebSocketConnected:(LJVideoViewController *)ljVideoController;

/// websocket 断开连接
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerWebSocketDisConnected:(LJVideoViewController *)ljVideoController;


/// websocket 收到消息的调
/// @param ljVideoController 主页Controller
/// @param message 收到的消息(json 串字符串)
-(void)ljVideoViewControllerWebSocketDidReceiveMsg:(LJVideoViewController *)ljVideoController receivedMsg:(id)message;


/// 音视频socket 连接成功
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerVideoSocketConnected:(LJVideoViewController *)ljVideoController;

/// 音视频socket 断开连接
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerVideoSocketDisConnected:(LJVideoViewController *)ljVideoController withError:(NSError *)err;

/// 手势socket 连接成功
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerTouchSocketConnected:(LJVideoViewController *)ljVideoController;

/// 手势socket 断开连接
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerTouchSocketDisConnected:(LJVideoViewController *)ljVideoController withError:(NSError *)err;

@end



@interface LJVideoViewController : UIViewController

/** 广告标识 */
@property (nonatomic,copy) NSString *adKey;

/**  是否开启调试  默认关闭,开启的话能看到打印日志  */
@property (nonatomic,assign) BOOL isDebug;

/// 修改悬浮 功能按钮的图片
/// @param btnImage 图片
-(void)setFuncBtnImage:(UIImage *)btnImage;

/*
 * socket 连接相关代理(包括webSocket  和GCDSocket)
 */
@property (nonatomic,weak) id<LJVideoViewControllerDelegate> delegate;

@end

NS_ASSUME_NONNULL_END
