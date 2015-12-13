//
//  Menu.h
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/11.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <BmobSDK/Bmob.h>
@interface Menu :BmobObject
@property (nonatomic,copy) NSString *objectid;
@property (nonatomic,copy) NSString *name;
@property (nonatomic,assign) float price;

@property (nonatomic,copy) NSString *tid;
@property (nonatomic,copy) NSString *picture_path;
@property (nonatomic,copy) NSString *desc;

@end
