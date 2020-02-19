//
//  ViewController.m
//  TestMobileSDK
//
//  Created by huateng on 2019/11/19.
//  Copyright © 2019 cyl. All rights reserved.
//

#import "ViewController.h"
#import <LJMobileSDK/LJMobileSDK.h>


@interface ViewController ()<LJVideoViewControllerDelegate>

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
    button.frame = CGRectMake(0, 0, 100, 30);
    button.center = CGPointMake([UIScreen mainScreen].bounds.size.width * 0.5, [UIScreen mainScreen].bounds.size.height * 0.5);
    [button setTitle:@"测试" forState:UIControlStateNormal];
    button.backgroundColor = [UIColor blueColor];
    [self.view addSubview:button];
    [button addTarget:self action:@selector(testAction) forControlEvents:UIControlEventTouchUpInside];
    
}

-(void)testAction{
    
    LJVideoViewController *vc = [LJVideoViewController new];
    //传参 广告标识符图片(也可直接修改)
    vc.adKey = @"1AFA34A7F984EEABDBB0A7D494132EE5";
    //修改功能键按钮的 图片 (也可 修改 LJResources.bundle panButtonGreen.png 这张图片,名称不要改变)
//    UIImage *image = [UIImage imageNamed:@"panButtonRed"];
//    [vc setFuncBtnImage:image];
    vc.isDebug = YES;
    //监听socket 相关内容.
    vc.delegate = self;
    
    // 获取配置文件
    LJMobileSDKConfig *config = [LJMobileSDKConfig defaultConfig];
    // 修改加载页动画view 的背景颜色.
    config.animationView.backgroundColor = [UIColor redColor];
    // 修改弹框的 关闭按钮的位置
    config.closeBtnFrame = CGRectMake(100, 0, 30, 30);
    // 修改颜色上传网速的字体颜色
    config.receiveLabel.textColor = [UIColor redColor];
    
    // 模态跳转
    [self presentViewController:vc animated:YES completion:nil];
    
}




/// websocket 连接成功
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerWebSocketConnected:(LJVideoViewController *)ljVideoController{
    NSLog(@"ljVideoViewControllerWebSocketConnected");
}

/// websocket 断开连接
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerWebSocketDisConnected:(LJVideoViewController *)ljVideoController{
    NSLog(@"ljVideoViewControllerWebSocketDisConnected");
}


/// websocket 收到消息的调
/// @param ljVideoController 主页Controller
/// @param message 收到的消息(json 串字符串)
-(void)ljVideoViewControllerWebSocketDidReceiveMsg:(LJVideoViewController *)ljVideoController receivedMsg:(id)message{
    NSLog(@"ljVideoViewControllerWebSocketDidReceiveMsg :%@",message);
}


/// 音视频socket 连接成功
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerVideoSocketConnected:(LJVideoViewController *)ljVideoController{
    NSLog(@"ljVideoViewControllerVideoSocketConnected");
}

/// 音视频socket 断开连接
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerVideoSocketDisConnected:(LJVideoViewController *)ljVideoController withError:(NSError *)err{
    NSLog(@"ljVideoViewControllerVideoSocketDisConnected");
}

/// 手势socket 连接成功
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerTouchSocketConnected:(LJVideoViewController *)ljVideoController{
    NSLog(@"ljVideoViewControllerTouchSocketConnected");
}

/// 手势socket 断开连接
/// @param ljVideoController 主页Controller
-(void)ljVideoViewControllerTouchSocketDisConnected:(LJVideoViewController *)ljVideoController withError:(NSError *)err{
    NSLog(@"ljVideoViewControllerTouchSocketDisConnected");
}







@end
