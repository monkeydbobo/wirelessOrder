//
//  DBUtil.m
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/11.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import "DBUtil.h"

@implementation DBUtil

static DBUtil *instance = nil;

+ (DBUtil *)getInstance
{
    if (instance == nil) {
        instance = [[DBUtil alloc]init];
    }
    return instance;
}
- (instancetype)init
{
    if (self == [super init]) {
        NSArray *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentationDirectory, NSUserDomainMask, YES);
        NSString *path = [docPath objectAtIndex:0];
        
        self.path = [path stringByAppendingString:@"wireless.db"];
        self.db = [FMDatabase databaseWithPath:path];
        
        [self open];
        [self createTable];
        [self close];
    }
    return self;
    
}
- (void)open
{
    if (![self.db open]) {
        return;
    }
}
- (void)close
{
    [self.db close];
}
- (void)createTable
{
    NSString *sql1 = @"create table if not exists MenuTypeTbl(objectid text,name text,price real,tid text,pic_path text,description text)";
    NSString *sql2 = @"create table if not exists MenuTypeTbl(objectid text,name text)";
    
    [self.db executeUpdate:sql1];
    [self.db executeUpdate:sql2];
    
}

- (void)addMenuType:(MenuType *)mt
{
    [self open];
    NSString *sql = @"insert into MenuTypeTbl(objectid,name)values(?,?)";
    BOOL r = [self.db executeUpdate:sql,mt.objectid,mt.name];
    if (r) {
        NSLog(@"添加成功！");
    }else{
        NSLog(@"添加失败！");
    }
    [self close];
}
- (void)deleteAllMenuType
{
    [self open];
    NSString *sql = @" delete from MenuTypeTbl";
    [self.db executeUpdate:sql];
    [self close];
}
- (void)addMenu:(Menu *)m
{
    [self open];
    NSString *sql = @"insert into MenuTbl(objectid,name,price,tid,pic_path,description)value(?,?,?,?,?,?)";
    [self.db executeUpdate:sql,m.objectid,m.name,[NSNumber numberWithFloat:m.price],m.tid,m.picture_path,m.desc];
    
    [self close];
}
- (void)deleteAllMenu
{
    [self open];
    NSString *sql = @"delete from MenuTbl";
    [self.db executeUpdate:sql];
    [self close];
}
- (NSMutableArray *)qureyMenu
{
    [self open];
    FMResultSet *s = [self.db executeQuery:@"SELECT * FROM MenuTbl"];
    NSMutableArray *temp = [NSMutableArray arrayWithCapacity:10];
    while ([s next]) {
        NSString *objectid = [s stringForColumn:@"objectid"];
        NSString *name = [s stringForColumn:@"name"];
        float price = [s doubleForColumn:@"price"];
        NSString *tid = [s stringForColumn:@"tid"];
        NSString *pic_path = [s stringForColumn:@"pic_path"];
        NSString *description = [s stringForColumn:@"description"];
        
        Menu *m = [[Menu alloc]init];
        m.objectid = objectid;
        m.name = name;
        m.price = price;
        m.tid = tid;
        m.picture_path = pic_path;
        m.desc = description;
        
        [temp addObject:m];
    }
    [self close];
    return temp;
}
//通过id查找
- (NSMutableArray *)qureyMenuById:(NSString *)tid
{
    [self open];
    FMResultSet *s = [self.db executeQuery:@"SELECT * FROM MenuTbl WHERE tid=?",tid];
    NSMutableArray *temp = [NSMutableArray arrayWithCapacity:10];
    while ([s next]) {
        NSString *objectid = [s stringForColumn:@"objectid"];
        NSString *name = [s stringForColumn:@"name"];
        float price = [s doubleForColumn:@"price"];
        NSString *tid = [s stringForColumn:@"tid"];
        NSString *pic_path = [s stringForColumn:@"pic_path"];
        NSString *description = [s stringForColumn:@"description"];
        
        Menu *m = [[Menu alloc]init];
        m.objectid = objectid;
        m.name = name;
        m.price = price;
        m.tid = tid;
        m.picture_path = pic_path;
        m.desc = description;
        
        [temp addObject:m];
    }
    [self close];
    return temp;
}
- (NSMutableArray *)qureyMenuType
{
    [self open];
    FMResultSet *s = [self.db executeQuery:@"SELECT * FROM MenuTypeTbl"];
    NSMutableArray *temp = [NSMutableArray arrayWithCapacity:10];
    while ([s next]) {
        NSString *objectid = [s stringForColumn:@"objectid"];
        NSString *name = [s stringForColumn:@"name"];
        Menu *m = [[Menu alloc]init];
        m.objectid = objectid;
        m.name = name;
        [temp addObject:m];
    }
    [self close];
    return temp;
}
@end