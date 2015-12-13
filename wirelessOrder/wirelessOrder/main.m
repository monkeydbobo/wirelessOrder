//
//  main.m
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/9.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <BmobSDK/Bmob.h>
#import "AppDelegate.h"

int main(int argc, char * argv[]) {
    @autoreleasepool {
        [Bmob registerWithAppKey:@"7d0517af8ca3ba8beab5db9613eb566c"];
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}
