//
//  HTNetUtil.h
//  WebSocketDemo
//
//  Created by huateng on 2019/11/18.
//  Copyright © 2019 newbike. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^SucccessBlock)(NSInteger code,NSString * _Nonnull msg,id _Nullable datas);

typedef void (^FailBlock)(NSError * _Nullable error);

NS_ASSUME_NONNULL_BEGIN

@interface HTNetUtil : NSObject

+(void)request:(NSString *)url_str successBlock:(SucccessBlock)successBlock;

+(void)request:(NSString *)url_str successBlock:(SucccessBlock)successBlock failBlock:(FailBlock)failBlock;

+(void)postRequest:(NSString *)urlStr successBlock:(SucccessBlock)successBlock;

+(void)postRequest:(NSString *)urlStr successBlock:(SucccessBlock)successBlock failBlock:(FailBlock)failBlock;

+(void)postRequest:(NSString *)urlStr withParams:(NSMutableDictionary *)dict successBlock:(SucccessBlock)successBlock failBlock:(nonnull FailBlock)failBlock;

@end

NS_ASSUME_NONNULL_END
