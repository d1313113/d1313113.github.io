---
draft: false
category: java
tags:
  - Bugfix
  - JDK
date: 2020-12-12
title: 微服务 registry 无法启动
# 固定标题
vssue-title: 微服务 registry 无法启动
---
在启动微服务中的`registry`注册中心时,无法启动,抛出以下异常
![error](~@img/java/jdk/2020-12-12-JAXB_API01.png)

## 解决方法
经过查阅资料,使用的`jdk`版本是14,而因为`JAXB-API`是`java ee`的一部分，在`jdk14`中没有在默认的类路径中；
因此在可以在`pom.xml`文件中引入以下`jar`包
```xml
<dependency>
  <groupId>javax.xml.bind</groupId>
  <artifactId>jaxb-api</artifactId>
  <version>2.3.0</version>
</dependency>
<dependency>
  <groupId>com.sun.xml.bind</groupId>
  <artifactId>jaxb-impl</artifactId>
  <version>2.3.0</version>
</dependency>
<dependency>
  <groupId>org.glassfish.jaxb</groupId>
  <artifactId>jaxb-runtime</artifactId>
  <version>2.3.0</version>
</dependency>
<dependency>
  <groupId>javax.activation</groupId>
  <artifactId>activation</artifactId>
  <version>1.1.1</version>
</dependency>
```
在重新下载依赖后,运行成功...