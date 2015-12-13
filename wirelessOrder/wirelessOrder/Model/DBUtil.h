//
//  DBUtil.h
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/11.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "FMDatabase.h"
#import "Menu.h"
#import "MenuType.h"

@interface DBUtil : NSObject
//数据库的实力
@property (nonatomic,strong) FMDatabase *db;
//数据库的路径
@property (nonatomic,strong) NSString *path;
//单例设计模式
+ (DBUtil *)getInstance;

- (void)open;
- (void)close;

- (void)createTable;
//添加菜单
- (void)addMenu:(Menu *)m;
//删除所有菜单
- (void)deleteAllMenu;

- (void)addMenuType:(MenuType *)mt;
- (void)deleteAllMenuType;

- (NSMutableArray *)qureyMenu;
- (NSMutableArray *)qureyMenuById:(NSString *)tid;
- (NSMutableArray *)qureyMenuType;

@end
