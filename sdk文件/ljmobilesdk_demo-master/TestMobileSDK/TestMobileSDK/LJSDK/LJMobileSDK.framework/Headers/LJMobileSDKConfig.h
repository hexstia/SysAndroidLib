//
//  LJMobileSDKConfig.h
//  TestMobile
//
//  Created by huateng on 2019/12/8.
//  Copyright © 2019 cyl. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface LJMobileSDKConfig : NSObject

+(instancetype) defaultConfig;

//重置单例
-(void)reset;

//===============================点击功能键弹窗 各个控件frme 的修改=========================


/**  下载速度  */
@property (nonatomic,strong) UILabel *receiveLabel;
/**  上传速度  */
@property (nonatomic,strong) UILabel *sendLabel;
/**  剩余时长  */
@property (nonatomic,strong) UILabel *balanceTimeLabel;


/**  退出按钮  */
@property (nonatomic,strong) UIButton *exitBtn;
/**  关闭按钮  */
@property (nonatomic,strong) UIButton *closeBtn;
/**  下载按钮  */
@property (nonatomic,strong) UIButton *downloadBtn;
/**  下载速度标题  */
@property (nonatomic,strong) UILabel *receiveTitleLabel;
/**  上传速度标题  */
@property (nonatomic,strong) UILabel *sendTitleLabel;
/**  剩余时长标题  */
@property (nonatomic,strong) UILabel *balanceTimeTitleLabel;
/**  弹窗 (用button 的原因是防止时间穿透传递手势)  */
@property (nonatomic,strong) UIButton *alertView;
/**  弹窗背景图片  */
@property (nonatomic,strong) UIImageView *alertBgImageView;
/**  弹窗 (蒙层) */
@property (nonatomic,strong) UIButton *alertFuncBgView;
/**  剩余时长 */
@property (nonatomic,assign) NSInteger balanceTime;



/**  退出按钮frame  */
@property (nonatomic,assign) CGRect exitBtnFrame;
/**  关闭按钮frame  */
@property (nonatomic,assign) CGRect closeBtnFrame;
/**  下载按钮 frame  */
@property (nonatomic,assign) CGRect downloadBtnFrame;
/**  下载速度  frame  */
@property (nonatomic,assign) CGRect receiveLabelFrame;
/**  上传速度  frame  */
@property (nonatomic,assign) CGRect sendLabelFrame;
/**  剩余时长  frame  */
@property (nonatomic,assign) CGRect balanceTimeLabelFrame;
/**  下载速度标题  frame  */
@property (nonatomic,assign) CGRect receiveTitleLabelFrame;
/**  上传速度标题  frame  */
@property (nonatomic,assign) CGRect sendTitleLabelFrame;
/**  剩余时长标题  frame  */
@property (nonatomic,assign) CGRect balanceTimeTitleLabelFrame;
/**  弹窗背景图片 frame  CGRectMake(0, 5, 265, 190) */
@property (nonatomic,assign) CGRect alertBgImageFrame;
/**  弹窗  frame  CGRectMake(0, 150, 265, 216); */
@property (nonatomic,assign) CGRect alertViewFrame;



//===============================加载页面的 控件及属性的修改 =========================

/** 是否禁止加载动画  默认不禁止*/
@property (nonatomic,assign) BOOL isStopLoadingAnimationView;
/** 是否停止动画  */
@property (nonatomic,assign) NSInteger isStop;
/**  加载动画view */
@property (nonatomic,strong) UIView *animationView;
/**  网络不通畅 时提示  */
@property (nonatomic,strong) UILabel *netHintLabel;
/**  重试按钮  */
@property (nonatomic,strong) UIButton *retryBtn;



//===============================引导页面的 控件及属性的修改 =========================
/**  箭头  */
@property (nonatomic,strong) UIImageView *arrowImageView;
/**  提示内容  */
@property (nonatomic,strong) UILabel *hintLabel;
/**  确认按钮  */
@property (nonatomic,strong) UIButton *confirmBtn;
/**  弹窗背景蒙层 [UIColor colorWithWhite:0.1 alpha:0.5]  */
@property (nonatomic,strong) UIView *alertBgView;




@end

NS_ASSUME_NONNULL_END
