---
draft: false
category: typescript
tags:
  - BugFix
date: 2019-10-13
title: typescript jsx 7026
# 固定标题
vssue-title: typescript jsx 7026
---
# 使用tsx时报错
在ts项目中使用tsx时报错

![ts 7026 err](~@img/typescript/7026.png)

TS7026: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.

在使用typescript的时候，在vue或react、node中报以上错误，是JSX 元素隐式具有类型 "any"，因为不存在全局类型 "JSX.Element"。

## 解决方法
1. 不使用严格的类型检查，即在 tsconfig.json 中设置 "strict": false
2. 在 tsconfig.json中设置 "noImplicitThis": false
```{1}
"noImplicitAny": false, // 是否在表达式和声明上有隐含的any类型时报错
```