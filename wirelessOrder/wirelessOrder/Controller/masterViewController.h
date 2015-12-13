//
//  masterViewController.h
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/9.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "MenuView.h"
#import "TableView.h"
#import "PayView.h"
#import "SyncView.h"
#import "SettingView.h"
#import "detailViewController.h"

@interface masterViewController : UIViewController
@property (nonatomic,strong) MenuView *menuView;
@property (nonatomic,strong) TableView *tableView;
@property (nonatomic,strong) PayView *payView;
@property (nonatomic,strong) SettingView *settingView;
@property (nonatomic,strong) SyncView *syncView;
@property (nonatomic,strong) detailViewController *detail;
@end
