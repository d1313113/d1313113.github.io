---
# 草稿
draft: false
category: devOps
tags:
  - BugFix
date: 2019-09-27
title: 记一次更新nodejs
# 固定标题
vssue-title: 记一次更新nodejs
---
# 记录一次更新nodejs遇到的问题

## 背景
之前电脑中的nodejs是通过在nodejs官网下载安装包安装的,在后续想更新时使用brew更新,导致双版本存在.

希望将原有版本去除,同时处理好环境变量.

## 安装nodejs
因已经存在了nodejs,又使用了brew更新
```bash
brew upgrade node
```

安装完毕,查看版本时
```bash
node -v
```
10.x.x 发现依旧是旧版的,不是新版12.x.x

### 处理问题
1. 首先先删除当前node
```bash
brew uninstall node
```

2. 查看node和npm是否还存在,发现依旧存在
```bash
where node
# node not found
where npm
# 连续输出两条
# /usr/local/bin/npm
# /usr/local/bin/npm
```

3. 强制删除npm后,重装node
```bash
where npm
sudo rm -rf /usr/local/bin/npm
brew install node
```
此时安装node报错,提示`brew link`失败
![error](~@img/devOps/nodejs_error.png)
4. 验证node
```bash
node -v
```
`command not found: node`,此时发现node并没有写入环境变量中,但已安装成功

5. 处理残留ls软连接
```bash
brew link --overwrite --dry-run node
brew unintsll node
brew install node
```

6. 验证
```bash
node -v
# v12.12.0
npm -v
# 6.11.3
```
能正确的输出版本号,此次问题解决.