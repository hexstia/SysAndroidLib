//
//  ActionModal.m
//  event_rn
//
//  Created by 何文文 on 2020/3/25.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "ActionModal.h"
#import "CloudPhoneModule.h"
#import "MainViewController.h"

@interface ActionModal ()


@property (weak, nonatomic) IBOutlet UIView *blackBGView;

@property (weak, nonatomic) IBOutlet UILabel *phoneNameLabel;
@property (weak, nonatomic) IBOutlet UIImageView *signalImage;
@property (weak, nonatomic) IBOutlet UILabel *signalLabel;
@property(strong,nonatomic) NSDictionary *phone;


@end

@implementation ActionModal

+(instancetype)initActionModalWith:(NSDictionary *)phone {
  ActionModal *modal = [[[NSBundle mainBundle]loadNibNamed:@"ActionModal" owner:nil options:nil] lastObject];
  modal.phone = phone;
  return modal;
}

-(void)layoutSubviews{
  NSString *phoneName = self.phone[@"deviceName"];
  if (phoneName) {
    self.phoneNameLabel.text = [NSString stringWithFormat:@"手机名称：%@",phoneName];
  }
  
  self.blackBGView.layer.cornerRadius = 5;
  self.blackBGView.layer.masksToBounds = YES;
  
}

- (IBAction)closeBtnClick:(id)sender {
  [self removeFromSuperview];
}


- (IBAction)restartBtnClick:(id)sender {
  [self showAlertAndSendEvent:@"重启将会返回云手机列表" eventName:@"cloudPhoneRestart"];
  [self removeFromSuperview];
}

- (IBAction)uploadFileBtnClick:(id)sender {

  [self showAlertAndSendEvent:@"上传文件将会返回云手机列表" eventName:@"cloudUploadFile"];
  [self removeFromSuperview];
}

- (IBAction)uploadAppBtnClick:(id)sender {
  [self showAlertAndSendEvent:@"上传应用将会返回云手机列表" eventName:@"cloudUploadApk"];
[self removeFromSuperview];
}

- (IBAction)renewBtnClick:(id)sender {
  [self showAlertAndSendEvent:@"一键新机将手机数据全部清除并返回云手机主页" eventName:@"cloudPhoneRenew"];
[self removeFromSuperview];
}
- (IBAction)backBtnClick:(id)sender {
  [[CloudPhoneModule instance] sendCloudPhoneEvent:@"cloudPhoneBack"];
  [self removeFromSuperview];
}

- (IBAction)quiteBtnClick:(id)sender {
  [[CloudPhoneModule instance] closeVideoStream];
  [self removeFromSuperview];
}
- (IBAction)homeBtnClick:(id)sender {
  [[CloudPhoneModule instance] sendCloudPhoneEvent:@"cloudPhoneHome"];
  [self removeFromSuperview];
}


-(void)showAlertAndSendEvent:(NSString *)alertMessage eventName:(NSString *)eventName{
  UIAlertController *alertVC = [UIAlertController alertControllerWithTitle:@"提示" message:alertMessage preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction *cancleAction = [UIAlertAction actionWithTitle:@"取消" style:(UIAlertActionStyleCancel) handler:nil];
  
  
  UIAlertAction *trueAction = [UIAlertAction actionWithTitle:@"确定" style:(UIAlertActionStyleDefault) handler:^(UIAlertAction * _Nonnull action) {
    [[CloudPhoneModule instance] closeVideoStream];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
          [[CloudPhoneModule instance] sendCloudPhoneEvent:eventName];
    });
  }];
  
  [alertVC addAction:cancleAction];
  [alertVC addAction:trueAction];
  
  [[self topViewController] presentViewController:alertVC animated:YES completion:nil];
}


// 获取顶层VC
- (UIViewController *)topViewController {
    UIViewController *resultVC;
    resultVC = [self _topViewController:[[UIApplication sharedApplication].keyWindow rootViewController]];
    while (resultVC.presentedViewController) {
        resultVC = [self _topViewController:resultVC.presentedViewController];
    }
    return resultVC;
}

- (UIViewController *)_topViewController:(UIViewController *)vc {
    if ([vc isKindOfClass:[UINavigationController class]]) {
        return [self _topViewController:[(UINavigationController *)vc topViewController]];
    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        return [self _topViewController:[(UITabBarController *)vc selectedViewController]];
    } else {
        return vc;
    }
    return nil;
}

@end
