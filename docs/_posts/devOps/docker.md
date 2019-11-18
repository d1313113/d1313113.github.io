---
# 草稿
draft: false
category: Docker
tags:
  - Introduction
date: 2019-11-18
title: docker 小实践
# 固定标题
vssue-title: docker 小实践
---
# docker 的一点小实践

## 安装
` docker `的安装并不算繁琐,如果是本地安装的话可以选择使用` gui `界面来安装,至于服务器安装,在基于各个发行版上官网也有详细的介绍,就不做展开.

安装成功后跑起` hello world `
![hello-world](~@img/devOps/2019-11-18-docker01.png)

## 安装镜像
使用` docker pull packageName `即可从` docker hub `中拉取` docker `镜像到本地
```bash
docker pull nginx
```

## 开启 nginx 服务

```bash
# -d 后台运行
# --name my-nginx 给实例起名
# -p 指定端口号,第一个是宿主机端口号,第二个是实例端口号
# nginx 需要运行的镜像
docker run -d --name my-nginx -p 8888:80 nginx
```
根据端口号访问,能成功访问到.
![nginx](~@img/devOps/2019-11-18-docker02.png)

### 配置 nginx 配置
这一小节主要讲配置` nginx `,在使用` docker `时,我们希望使用宿主机提供的` nginx `配置,而不是使用容器中的配置.因此会引出如下3个问题.

- 日志文件会放置到哪里
- 修改的配置文件存储在哪里
- 项目文件放置在哪里

一般的解决方案,就是把文件放在宿主机中,然后挂载到容器中,修改配置文件只需要执行
```bash
docker exec -it contain_name bash
```
来进入到容器中,随后执行
```bash
nginx -s reload
```
重新加载一次文件即可.

> 通过` docker hub `拉取的` nginx `镜像,相关的配置文件在容器中的位置分别在:
> 日志文件: /var/log/nginx
> 默认配置文件: /etc/nginx/conf.d/default.conf
> 配置文件位置: /etc/nginx/
> 项目位置: /usr/share/nginx/html

#### 1.日志文件
` nginx `的日志文件处理相对比较简单,主要就是` access, error `日志,只需要挂载宿主目录到容器中的` nginx `日志所在文件即可.

#### 2. 配置文件
配置文件相对来说会麻烦一点,一般来说` nginx `只需要加载` nginx.conf `就可以了,在` docker `中,首先加载的是` nginx.conf `,然后在` nginx.conf `中有这么一行
```
include /etc/nginx/conf.d/*.conf;
```
就是加载` conf.d `目录下面的配置文件,所以对于配置文件只需要挂载到` conf.d `中即可覆盖.

#### 3.项目文件的问题
类似日志的操作,把宿主机目录挂载到容器即可.

#### 运行容器
1. 在宿主机创建好需要的文件夹
```bash
mkdir /cumelmell/nginx/log -p
mkdir /cumelmell/nginx/conf -p
mkdir /cumelmell/nginx/html -p
```
2. 运行容器

1. 挂载日志目录
2. 挂载配置目录
3. 直接将配置文件挂载出来,不推荐
4. 挂载项目目录
```bash
docker run --name my-nginx -d -p 8888:80\
  -v /cumelmell/nginx/log:/var/log/nginx\
  -v /cumelmell/nginx/conf:/etc/nginx/conf.d\
  -v /cumelmell/nginx/nginx.conf:/etc/nginx/nginx/conf\
  -v /cumelmell/nginx/html:/usr/share/nginx/html
```
![nginx-config](~@img/devOps/2019-11-18-docker03.png)


#### 其他:
1. 在修改了宿主机的配置后:
可以运行下面两句命令其中一种可以重新加载配置
```bash
# 1. 直接刷新配置
docker exec -it my-nginx nginx -s reload
# 2. 进去容器内部在执行命令
docker exec -it my-nginx bash
```

查看容器信息
```bash
docker inspect contain_name
```

查看容器挂载情况
```bash
docker inspect contain_name | grep Mounts -A 20
```

重新运行已有容器
```bash
docker start contain_hash/contain_name
```

停止容器
```bash
docker stop contain_hash/contain_name

docker kill contain_hash/contain_name
```

删除容器
```bash
docker rm contain_hash/contain_name
```