//
//  menuManager.m
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/11.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import "menuManager.h"
#import <BmobSDK/Bmob.h>
#import "AFNetworking.h"
@implementation menuManager

- (void)syncMenu
{
    BmobQuery   *bquery = [BmobQuery queryWithClassName:@"MenuTbl"];
    //查找GameScore表的数据
    [bquery findObjectsInBackgroundWithBlock:^(NSArray *array, NSError *error) {
        for (BmobObject *obj in array) {
            //打印objectId,createdAt,updatedAt
            NSLog(@"obj.objectId = %@", [obj objectId]);
            NSLog(@"name = %@",[obj objectForKey:@"name"]);
            BmobFile *file = [obj objectForKey:@"picture"];
            NSString *url = file.url;
            NSLog(@"url = %@",url);
            [self download:url];
        }
    }];

}
- (void)download:(NSString*)url;
{
    NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:configuration];
    
    NSURL *URL = [NSURL URLWithString:url];
    NSURLRequest *request = [NSURLRequest requestWithURL:URL];
    
    NSURLSessionDownloadTask *downloadTask = [manager downloadTaskWithRequest:request progress:nil destination:^NSURL *(NSURL *targetPath, NSURLResponse *response) {
        NSURL *documentsDirectoryURL = [[NSFileManager defaultManager] URLForDirectory:NSDocumentDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:nil];
        return [documentsDirectoryURL URLByAppendingPathComponent:[response suggestedFilename]];
    } completionHandler:^(NSURLResponse *response, NSURL *filePath, NSError *error) {
        NSLog(@"File downloaded to: %@", filePath);
    }];
    [downloadTask resume];
}
//同步菜单分类
- (void)syncMenuType
{
    BmobQuery   *bquery = [BmobQuery queryWithClassName:@"MenuTypeTbl"];
    //查找GameScore表的数据
    [bquery findObjectsInBackgroundWithBlock:^(NSArray *array, NSError *error) {
        for (BmobObject *obj in array) {
            //打印objectId,createdAt,updatedAt
            NSLog(@"obj.objectId = %@", [obj objectId]);
            NSLog(@"name = %@",[obj objectForKey:@"name"]);
        }
    }];
}
@end
