---
draft: false
category: Docker
tags:
  - devOps
date: 2020-04-05
title: docker Portainer
# 固定标题
vssue-title: docker Portainer
---
# Portainer -- Docker 可视化管理工具的安装配置及使用

## Portainer 介绍
` Portainer `是` Docker `的图形化管理工具,具有以下的功能
- 提供状态显示面板
- 应用模板快速部署
- 容器镜像网络数据卷的基本操作(包括上传下载镜像,创建镜像等操作)
- 事件日志显示
- 容器控制台操作
- ` Swarm `集群和服务等集中管理和操作
- 登录用户管理和控制功能
等等,功能十分的齐全

[portainer安装文档](https://www.portainer.io/installation/)

## 下载镜像
```bash
# 查询当前 portainer 有什么镜像
docker search portainer
```
![portainer-show](~@img/devOps/2020-04-05-docker-portainer01.png)
下载上图第一个镜像` portainer/portainer `


```bash
# 拉取镜像
docker pull portainer/portainer
```
等出现下图这样,就是拉取镜像成功了.
![pull-image](~@img/devOps/2020-04-05-docker-portainer02.png)

查看镜像
```bash
docker images
```
![docker-images](~@img/devOps/2020-04-05-docker-portainer03.png)

### 运行单机版
如果只需要一个` docker `宿主机,则可使用单机版来运行,` Portainer `单机版运行十分的简单,执行一条语句即可启动容器,来管理该机器上的` docker `镜像,容器等数据.

```bash
docker run -d -p 9000:9000 \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --name prtainer-test \
    docker.io/portainer/portainer
```
使用该语句,管理宿主机`9000`端口与容器的`9000`端口,并使用` --name prtainer-test `把容器起名为` prtainer-test `,在执行完改语句后,可以使用` ip:9000 `来访问到` Portainer `实例.
![view-portainer](~@img/devOps/2020-04-05-docker-portainer04.png)

首次登陆需要注册用户,给` admin `用户设置密码.
![register](~@img/devOps/2020-04-05-docker-portainer05.png)

选择` local `管理本机` docker `即可.
![local](~@img/devOps/2020-04-05-docker-portainer06.png)

### 查看容器
![container-detail](~@img/devOps/2020-04-05-docker-portainer07.png)

点击容器的` name `即可看到容器具体的信息

也可以创建镜像
![create-image](~@img/devOps/2020-04-05-docker-portainer08.png)

### 功能介绍
镜像列表(在镜像列表可以直接` pull `一个镜像，可以从远程` pull `，也可以从私有库中` pull `。从私有库中` pull `，需要将私有库的地址提前进行配置)
![images-list](~@img/devOps/2020-04-05-docker-portainer09.png)

点击` 镜像ID `，即可查看镜像详情信息，在详情信息页面，除了镜像的一些信息外，还可以对该镜像进行打标签` tag `操作，然后将镜像` push `到远程仓库或者私有仓库中。
![tag](~@img/devOps/2020-04-05-docker-portainer10.png)

仓库管理页面(该界面可以查看配置的镜像仓库列表，同时可以添加仓库，添加成功之后，即可在` image `镜像页面进行` pull `、` push `操作)
![registries](~@img/devOps/2020-04-05-docker-portainer11.png)

#### 添加镜像仓库
![registries-url](~@img/devOps/2020-04-05-docker-portainer12.png)
