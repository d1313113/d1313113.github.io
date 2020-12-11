---
draft: false
category: java
tags:
  - Bugfix
date: 2020-12-11
title: idea maven无法下载依赖
# 固定标题
vssue-title: idea maven无法下载依赖
---
## 问题
在创建一个空白的`maven`工程后,添加依赖后,无法下载`jar`包

在网上搜索到配置阿里云镜像的代码,基本都是如下配置
```xml{5}
<mirror>
  <id>nexus-aliyun</id>
  <mirrorOf>central</mirrorOf>
  <name>Nexus aliyun</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```
以上并不能解决问题,同时在`idea`配置更新仓库显示`error`.
![error](~@img/java/2020-12-11-maven01.png)
在查阅资料后,发现**阿里不再支持http下载**,只支持`https`,因此需要把镜像配置修改如下
```xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```
顺带给`idea`添加配置
```
-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true
```
![maven options](~@img/java/2020-12-11-maven02.png)
自此,在`idea`中可正常下载依赖.