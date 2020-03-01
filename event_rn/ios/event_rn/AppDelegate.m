/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <RNArenaPay/RNArenaPay.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
  

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"event_rn"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}



//  应用间跳转的代理方法
-(BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  
  NSString *optionKey = options[UIApplicationOpenURLOptionsSourceApplicationKey];
  NSString *absolute = url.absoluteString;
  
  //  支付宝支付
  if ([url.host isEqualToString:@"safepay"]) {
    return [AliPayManager applicationOpenUrl:url];
  }
  
  //  微信支付或者微信登录
  if ([optionKey isEqualToString:@"com.tencent.xin"] && ([absolute containsString:@"pay"] || [absolute containsString:@"oauth"])) {
    return [WXPayManager applicationOpenUrl:url];
  }
  
//  QQ 授权回调
  if([absolute hasPrefix:@"tencent"]){
    return [TencentOAuth HandleOpenURL:url];
  }
  
  
  return YES;
}

@end
