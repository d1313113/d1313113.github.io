# 安装MongDB
[安装步骤参考地址](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

```
brew update
# 貌似不存在这个包,要用cask安装
brew install mongodb
brew cask install mongodb

# 太慢了,手动下载压缩包安装
# 创建mongdb数据默认存储文件夹
mkdir -p /data/db
# 修改数据仓库文件夹权限
sudo chown -R `id -un` /data/db
# 开启守护进程,再次输入打开实例
mongod
# 关闭实例
quit()
# 关闭守护进程
ctrl-c
```

## 手动安装
1. 在Users/cumelmell下新建MongoDB文件夹，把从官网上下的文件，型如：mongodb-osx-x86_64-2.6.1这个解压到MongoDB文件夹

2. 在MongoDB目录下新建data文件夹

3. 在data下新建db文件夹（存放数据）

3. sudo chown －R  /Users/cumelmell /MongoDB/data  设置权限

5. 进入到bin目录，使用./mongod --dbpath /Users/cumelmell/MongoDB/data/db 设置db文件夹的路径

6. 如果看到waiting for connections on port 27017

7. 可以打开浏览器输入：localhost:27017,如果看到It looks like you are trying to access MongoDB over HTTP on the native driver port 说明连接成功了。

8. 点击终端 Commond+N 打开一个新的终端 cd 到bin目录 ./mongo 便可连接到数据库进行操作

## 配置环境变量
在基于unix/linux的操作系统下进行程序开发，使用环境变量将会方便。通过设置环境变量将可以在任意目录通过输入程序名来执行设定目录下的程序。不需要通过cd将工作目录改变到程序目录再执行程序。而且免去了输入"./"的麻烦。

具体步骤如下：

1. 打开 应用程序 -> 实用工具 -> 终端；

2. 在终端中定位到自己用户的主目录，输入： cd ~ ；

3. 创建一个空文件，输入：touch .bash_profile ；

4. 编辑这个文件，输入：open .bash_profile ；

5. 在这个文件中输入：export PATH=${PATH}:<文件目录> ；（将"<文件目录>"替换成自己想要的目录）

例如：export PATH=${PATH}:/Users/cumelmell/MongoDB/mongodb-osx-x86_64-2.6.1/bin;

6. 如果需要添加其他的环境变量例如JAVA_HOME，可以输入：export JAVA_HOME=/Library/Java/Home ；

7. source .bash_profile重启终端，测试,这个时候就可以在用户主目录使用：mongod --dbpath /Users/cumelmell/MongoDB/data/db 来启动数据库了，点击终端Commond+N打开一个新的终端，使用mongo命令来连接数据库，对数据库进行操作,比如：show dbs 显示所有的集合

## 添加配置文件
在MongDB下新增log文件夹及etc文件夹,在etc中新增mongo.conf
```
#数据库路径
dbpath=/Users/cumelmell/MongoDB/data/db

#日志输出文件路径
logpath=/Users/cumelmell/MongoDB/log/mongo.log

#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true

#启用日志文件，默认启用
journal=true

#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=false

#是否后台启动，有这个参数，就可以实现后台运行
fork=true

#端口号 默认为27017
port=27017

#指定存储引擎（默认不需要指定）
#storageEngine=mmapv1

#开启网页日志监控，有这个参数就可以在浏览器上用28017查看监控界面
httpinterface=true
```

## 开启/关闭进程
```
# -f 表示--config
mongod -f /Users/cumelmell/MongoDB/etc/mongo.conf
```
```
ps -ef|grep mongo
kill 进程
```