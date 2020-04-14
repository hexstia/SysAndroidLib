//
//  LaunchImage.h
//  event_rn
//
//  Created by 何文文 on 2020/4/15.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
NS_ASSUME_NONNULL_BEGIN

@interface LaunchImage : NSObject

+ (instancetype)shareInstance;

- (void)show;

@end

NS_ASSUME_NONNULL_END
