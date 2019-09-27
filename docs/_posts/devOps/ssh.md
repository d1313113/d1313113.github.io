---
# 草稿
draft: false
category: devOps
tags:
  - Introduction
date: 2019-09-27
title: 配置git SSH
# 固定标题
vssue-title: 配置git SSH
---
# 使用ssh操作git仓库

## 为什么使用ssh方式
git仓库一般提供两种方式
1. ssh
2. https

而https形式,没有设置全局store账户密码时,需要多次输入账号密码,使用ssh方式,减少了记忆账号密码,以及输入过程,会更便捷.

## 生成/添加SSH公钥
```bash
ssh-keygen -t rsa -C "xxxx@xxx.com"
# 生成 一堆 rsa 公钥/私钥
```
按照提示完成三个回车,即可生成`ssh key`.通过查看`~/.ssh/id_rsa.pub`文件内容,获取到`public key`

```bash
cat ~/.ssh/id_ras.pub
# ssh-ras xxxx
```
![generate ssh](~@img/devOps/generate_rsa.png)

## 添加ssh公钥到git中
在`settings`中将获取到的公钥贴站上即可
```bash
ssh -T git@github.com
```
首次使用需要确认并添加主机到本机SSH可信列表,若返回

`Hi xxx, You've successfully authenticated ...`

内容则证明添加完成

![test ssh](~@img/devOps/test_ssh1.png)

添加成功后就可以使用SSH协议对仓库进行操作了

## git配置多个SSH-key
### 背景
当拥有多个git账号时候,比如
- 公司内部开发工作,gitlab
- 自己的一些开发活动,github

### 解决办法
生成多个ssh-key

1. 生成一个公司使用的ssh-key
```bash
ssh-keygen -t rsa -C 'xxxx@company.com' -f ~/.ssh/gitlab_id_rsa
```

2. 生成一个github专用的ssh-key
```bash
ssh-keygen -t ras -C 'xxxx@github.com' -f ~/.ssh/github_id_rsa
```

3. 在`~/.ssh`目录下新建一个config配置文件,添加如下内容(其中Host与HostName填写git服务器的域名,Identity指定私钥的路径)
```conf
# company
Host xxx.com
HostName xxx.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

4. 使用ssh命令分别进行测试
```bash
ssh -T git@xxx.com
ssh -T git@github.com
```

如果成功的话,返回如下内容.
![test ssh](~@img/devOps/test_ssh2.png)

到此,使用ssh配置git就完成了,在操作git仓库时,需要将remote地址设置成使用ssh协议.可节省去输入账号密码的步骤.