---
draft: false
category: Others
tags:
  - Others
date: 2019-10-16
title: 记一次路由器上网设置
# 固定标题
vssue-title: 路由器上网设置
---
## 不能上网
回到家中发现不能上网,经过一番折腾,发现路由器已经拨号成功,并且在测试工具中可以ping到外网,但电脑网络ping不通外网
![router1](~@img/others/2019-10-16-router01.png)
![router2](~@img/others/2019-10-16-router02.png)

于是乎重启路由器几次,依旧无效...

改用网线联网,依旧无效...

直接网线连电脑拨号,可以上网,因此可以判断问题出在路由器...

## 备份数据
讲路由器配置备份,恢复出厂设置

等待一会,待恢复完配置后发现问题依旧,重试3-5次未能解决

## 重新配置路由器
恢复出厂设置后,一路根据提示配置,终于可以上网了,设置连原来不闪的led等都亮了

此时来到软件中心下载核心插件,发现......,核心插件被下架了
![software](~@img/others/2019-10-16-router03.png)

## 安装插件
一堆查找后找到离线安装包

![software-kit](~@img/others/2019-10-16-router04.png)

在chrome下下载半天,最后发现迅雷一小会就下完,还是迅雷优秀,找到6个镜像源...

开搞开搞
![software-kit](~@img/others/2019-10-16-router05.png)
![software-kit](~@img/others/2019-10-16-router06.png)

## 配置插件
添加订阅地址,配置故障设置,ok,完事
![software-kit](~@img/others/2019-10-16-router07.png)