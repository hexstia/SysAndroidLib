//
//  ViewController.m
//  TestCloudPhoneSDK
//
//  Created by huateng on 2020/3/20.
//  Copyright © 2020 htrdit. All rights reserved.
//

#import "ViewController.h"
#import <LJCloudPhone/LJCloudPhone.h>


#define HTweakSelf  __weak typeof(self) weakSelf = self;
#define  HTTP_GETScreenShot @"http://test.91lanjiang.com/tcss-api/cloudPhone/phone/screenshotCloudphone"

#define kScreenWidth [UIScreen mainScreen].bounds.size.width

#define kScreenHeight [UIScreen mainScreen].bounds.size.height


@interface ViewController ()<LJSDKUtilDelegate>


/** token */
@property (nonatomic,copy) NSString *token;

/** 设备Id */
@property (nonatomic,assign) NSInteger deviceId;

/*
 * 截图
 */
@property (nonatomic,weak) UIImageView *screenShotImageView;
@property (nonatomic,weak) UIButton *alerView;

/**    */
@property (nonatomic,strong) LJSDKUtil *ljSDKUtil;


/**  toast  */
@property (nonatomic,strong) UILabel *toast;

@property (nonatomic,weak) UITextField *devcieFiled;
@property (nonatomic,weak) UITextField *tokenFiled;

@end

@implementation ViewController


-(LJSDKUtil *)ljSDKUtil{
    if (_ljSDKUtil == nil) {
        _ljSDKUtil = [[LJSDKUtil alloc] init];
        _ljSDKUtil.isDebugModel = YES;
        _ljSDKUtil.delegate = self;
        [_ljSDKUtil updatePanBtnImage:[UIImage imageNamed:@"panButtonRed"]];
    }
    return _ljSDKUtil;
}

-(UILabel *)toast{
    
    if (_toast == nil) {
       _toast = [[UILabel alloc] init];
       _toast.font = [UIFont systemFontOfSize:13];
        _toast.textColor = [UIColor blackColor];
       _toast.numberOfLines = 0;
       _toast.textAlignment = NSTextAlignmentCenter;
       _toast.backgroundColor = [UIColorUtils colorWithHexString:@"#dddddd"];
    }
       
    return _toast;
}


-(void)showTostWithMessage:(NSString *)msg{
 
    self.toast.text = msg;
    self.toast.hidden = NO;
    CGSize size = [self.toast sizeThatFits:CGSizeMake([HTFrameUtil htWidthWithView:self.view] - 60, 20)];
    self.toast.frame = CGRectMake(0, 0, size.width + 40, size.height + 20);
    self.toast.center = CGPointMake([HTFrameUtil htWidthWithView:self.view] * 0.5, [HTFrameUtil htHeightWithView:self.view] * 0.65);
    self.toast.layer.cornerRadius = [HTFrameUtil htHeightWithView:self.toast] * 0.5;
    self.toast.layer.masksToBounds = YES;
    
    
    NSLog(@"toasViewFrame == %@",NSStringFromCGRect(self.toast.frame));
    
    [[UIApplication sharedApplication].keyWindow addSubview:self.toast];
    HTweakSelf
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        weakSelf.toast.hidden = YES;
        [weakSelf.toast removeFromSuperview];
    });

    
}


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    
    self.token = @"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW1nIjpudWxsLCJsYXN0SXAiOiIyMjEuMjE2LjEzOC4xNTUiLCJsb2dpblR5cGUiOm51bGwsImNvbXBhbnlOYW1lIjoiMTM3MTY3ODg0MDLpu5jorqTlhazlj7giLCJpc3MiOiJ0Y3NzQXBpU2VydmVyIiwidHlwZSI6IjEiLCJlbmFibGVUb2tlbiI6dHJ1ZSwiZGVsZXRlRmxhZyI6MCwibGFzdElwQWRkciI6IuacquefpSIsInBhc3N3b3JkIjoiOTVhNTIzMWYxZjBhODRiMWVkNWI4YTc3NWZkNGIyOWIiLCJkZXZpY2VTdW0iOm51bGwsImVuYWJsZSI6dHJ1ZSwibG9naW5OYW1lIjoiMTM3MTY3ODg0MDIiLCJpZCI6NCwiZXhwIjoiMjAyMC0wMy0yMyAxOTo0ODowMCIsImlhdCI6IjIwMjAtMDMtMjMgMTU6NDg6MDAiLCJjcmVhdGVUaW1lU3RyIjoiMjAyMC0wMy0yMCAxMDozMjoxNyIsImVtYWlsIjpudWxsLCJyb2xlSWQiOm51bGwsIm1vYmlsZSI6IjEzNzE2Nzg4NDAyIiwidXBkYXRlVGltZSI6IkZyaSBNYXIgMjAgMTA6MzI6MjEgR01UKzA4OjAwIDIwMjAiLCJob3VyQWQiOm51bGwsInVzZXJOYW1lIjoiMTM3MTY3ODg0MDIiLCJ0eXBlU3RyIjoi5pmu6YCa55So5oi3IiwiY29tcGFueUlkIjo0LCJjcmVhdGVUaW1lIjoiRnJpIE1hciAyMCAxMDozMjoxNyBHTVQrMDg6MDAgMjAyMCIsInd4Tm8iOm51bGwsImVuYWJsZVN0ciI6IuWQr-eUqCIsImNvbnRhY3RVc2VyIjpudWxsLCJjb250YWN0UGhvbmUiOm51bGwsImxvZ2luUGxhdEZvcm0iOm51bGwsInNlYXJjaFZhbHVlIjpudWxsfQ.caXo4QI_f8SAlqCFkf0EdkJeAgXxMsbqIGvKTljygSU";

    self.deviceId = 1545;
    
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    
    UITextField *tokenFiled = [[UITextField alloc] init];
    tokenFiled.frame = CGRectMake(0, 40, 200, 30);
    [HTFrameUtil setHtCenterX:kScreenWidth * 0.5 WithView:tokenFiled];
    tokenFiled.layer.borderColor = [UIColor grayColor].CGColor;
    tokenFiled.layer.borderWidth = 1;
    tokenFiled.placeholder = @"请输入token(默认值无效时请输入)";
    tokenFiled.font = [UIFont systemFontOfSize:12];
    tokenFiled.textColor = [UIColor blackColor];
    [self.view addSubview:tokenFiled];
    self.tokenFiled = tokenFiled;
    
    
    UITextField *devcieFiled = [[UITextField alloc] init];
    devcieFiled.frame = CGRectMake(0, 80, 200, 30);
    [HTFrameUtil setHtCenterX:kScreenWidth * 0.5 WithView:devcieFiled];
    devcieFiled.layer.borderColor = [UIColor grayColor].CGColor;
    devcieFiled.layer.borderWidth = 1;
    devcieFiled.placeholder = @"请输入DeviceId(默认值无效时请输入)";
    devcieFiled.font = [UIFont systemFontOfSize:12];
    devcieFiled.textColor = [UIColor blackColor];
    [self.view addSubview:devcieFiled];
    self.devcieFiled = devcieFiled;
    
    

    UIButton *button1 = [UIButton buttonWithType:UIButtonTypeCustom];
    button1.frame = CGRectMake(0, 0, 200, 30);
    button1.center = CGPointMake([UIScreen mainScreen].bounds.size.width * 0.5, [UIScreen mainScreen].bounds.size.height * 0.2);
    [button1 setTitle:@"初始化" forState:UIControlStateNormal];
    button1.backgroundColor = [UIColor greenColor];
    [self.view addSubview:button1];
    button1.tag = 1;
    [button1 addTarget:self action:@selector(testAction:) forControlEvents:UIControlEventTouchUpInside];

    UIButton *button2 = [UIButton buttonWithType:UIButtonTypeCustom];
    button2.frame = CGRectMake([HTFrameUtil htLeftWithView:button1], [HTFrameUtil htBottomWithView:button1] + 20, 200, 30);
    [button2 setTitle:@"打开webSocket" forState:UIControlStateNormal];
    button2.backgroundColor = [UIColor greenColor];
    button2.tag = 2;
    [self.view addSubview:button2];
    [button2 addTarget:self action:@selector(testAction:) forControlEvents:UIControlEventTouchUpInside];

    UIButton *button3 = [UIButton buttonWithType:UIButtonTypeCustom];
    button3.frame = CGRectMake( [HTFrameUtil htLeftWithView:button2], [HTFrameUtil htBottomWithView:button2] + 20, 200, 30);
    [button3 setTitle:@"打开视频流" forState:UIControlStateNormal];
    button3.backgroundColor = [UIColor greenColor];
    button3.tag = 3;
    [self.view addSubview:button3];
    [button3 addTarget:self action:@selector(testAction:) forControlEvents:UIControlEventTouchUpInside];
    
    
    UIButton *button4 = [UIButton buttonWithType:UIButtonTypeCustom];
    button4.frame = CGRectMake( [HTFrameUtil htLeftWithView:button2], [HTFrameUtil htBottomWithView:button3] + 20, 200, 30);
    [button4 setTitle:@"内部页" forState:UIControlStateNormal];
    button4.backgroundColor = [UIColor greenColor];
    button4.tag = 4;
    [self.view addSubview:button4];
    [button4 addTarget:self action:@selector(testAction:) forControlEvents:UIControlEventTouchUpInside];
    
    
    UIButton *button5 = [UIButton buttonWithType:UIButtonTypeCustom];
    button5.frame = CGRectMake( [HTFrameUtil htLeftWithView:button2], [HTFrameUtil htBottomWithView:button4] + 20, 200, 30);
    [button5 setTitle:@"发送一个请求" forState:UIControlStateNormal];
    button5.backgroundColor = [UIColor greenColor];
    button5.tag = 5;
    [self.view addSubview:button5];
    [button5 addTarget:self action:@selector(sendRequestAction:) forControlEvents:UIControlEventTouchUpInside];
    
    
    UIButton *button6 = [UIButton buttonWithType:UIButtonTypeCustom];
       button6.frame = CGRectMake( [HTFrameUtil htLeftWithView:button2], [HTFrameUtil htBottomWithView:button5] + 20, 200, 30);
       [button6 setTitle:@"截图" forState:UIControlStateNormal];
       button6.backgroundColor = [UIColor greenColor];
       button6.tag = 6;
       [self.view addSubview:button6];
       [button6 addTarget:self action:@selector(showPicAction:) forControlEvents:UIControlEventTouchUpInside];
    
    UIButton *button7 = [UIButton buttonWithType:UIButtonTypeCustom];
          button7.frame = CGRectMake( [HTFrameUtil htLeftWithView:button2], [HTFrameUtil htBottomWithView:button6] + 20, 200, 30);
          [button7 setTitle:@"关闭Websocket" forState:UIControlStateNormal];
          button7.backgroundColor = [UIColor greenColor];
          button7.tag = 7;
          [self.view addSubview:button7];
          [button7 addTarget:self action:@selector(testAction:) forControlEvents:UIControlEventTouchUpInside];
       
    
    
    UIImageView *screenShotImageView = [UIImageView new];
    screenShotImageView.frame = CGRectMake( [HTFrameUtil htLeftWithView:button2], [HTFrameUtil htBottomWithView:button7] + 20, 200, 200);
    screenShotImageView.contentMode = UIViewContentModeScaleAspectFit;
    [self.view addSubview:screenShotImageView];
    self.screenShotImageView = screenShotImageView;

}

-(void)sendRequestAction:(UIButton *)sender{
    [self.ljSDKUtil sendOneWebSocketRequestWithDeviceId:self.deviceId];
}

-(void)showPicAction:(UIButton *)sender{
    
//        HTweakSelf
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    dict[@"token"] = self.token;
    dict[@"screenStatus"] = @"2";
    dict[@"height"] = [NSString stringWithFormat:@"%.0f",kScreenHeight];
    dict[@"width"] = [NSString stringWithFormat:@"%.0f",kScreenWidth];
    dict[@"deviceId"] = @"1545";
    
    [HTNetUtil postRequest:HTTP_GETScreenShot withParams:dict successBlock:^(NSInteger code, NSString * _Nonnull msg, id  _Nullable datas) {
        
        NSLog(@"请求截图响应 %@",datas);
        
    } failBlock:^(NSError * _Nullable error) {
        NSLog(@"请求错误 %@",error);
    }];
    
}


-(void)testAction:(UIButton *)btn{
    
    
    [self.view endEditing:YES];
    
    if (btn.tag == 1) {
        self.deviceId = [self.devcieFiled.text intValue];
        self.token = self.tokenFiled.text;
        return;
    }
    
    if (self.deviceId == 0 || self.token.length == 0) {
        [self showTostWithMessage:@"请输入正确的Token 和 DeviceId"];
        return;
    }
    
    
    NSLog(@"测试:%tu",btn.tag);
    if (btn.tag == 2) {
        [self.ljSDKUtil connectoWebSocketWithToken:self.token];
        return;
    }
    
    if (btn.tag == 3) {
        [self.ljSDKUtil openVideoStreamWithDeviceId:1545];
        return;
    }
    
    if (btn.tag == 4) {
//        [self.ljSDKUtil openMobileViewWithCurrentVc:self];
        BOOL isSuc =  [self.ljSDKUtil openMobileViewWithCurrentVc:self];
        if (isSuc == NO) {
            [self showTostWithMessage:@"请先打开视频流"];
        }
        return;
    }
    
    if (btn.tag == 7) {
        [self.ljSDKUtil disConnectoWebSocket];
        return;
    }
    
}


-(void)tapAction:(UIButton *)sender{
    [sender removeFromSuperview];
}

-(void)exsitAction:(UIButton *)sender{
    
    [self.alerView removeFromSuperview];
    [self.ljSDKUtil closeVideoStreamWithDeviceId:self.deviceId];

    
}





/// websocket 连接成功
-(void)ljSDKUtilWebSocketConnectedSuccess{
    
}

/// websocket 连接成功
-(void)ljSDKUtilWebSocketConnectedFailWithError:(NSError *_Nullable)error{
    
}

/// websocket 断开连接
-(void)ljSDKUtilWebSocketDidClosedWithCode:(NSInteger)code reason:(NSString *_Nullable)reason{
    
}

/// websocket 收到消息的调
/// @param message 收到的消息(json 串字符串)
-(void)ljSDKUtilWebSocketDidReceiveMsg:(id _Nullable )message{
    
    NSLog(@"ljVideoViewControllerWebSocketDidReceiveMsg :%@",message);
    
    
    NSDictionary *dict = [self dictionaryWithJsonString:message];
    NSLog(@"webScoket响应数据:\n \n %@ \n\n",message);
    if ([dict[@"code"] isEqualToString:@"200"]) {
        // 截图的回传
        if ([dict[@"method"] isEqualToString:@"screenShot"]) {
            
            NSString *base64 = dict[@"data"][@"content"];
            if (base64.length == 0) {
                return;
            }
            //Base64字符串转UIImage图片：
            NSData *decodedImageData = [[NSData alloc]initWithBase64EncodedString:base64 options:NSDataBase64DecodingIgnoreUnknownCharacters];
            UIImage *decodedImage = [UIImage imageWithData:decodedImageData];
            self.screenShotImageView.image = decodedImage;
        }
    }
    
}

/// 悬浮球的点击事件的回调
-(void)ljSDKUtilPanBtnClickCallBack{
    
    UIButton *alerView = [UIButton buttonWithType:UIButtonTypeCustom];
    alerView.frame = CGRectMake(0, 0, kScreenWidth, kScreenHeight);
    alerView.backgroundColor = [UIColor clearColor];
    [alerView addTarget:self action:@selector(tapAction:) forControlEvents:UIControlEventTouchUpInside];
    self.alerView = alerView;

    UIView *coverView = [UIView new];
    coverView.backgroundColor = [UIColor colorWithWhite:0 alpha:0.5];
    coverView.userInteractionEnabled = NO;
    coverView.frame = alerView.bounds;
    [alerView addSubview:coverView];


    UIButton *button1 = [UIButton buttonWithType:UIButtonTypeCustom];
    button1.frame = CGRectMake(0, 0, 100, 30);
    button1.center = CGPointMake([UIScreen mainScreen].bounds.size.width * 0.5, [UIScreen mainScreen].bounds.size.height * 0.3);
    [button1 setTitle:@"退出" forState:UIControlStateNormal];
    button1.backgroundColor = [UIColor greenColor];
    [alerView addSubview:button1];
    button1.tag = 1;
    [button1 addTarget:self action:@selector(exsitAction:) forControlEvents:UIControlEventTouchUpInside];

    [self.ljSDKUtil showAlertViewWithView:alerView];


}



- (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString
{
    if (jsonString == nil) {
        return nil;
    }

    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSError *err;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData
                                                        options:NSJSONReadingMutableContainers
                                                          error:&err];
    if(err)
    {
        NSLog(@"json解析失败：%@",err);
        return nil;
    }
    return dic;
}



@end
