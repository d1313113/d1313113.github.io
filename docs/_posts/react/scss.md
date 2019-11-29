---
draft: false
category: react
tags:
  - react
date: 2019-11-29
title: react 使用 dart-sass
# 固定标题
vssue-title: react 使用 dart-sas
---
# 问题来由
由于一些特殊原因,使用` node-sass `时候,通过` npm `亦或是` yarn `也好,往往无法安装,想使用` dart-sass `来代替` node-sass `.

## 使用 sass
在` react `中使用` sass `,直接将` css `后缀改成` sass `使用,运行项目,发现报错
![sass_error](~@img/react/2019-11-29-react-sass01.png)
提示缺失了` node-sass `

## 安装 dart-sass
```bash
npm i dart-sass
# or
yarn dart-sass
```
重新跑项目发现依旧报错,一番查找,发现` sass-loader `在` 7.2.0 `后已经可以直接使用` dart-sass `作为解析器,项目中的` sass-loader `也是` 7.2.0 `,但没法编译

## fix 问题
在` github `中一番查找后,发现需要` hack `后才可以使用` dart-sass `来编译.

[相关的issue](https://github.com/facebook/create-react-app/issues/5282)

解决方法:

1. 需要在` package.json `中加入如下字段
package.json
```json
"resolutions": {
  "node-sass": "npm:sass"
}
```

2. 安装 ` node-sass `
```bash
npm install node-sass@npm:sass
# or
yarn node-sass@npm:sass
```

经历上述两步后,重新跑项目发现问题解决,暂时来看应该是` sass-loader `的问题,待稍后官方处理好后就不需要` hack `了.