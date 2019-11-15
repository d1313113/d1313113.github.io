---
draft: false
category: Could
tags:
  - Introduction
date: 2019-11-15
title: zsh
# 固定标题
vssue-title: 配置zsh终端
---
# 配置zsh
在终端中,一般默认的是使用` bash `,但有` zsh `这个终端,习惯使用了,现在就将服务器的修改为` zsh `.

## 安装 oh-my-zsh
服务器的` Linux `发行版是` centos `,` ssh `连接上服务器后.开始下载安装

```bash
# 服务器上连 git 都没有安装,先安装git
yum -y install git

# 下载 oh-my-zsh ,下面两种方式选择一种即可
# 通过 curl 方式
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
# 通过 wget 方式
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
![zsh_download](~@img/devOps/2019-11-15-zsh01.png)

## 修改 oh-my-zsh 主题
先查看下有什么主题,蓝色的就是当前正在使用的主题

```bash
ls ~/.oh-my-zsh/themes
```
![zsh_theme](~@img/devOps/2019-11-15-zsh02.png)

```bash
vim ~/.zshrc
# 找到 ZSH_THEME,改成自己喜欢的主题即可
ZSH_THEME="robbyrussell"
```

## 配置自动补全插件 incr
这个` incr `是一个自动补全插件,非常强大,再也不用担心敲错内容,只需要` tab `一下或者等待自动补全

```bash
# 通过wget安装
wget http://mimosa-pudica.net/src/incr-0.2.zsh
# 创建好文件夹
mkdir ~/.oh-my-zsh/plugins/inrc -p
# 把下载的插件移动到改文件及下
mv incr-0.2.zsh ~/.on-my-zsh/plugins/inrc
# 配置 .zshrc 文件
vim ~/.zshrc
```
在末尾加上
```bash
source ~/.oh-my-zsh/plugins/incr/incr*.zsh
```
更新配置
```bash
$ source ~/.zshrc
```

## 解决与 vim 提示可能会冲突的方法

```bash
vim t
_arguments:451: _vim_files: function definition file not found
```
解决方法: 将` ~/.zcompdump* `删除即可

```bash
rm -rf ~/.zcompdump*
exec zsh
```

## 安装 autojump
` autojump `插件可以记录访问过的目录,后续只需要通过关键字` j `加上目录开头即可有6个匹配项,可以直接在任意路径之间跳转

```bash{2,5-7}
# mac 可以通过 brew 安装
brew install autojump

# 通过源码方式安装
git clone git://github.com/joelthelion/autojump.git
cd autojump
./install.py
```

在` .zshrc `文件后面添加配置
```bash
# 使用brew安装的

[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
source $ZSH/oh-my-zsh.sh

# 使用git安装的

[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh
```
![autojump1](~@img/devOps/2019-11-15-zsh03.png)
在插件列表加上autojump
![autojump2](~@img/devOps/2019-11-15-zsh04.png)
![autojump3](~@img/devOps/2019-11-15-zsh05.png)

```bash
# 更新资源
source ~/.zshrc
```
` autojump `是根据跳转过的路径来提示的,如果出现错误路径可以使用` autojump --purge `清除

## 配置常用 alias
```bash
# alias base
alias free='top -l 1 | head -n 10 | grep PhysMem'
alias ls='ls -hG'
alias ll='ls -l'
alias la='ls -a'
alias l='ls -CF'
alias cls='clear'
alias gs='git status'
alias gc='git commit'
alias gqa='git add .'

# alias docker
alias dkst="docker stats"
alias dkps="docker ps"
alias dkpsa="docker ps -a"
alias dkimgs="docker images"
alias dkcpup="docker-compose up -d"
alias dkcpdown="docker-compose down"
alias dkcpstart="docker-compose start"
alias dkcpstop="docker-compose stop"
```