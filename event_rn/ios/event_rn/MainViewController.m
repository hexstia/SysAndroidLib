//
//  MainViewController.m
//  event_rn
//
//  Created by 何文文 on 2020/3/24.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "MainViewController.h"

@interface MainViewController ()


@end

@implementation MainViewController

static MainViewController *_instance;

+(instancetype)instance{
  if (_instance == nil) {
    _instance = [MainViewController new];
  }
  return _instance;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
