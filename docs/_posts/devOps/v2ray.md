---
# 草稿
draft: false
category: Could, VPS
tags:
  - Introduction
date: 2020-05-13
title: 谷歌云配置 v2ray
# 固定标题
vssue-title: 谷歌云配置 v2ray
---
# 谷歌云配置 v2ray
由于近期又得知谷歌云可以申请,跟着教程申请了一个,并配置` v2ray `...

可以使用1年

## 准备工作
>  双币卡或者Visa信用卡,我使用的是招行master卡
>  ` Google `账号
>  可以访问` Google `的梯子

## 申请 Google Could
1. 进入` Google Cloud `页面

    [谷歌云申请](https://cloud.google.com/free/)

> 根据参考资料中申请步骤申请好云

## 设置防火墙
- VPC网络 -> 防火墙规则 -> 创建防火墙

    [配置防火墙](https://console.cloud.google.com/networking/firewalls/list)

    ![network setting1](~@img/devOps/google-could/2020-05-13-v2ray01.png)
    ![network setting2](~@img/devOps/google-could/2020-05-13-v2ray02.png)

## 设置静态IP
设置静态` IP `,防止每次重启实例后` ip `变动
- VPC网络 -> 外部IP -> 保留静态地址

    [配置静态IP](https://console.cloud.google.com/networking/addresses/list)

    需要注意几点:
    - 区域: 一般设置亚太区域,需要选择好地区,不然速度会很慢
    ![ip setting](~@img/devOps/google-could/2020-05-13-v2ray03.png)

    - 在设置好静态IP后记得先` ping `一下延时,延时在` 50ms `以内比较合适,如果延时太大,可以重新新建,直到速度能接受,我的延时是` 15ms `.

## 创建 VM 实例
- Computer Engine -> 虚拟机实例 -> 创建实例

    [创建实例](https://console.cloud.google.com/compute/instances)

    需要注意几点:
    - 机器: 实例的费用不要超过` $25/月 `,` $300 `算下来每个月刚好` $25 `

      ![vm](~@img/devOps/google-could/2020-05-13-v2ray04.png)
    - 地区: 选择刚上面配置静态IP的区域,对应好
    - 网络: 管理、磁盘、网络、SSH 密钥 -> 网络 -> 外部IP
      - 选择之前设置好的` 静态IP `
      ![ip setting2](~@img/devOps/google-could/2020-05-13-v2ray05.png)

## ssh 到 VM 实例
- Computer Engine -> 虚拟机实例 -> SSH

  链接到` VM `实例,配置` ssh `登录
  ![ssh vm](~@img/devOps/google-could/2020-05-13-v2ray06.png)

  在出来的命令行中,以此执行如下指令
  ```sh
  # 切换到 root 用户
  sudo -i

  # 更改 root 用户的密码
  passwd

  # 允许 ssh 登录
  sed -i 's/PermitRootLogin no/PermitRootLogin yes/g' /etc/ssh/sshd_config

  sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config

  # 重启 ssh 服务
  service ssh restart
  ```

  执行完上述命令后,就可以使用终端工具` ssh `到` VM `中

  如果无法连接,可以尝试手动修改` ssh `配置,修改` /etc/ssh/sshd_config `,将下述两个配置修改为` yes `后重启` ssh `服务.
  ```sh
  PermitRootLogin yes
  PasswordAuthentication yes
  ```

## 安装 v2ray
1. ` ssh `到` vm `中
  ```sh
  ssh root@ip
  ```

2. 切换到` root `账号
  ```sh
  sudo -i
  ```

3. 安装` v2ray `
  ```sh
  sh <(curl -L -s https://install.direct/go.sh)
  ```
  ![install v2ray](~@img/devOps/google-could/2020-05-13-v2ray07.png)
  执行成功后，会输出` V2Ray v4.23.1 is installed. `等字样。

4. 修改` v2ray `配置文件
  ` v2ray `的配置文件在` /etc/v2ray/config.json `中
  ```sh
  sudo vim /etc/v2ray/config.json
  ```

  删除内容,粘贴上下面的配置
  ```json
  {
    "log": {
      "access": "/var/log/v2ray/access.log",
      "error": "/var/log/v2ray/error.log",
      "loglevel": "warning"
    },
    "inbound": {
      "port": 10086,
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "392029fa-a9e0-42e3-93cb-97a9281495ed",
            "level": 1,
            "alterId": 100
          }
        ]
      },
      "streamSettings": {
        "network": "tcp"
      },
      "detour": {
        "to": "vmess-detour-118345"
      }
    },
    "outbound": {
      "protocol": "freedom",
      "settings": {}
    },
    "inboundDetour": [
      {
        "protocol": "vmess",
        "port": "10000-10010",
        "tag": "vmess-detour-118345",
        "settings": {},
        "allocate": {
          "strategy": "random",
          "concurrency": 5,
          "refresh": 5
        },
        "streamSettings": {
          "network": "kcp"
        }
      }
    ],
    "outboundDetour": [
      {
        "protocol": "blackhole",
        "settings": {},
        "tag": "blocked"
      }
    ],
    "routing": {
      "strategy": "rules",
      "settings": {
        "rules": [
          {
            "type": "field",
            "ip": [
              "0.0.0.0/8",
              "10.0.0.0/8",
              "100.64.0.0/10",
              "127.0.0.0/8",
              "169.254.0.0/16",
              "172.16.0.0/12",
              "192.0.0.0/24",
              "192.0.2.0/24",
              "192.168.0.0/16",
              "198.18.0.0/15",
              "198.51.100.0/24",
              "203.0.113.0/24",
              "::1/128",
              "fc00::/7",
              "fe80::/10"
            ],
            "outboundTag": "blocked"
          }
        ]
      }
    }
  }
  ```
  上面配置中,` port: 10086 `代表` v2ray `对外开放的端口号,可以修改,随后保存文件.

5. 配置` BBR `加速并重启 VM
  ```sh
  wget https://raw.githubusercontent.com/flyzy2005/ss-fly/master/ss-fly.sh && chmod +x ss-fly.sh && ./ss-fly.sh -bbr
  reboot
  ```

6. 启动` v2ray `,如果修改了配置文件,一定需要重启` v2ray `
  ```sh
  # 查看 v2ray 进程状态
  systemctl status v2ray

  # 启动 v2ray
  systemctl start v2ray

  # 重启 v2ray
  systemctl restart v2ray

  # 关闭 v2ray
  systemctl stop v2ray
  ```

7. 查看` BBR `是否生效
  ```sh
  sysctl net.ipv4.tcp_available_congestion_control
  lsmod | grep bbr
  ```
  出现下述的文字就是成功了
  ![BBR](~@img/devOps/google-could/2020-05-13-v2ray08.png)


## 参考资料
1. [免费|申请谷歌云服务器](https://zhuanlan.zhihu.com/p/60993816)