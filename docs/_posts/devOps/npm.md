---
draft: false
category: devOps
tags:
  - BugFix
date: 2019-10-09
title: npm publish 失败
# 固定标题
vssue-title: npm publish 是吧
---
## 使用npm publish失败
今天使用npm发布包失败,并提示
```bash
npm ERR! code E403
npm ERR! 403 Forbidden - PUT https://registry.npm.taobao.org/@xxxxx - [no_perms] Private mode enable, only admin can publish this module
```

经过查询,发现是使用了淘宝源,没有发布到淘宝源的权限

### 解决方法
```bash
# 全局安装nrm工具
npm i nrm -g
# 列出能使用的包源
nrm ls
# 使用use切换源
nrm use npm
```
在重新发布后,再次切换回淘宝源即可