---
# 草稿
draft: false
category: Could
tags:
  - Introduction
date: 2019-11-15
title: ssh 服务器
# 固定标题
vssue-title: 配置ssh登录服务器
---
# 如何配置免密码登录服务器
希望在免输入ip以及密码情况下登录服务器,采用配置` public-key `方式登录...

## 通过账号密码登录服务器
在终端中通过以下命令登录服务器
```bash{2}
# 用户名@远端服务器ip/host -p 端口号
ssh root@170.xxx.xxx.xxx -p xx

# 随后提示输入密码,通过密码登录到服务器
```
这里已经配置过` ~/.ssh/config `文件了,因此直接登录的` tx_chould `.
![ssh_login1](~@img/devOps/2019-11-15-chould01.png)
原始直接登录的话是长这个样子.
![ssh_login2](~@img/devOps/2019-11-15-chould02.png)

## 通过 public-key 方式登录
一般来说服务器的` ip `或者是` host `相对来说都比较难记忆,所以可以通过配置` ssh config `来简化操作.

### 生成 public-key

```bash{2}
# 生成为服务器准备的key "comment"
ssh-keygen -t rsa -b 4096 -C "tx_could" -f ~/.ssh/tx_chould_id_rsa
```

### 配置 ssh config

```bash
cd ~/.ssh

vim config
```

在` ~/.ssh/config `文件中加入` ssh `的配置文件,早前配置过` github `及` gitee `的` public-key `配置了,在后面新增即可.

```bash{13-23}
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa

# 新增服务器配置
# tx could, 别名
Host tx_chould
# 服务器地址,完整的域名或者ip地址
HostName 111.111.111.111
# 登录服务器的用户名
User root
# 优先认证ssh类型
PreferredAuthentications publickey
# rsa私钥配置文件路径
IdentityFile ~/.ssh/tx_chould_id_rsa
```

此时就可以达到最上面通过` ssh tx_chould `方式来登录,当现在还未将rsa文件放置服务器中.因此还未能直接免密登录

### 放置公钥到服务器目录中

此时在本地执行下面命令,将公钥同步到服务器中
```bash{1}
~ ssh-copy-id -i .ssh/tx_chould_id_rsa.pub tx_chould
```
![ssh_login2](~@img/devOps/2019-11-15-chould03.png)

到此就大功告成,可以直接免密登录服务器了

## 关闭密码登录
在为了安全的情况下,可以关闭服务器的密码登录功能,只允许通过` public-key `方式登录

```bash
vi /etc/ssh/sshd_config

# 将PasswordAuthentication设置成no，
# 然后重启service sshd restart

# 禁用密码登录
Host *
  PasswordAuthentication no
如果你需要用密码登录，这一步也可以不设置（ssh root@111.111.111.111）
```