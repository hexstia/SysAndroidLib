//
//  LaunchImage.m
//  event_rn
//
//  Created by 何文文 on 2020/4/15.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "LaunchImage.h"
#import "DrawCircleProgressButton.h"

//https://www.jianshu.com/p/d5c418e2d4d7
@interface LaunchImage ()
@property (nonatomic, strong) UIWindow *window;//用来展示启动图的窗口


@end

@implementation LaunchImage

//在load 方法中，启动监听，可以做到无注入
+ (void)load
{
    [self shareInstance];
}
+ (instancetype)shareInstance
{
    static id instance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[self alloc] init];
    });
    return instance;
}


//- (instancetype)init
//{
//    self = [super init];
//    if (self) {
//
//        //尽量不要在初始化的代码里面做别的事，防止对主线程的卡顿和其他情况
//        //应用启动, 首次开屏广告
//        [[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationDidFinishLaunchingNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
//            ///要等DidFinished方法结束后才能初始化UIWindow，不然会检测是否有rootViewController
//            [self checkAD];//检测本地是否有启动图数据，如果有就展示
//            [self request];//请求新的启动图数据
//
//        }];
//
//        //如果需要实现每次APP进入后台后都展示启动图，就要实现下边的逻辑
//        /*
//        //进入后台
//        [[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationDidEnterBackgroundNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
//            [self request];
//        }];
//        //后台启动,二次开屏广告
//        [[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationWillEnterForegroundNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
//            [self checkAD];
//        }];
//         */
//    }
//    return self;
//}

//展示启动图
- (void)show
{
    //初始化一个Window， 做到对业务视图无干扰。
    UIWindow *window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    window.rootViewController = [UIViewController new];
    window.rootViewController.view.backgroundColor = [UIColor clearColor];
    window.rootViewController.view.userInteractionEnabled = NO;
    //广告布局
    [self setupSubviews:window];
    
    //设置为最顶层，防止 AlertView 等弹窗的覆盖
    window.windowLevel = UIWindowLevelStatusBar + 1;
    
    //windwo的isHidden默认为YES，当你设置为NO时，这个Window就会显示了
    window.hidden = NO;
    window.alpha = 1;
    //防止释放，显示完后  要手动设置为 nil
    self.window = window;
}

//初始化显示的视图
- (void)setupSubviews:(UIWindow*)window
{
    //用来展示图片内容
    UIImageView *imageView = [[UIImageView alloc] initWithFrame:window.bounds];
  imageView.image = [UIImage imageNamed:@"launchImg"];
    
    //增加点击事件 点击图片的时候可以实现自己想要的逻辑
    UITapGestureRecognizer* tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(letGo)];
    [imageView addGestureRecognizer:tap];
    [window addSubview:imageView];
    
    ///增加一个倒计时跳过按钮
   DrawCircleProgressButton *drawCircleView = [[DrawCircleProgressButton alloc]initWithFrame:CGRectMake(window.bounds.size.width - 55, 30, 40, 40)];
   drawCircleView.lineWidth = 2;
   [drawCircleView setTitle:@"跳过" forState:UIControlStateNormal];
   [drawCircleView setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
   drawCircleView.titleLabel.font = [UIFont systemFontOfSize:14];
   
   [drawCircleView addTarget:self action:@selector(goOut) forControlEvents:UIControlEventTouchUpInside];
   
   /**
    *  progress 完成时候的回调
    */
   __weak LaunchImage *weakSelf = self;
   [drawCircleView startAnimationDuration:3 withBlock:^{
       [weakSelf goOut];
   }];
   
   [window addSubview:drawCircleView];
    
}

- (void)letGo
{
    //取出跳转页面之前的controller 注意： 不直接取KeyWindow 是因为当有AlertView 或者有键盘弹出时， 取到的KeyWindow是错误的。
//    UIViewController* rootVC = [[UIApplication sharedApplication].delegate window].rootViewController;
}

- (void)goOut
{
    [UIView animateWithDuration:0.2 animations:^{
        self.window.alpha = 0;
    } completion:^(BOOL finished) {
        [self.window.subviews.copy enumerateObjectsUsingBlock:^(__kindof UIView * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
            [obj removeFromSuperview];
        }];
        self.window.hidden = YES;
        self.window = nil;//手动释放
    }];
}

@end
