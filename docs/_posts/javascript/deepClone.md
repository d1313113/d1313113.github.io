---
# 草稿
draft: false
category: JavaScript
tags:
  - Introduction
date: 2019-11-12
title: deepClone
# 固定标题
vssue-title: js技巧 -- deepClone
---
# JS 绕不开的深拷贝

## 前言
在` JavaScript `中深拷贝是一个绕不过的话题,在实际开发中,如果没留心的话,也很容易踩到坑中,下面会由浅入深,一步一步的实现深拷贝.

- 什么是深拷贝
- 什么样的深拷贝才算合格
- 什么样的深拷贝才算优秀

## 深拷贝和浅拷贝的定义
浅拷贝:
![shadowClone](~@img/javascript/2019-11-12-deepClone00.png)

> 创建一个新的对象,这个对象有着对原始对象的一份精确拷贝.
>
> 如果拷贝的属性属于基本类型的话,拷贝的就是这个基本类型的值,例如字符串,数字等.
>
> 如果拷贝的是属性是引用类型,则拷贝的是内存地址,当其中任意一个修改属性,**会相互影响**.例如对象,数组等.

深拷贝:
![deepClone](~@img/javascript/2019-11-12-deepClone01.png)

> 将一个对象完整的从内存中拷贝一份,并在堆内存中开辟一个新的区域来存放,修改新/旧对象均不会**相互影响**.

## 最易版

在` JavaScript `中,不借助第三方库情况下,最简单及最常用的是如下` api `
```js{7}
let obj1 = {
  a: {
    b: 123
  }
};

let obj2 = JSON.parse(JSON.stringify(obj1));
```

借助这个` api `就可以应对大部分使用深拷贝的场景了,不过也存在一些问题

### 存在的问题

1. 无法处理对象循环引用
2. 无法序列化正则,Error等,序列化结果只能得到一个空对象
3. 函数,` undefined `会丢失
4. ` NaN, Infinity, -Infinity `序列化结果会变成` null `
5. 序列化` Date `对象得到的是字符串形式的日期格式,而非时间对象
6. 只能序列化自身可枚举的自有属性,如果有属性是通过构造函数生成的,在序列化后会丢失属性的` construtor `

## 基础版本
稍作思考,一个基础版本的深拷贝应该支持
- 多层不确定嵌套深度的对象拷贝
- 针对基础类型直接拷贝
- 如果是引用类型,创建一个新的对象,遍历需要拷贝的对象,将属性依次**深拷贝**到新对象上

```js{5-6,10-11}
function deepClone (target) {
  if (typeof target === 'object') {
    const cloneTarge = {};
    for (const key in target) {
      // 递归调用deepClone函数处理深层嵌套对象
      cloneTarge[key] = deepClone(target[key]);
    }
    return cloneTarge;
  } else {
    // 处理基础类型直接返回值
    return target;
  }
}
```
尝试对如下的代码进行测试
```js
const target = {
  key1: 1,
  key2: undefined,
  key3: 'abc',
  key4: {
    child1: 'child1',
    child2: {
      child21: 'child21'
    }
  }
};
```
测试结果:
![test1](~@img/javascript/2019-11-12-deepClone02.png)

这是一个最基础的深拷贝的版本,不过还有很多问题没有处理,接下来处理数组

## 考虑数组版本

在基础版本中,只处理的普通的` Object `,接下来把代码稍微改动一下,就可以处理数组的情况.

```js{3}
function deepClone (target) {
  if (typeof target === 'object') {
    const cloneTarge = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarge[key] = deepClone(target[key]);
    }
    return cloneTarge;
  } else {
    return target;
  }
}
```
依旧跑一下测试代码
```js{10}
const target = {
  key1: 1,
  key2: undefined,
  key3: 'abc',
  key4: {
    child1: 'child1',
    child2: {
      child21: 'child21'
    },
    child3: [1, 2, 3]
  }
};
```
测试结果:
![test2](~@img/javascript/2019-11-12-deepClone03.png)

## 循环引用

循环引用是对象的属性引用自身属性情况下出现的,举个例子.
```js{13-14}
const target = {
  key1: 1,
  key2: undefined,
  key3: 'abc',
  key4: {
    child1: 'child1',
    child2: {
      child21: 'child21'
    },
    child3: [1, 2, 3]
  }
};
// 对象引用自身属性
target.key5 = target;
```
当前写的深拷贝处理不了循环引用,导致递归爆栈了
![test3](~@img/javascript/2019-11-12-deepClone04.png)
为了解决循环引用的问题,可以使用一个` cache `来存储当前对象和拷贝对象的对应关系,拷贝时先去` cache `中查找,命中的话就直接返回` cache `内容,未命中才去创建.

这个` cache `是` key: value `的形式,可以选择` ES6 `中的` Map `数据结构

处理的步骤如下:

![test3](~@img/javascript/2019-11-12-deepClone05.png)

修改代码后:
```js{1,4-9,11}
function deepClone (target, cache = new Map()) {
  if (typeof target === 'object') {
    const cloneTarge = Array.isArray(target) ? [] : {};
    // 是否命中cache
    if (cache.get(target)) {
      return cache.get(target);
    }
    // 未命中cache,将当前数据缓存起来
    cache.set(target, cloneTarge);
    for (const key in target) {
      cloneTarge[key] = deepClone(target[key], cache);
    }
    return cloneTarge;
  } else {
    return target;
  }
}
```
重新运行代码,发现箭头处成了` Circular `,处理循环引用完成.
![test4](~@img/javascript/2019-11-12-deepClone06.png)


采用` WeakMap `代替` Map `,让` cache `的数据可以被垃圾回收机制回收
```js{1}
function deepClone (target, cache = new WeakMap()) {
  // ......
}
```

## 其他数据类型

### 引用类型判断
```js
// helper
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}
```

### 获取数据类型
可以借用` toString `方法来获取数据类型.

> 在每一个引用数据类型的原型上都拥有` toString `方法,` toString `方法会被每个对象继承,
>
> 如果该方法没有被重写的话,调用` toString() `会返回` [object type] `,其中type为对象的类型

PS:只有当该方法没有被重写时才会有预期的效果,但实际上大部分的引用类型的` toString `方法都被重写了,例如` Array,Date,RegExp `等.

不过可以通过调用原始的` Object `原型上未被重写的` toString `来获取对象的类型.

```js
function getType(target) {
  return Object.prototype.toString.call(target);
}
```

| 调用 | 结果 |
| :- | :- |
| Object.prototype.toString.call(true) | [object Boolean] |
| Object.prototype.toString.call(123) | [object Number] |
| Object.prototype.toString.call('123') | [object String] |
| Object.prototype.toString.call(null) | [object Null] |
| Object.prototype.toString.call(undefined) | [object Undefined] |
| Object.prototype.toString.call(Symbol()) | [object Symbol] |
| Object.prototype.toString.call({}) | [object Object] |
| Object.prototype.toString.call(function() {}) | [object Function] |
| Object.prototype.toString.call([]) | [object Array] |
| Object.prototype.toString.call(new Error()) | [object Error] |
| Object.prototype.toString.call(new RegExp()) | [object RegExp] |
| Object.prototype.toString.call(Math) | [object Math] |
| Object.prototype.toString.call(JSON) | [object JSON] |
| Object.prototype.toString.call(new Date()) | [object Date] |
| Object.prototype.toString.call(new Map()) | [object Map] |
| Object.prototype.toString.call(new Set()) | [object Set] |
| Object.prototype.toString.call(new document()) | [object RegExp] |
| Object.prototype.toString.call(window) | [object global] |


抽取部分常用的数据类型
```js
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const boolTag = '[object Boolean]';
const dateTag = '[object Boolean]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
```

在上述的几种类型中,先简单的区分成两类
- 可继续遍历的类型
- 不可继续遍历的类型
针对不同的类型做不同的拷贝处理

### 可继续遍历类型
1. Object
2. Array
3. Map
4. Set

有序的类型继续递归,首先需要获取它的初始化数据,例如上述的` [] `和` {} `,可以通过拿到` constructor `的方式来获取.

例如：`const target = {}`就是`const target = new Object()`的语法糖。另外这种方法还有一个好处：因为我们还使用了原对象的构造方法，所以它可以保留对象原型上的数据，如果直接使用普通的` {} `，那么原型必然是丢失了的。

```js
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
```

改写` deepClone `函数,对可继续遍历数据类型处理.
```js{2-5,7-12,19-25,27-33}
function deepClone (target, cache = new WeakMap()) {
  // 处理原始数据类型
  if (!isObject(target)) {
    return target;
  }

  // 初始化
  const type = getType(target);
  let cloneTarge;
  if (deepTag.includes(type)) {
    cloneTarge = getInit(target, type);
  }

  if (cache.get(target)) {
    return cache.get(target);
  }
  cache.set(target, cloneTarge);

  // 拷贝set
  if (type === setTag) {
    target.forEach(val => {
      cloneTarge.add(deepClone(val, cache));
    });
    return cloneTarge;
  }

  // 拷贝map
  if (type === mapTag) {
    target.forEach((val, key) => {
      cloneTarge.set(key, deepClone(val, cache));
    });
    return cloneTarge;
  }

  // 拷贝对象和数组
  for (const key in target) {
    cloneTarge[key] = deepClone(target[key], cache);
  }
  return cloneTarge;
}
```
测试代码:
```js{1-3,5-7,20-22}
const map = new Map();
map.set('dceee', 'vvvvvv');
map.set('CorDDDD', 'CODONeNNN飞');

const set = new Set();
set.add('dceee');
set.add('CODONeNNN飞');

const target = {
  key1: 1,
  key2: undefined,
  key3: 'abc',
  key4: {
    child1: 'child1',
    child2: {
      child21: 'child21'
    },
    child3: [1, 2, 3]
  },
  key5: null,
  map,
  set
};
```
测试代码深拷贝成功
![test5](~@img/javascript/2019-11-12-deepClone07.png)

### 不可继续遍历的类型
其他的类型都归类到不可处理的数据类型中,下面以及进行处理:

` Boolean, Number, String, Date, Error`这几种类型可以直接使用构造函数和原始数据创建新对象出来.
```js
function cloneOtherType (target, type) {
  const Ctor = target.constructor;

  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target);

    case regexpTag:
      return cloneReg(target);

    case symbolTag:
      return cloneSymbol(target);

    default:
      return null;
  }
}
```
单独处理` Symbol, RegExp `
```js
function cloneSymbol (target) {
  return Object(Symbol.prototype.valueOf.call(target));
}

function cloneReg (target) {
  const regFlags = /\w*$/;
  const res = new target.constructor(target.source, regFlags.exec(target));
  res.lastIndex = target.lastIndex;
  return res;
}
```
到这时,已经可以处理大部分的数据类型,执行下测试代码
```js{23-29}
const map = new Map();
map.set('dceee', 'vvvvvv');
map.set('CorDDDD', 'CODONeNNN飞');

const set = new Set();
set.add('dceee');
set.add('CODONeNNN飞');

const target = {
  key1: 1,
  key2: undefined,
  key3: 'abc',
  key4: {
    child1: 'child1',
    child2: {
      child21: 'child21'
    },
    child3: [1, 2, 3]
  },
  key5: null,
  map,
  set,
  bool: true,
  num: 2,
  str: '123',
  symbol: Object(Symbol(1)),
  date: new Date(),
  reg: /\d+/,
  error: new Error()
};
```
顺利通过.
![test6](~@img/javascript/2019-11-12-deepClone08.png)