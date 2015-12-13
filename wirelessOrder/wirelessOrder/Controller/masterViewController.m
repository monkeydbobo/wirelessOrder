//
//  masterViewController.m
//  wirelessOrder
//
//  Created by wanghaobo on 15/12/9.
//  Copyright © 2015年 wanghaobo. All rights reserved.
//

#import "masterViewController.h"
#import "Constant.h"
#import "menuManager.h"
@interface masterViewController ()<UITableViewDataSource,UITableViewDelegate>
@property (nonatomic,strong) NSMutableArray *dataSource;
@property (nonatomic,strong) UITableView *tv;
@property (nonatomic,strong) menuManager *manager;
@end

@implementation masterViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor redColor];
    self.tv = [[UITableView alloc]initWithFrame:CGRectMake(0, 5,MAX_WIDTH, self.view.frame.size.height)];
    [self initDatasource];
    self.tv.dataSource = self;
    self.tv.delegate = self;
    [self initViews];
    self.manager = [[menuManager alloc]init];
    [self.manager syncMenuType];
    [self.manager syncMenu];

    [self.view addSubview:self.tv];
}
- (void)initDatasource
{
    self.dataSource = [NSMutableArray arrayWithCapacity:5];
    [self.dataSource addObject:@"浏览菜单"];
    [self.dataSource addObject:@"查看餐台"];
    [self.dataSource addObject:@"买单结算"];
    [self.dataSource addObject:@"同步数据"];
    [self.dataSource addObject:@"系统设置"];

}
- (void)initViews
{
    self.menuView = [[MenuView alloc]initWithFrame:self.view.frame];
    self.payView = [[PayView alloc]initWithFrame:self.view.frame];
    self.syncView = [[SyncView alloc]initWithFrame:self.view.frame];
    self.settingView = [[SettingView alloc]initWithFrame:self.view.frame];
    self.tableView = [[TableView alloc]initWithFrame:self.view.frame];

}
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    switch (indexPath.row) {
        case 0:
            self.detail.view = self.menuView;
            break;
        case 1:
            self.detail.view = self.tableView;
            break;
        case 2:
            self.detail.view = self.payView;
            break;
        case 3:
            self.detail.view = self.syncView;
            break;
        case 4:
            self.detail.view = self.settingView;
            break;
        default:
            break;
    }
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return self.dataSource.count;
}
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *cid = @"cid";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:cid];
    if (cell == nil) {
        cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cid];
    }
    NSString *item = [self.dataSource objectAtIndex:indexPath.row];
    cell.textLabel.text = item;
    return cell;
}
@end
