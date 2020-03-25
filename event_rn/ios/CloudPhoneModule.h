//
//  CloudPhoneModule.h
//  event_rn
//
//  Created by 何文文 on 2020/3/23.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN

@interface CloudPhoneModule : RCTEventEmitter

// 获取单例
+(instancetype)instance;

// 关闭视频流
-(void)closeVideoStream;

/// 发送云手机事件消息
-(void)sendCloudPhoneEvent:(NSString *)eventName;

@end

NS_ASSUME_NONNULL_END
