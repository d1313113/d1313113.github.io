---
draft: false
category: Others
tags:
  - Others
date: 2020-03-29
title: 斐讯n1
# 固定标题
vssue-title: 斐讯n1刷入linux
---
# 斐讯n1刷入 Ubuntu

由于 mac 上没有 adb,因此使用 win 来完成此项工作,刷机工作就忽略

## Ubuntu 换源

```bash
sudo vim /etc/apt/sources.list
```

```list
deb http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
#deb-src http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse

deb http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse
#deb-src http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse

deb http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
#deb-src http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse

deb http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
#deb-src http://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
```

## 安装 docker
[参考链接1](https://vuepress.mirror.docker-practice.com/install/ubuntu.html#%E4%BD%BF%E7%94%A8-apt-%E5%AE%89%E8%A3%85)
[参考链接2](https://www.right.com.cn/forum/thread-430903-1-1.html)

### docker 换源
```bash
mkdir -p /etc/docker

tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "registry.docker-cn.com",
    "docker.mirrors.ustc.edu.cn"
  ]
}
EOF

systemctl daemon-reload

systemctl restart docker
```

### 无法使用 systemctl 启动 docker
在使用` systemctl `启动时,不能正确启动,提示了一下报错信息
```bash
# 执行启动
sudo systemctl start docker
## 提示一下报错信息
Job for docker.service failed because the control process exited with error code.
See "systemctl status docker.service" and "journalctl -xe" for details.
```

在查看报错信息后,确定应该是` daemon.json `配置有误导致的,更换配置为

```json
{
  "debug": true,
  "experimental": false,
  "registry-mirrors": [
    "http://registry.docker-cn.com",
    "http://docker.mirrors.ustc.edu.cn"
  ],
  "insecure-registries": [
    "registry.docker-cn.com",
    "docker.mirrors.ustc.edu.cn"
  ]
}
```

### 安装 docker 图形化管理 Portainer
```bash
docker volume create portainer_data

docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer:linux-arm64
```
安装成功后在` ip:port `即可访问到` Portainer `