//
//  UIColorUtils.h
//  LJMobileSDK
//
//  Created by huateng on 2019/12/19.
//  Copyright © 2019 cyl. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIColorUtils : NSObject

/**
 *  16进制颜色转换
 *
 *  @param hexString 16进制
 *
 *  @return 颜色
 */
+ (UIColor *)colorWithHexString:(NSString *)hexString;
/**
 *  带透明度的16进制颜色
 *
 *  @param hexString 16进制
 *  @param alpha     透明度
 *
 *  @return 颜色
 */
+ (UIColor *)colorWithHexString:(NSString *)hexString
                          alpha:(CGFloat)alpha;


@end

NS_ASSUME_NONNULL_END
