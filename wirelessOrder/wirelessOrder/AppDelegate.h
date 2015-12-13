//
//  AppDelegate.h
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/9.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "masterViewController.h"
#import "detailViewController.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (nonatomic,strong) UISplitViewController *split;
@property (nonatomic,strong) masterViewController *master;
@property (nonatomic,strong) detailViewController *detail;
@end

