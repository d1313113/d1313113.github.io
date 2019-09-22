---
# 草稿
draft: false
category: JavaScript
tags:
  - Introduction
date: 2019-09-22
title: 01.js技巧 -- 函数柯里化
# 固定标题
vssue-title: js技巧 -- 函数柯里化
---

# 柯里化
柯里化指代的事不了解他的函数过程,讲其n个参数转变为n个各带一个参数的函数.创造了一个应用链,最终解决问题.

学习柯里化需要了解的**前置概念**
- 闭包
- 高阶函数

## currying实现
一开始就注意到,柯里化接收一个函数作为参数,so...
### step1
```js
function curry( fn ) {

}
```

### step2
接下来我们需要知道我们的柯里化函数会接受多少个参数(称为`arity`元数),否则将不知道什么时候停止返回函数以及给出最终返回值.
```js {2}
function curry( fn ) {
  let arity = fn.length;
}
```

### step3
每次调用`carry`函数时,都会将新的参数保存到一个闭包中,并且返回一个新函数,直到参数数组的数量等于原函数需要的数量时,调用并返回最终值.

要做到这一点,我们需要
1. 一个可以保存参数的闭包
2. 一个函数,他可以检查总的参数数量和返回的函数与是否调用返回最终值

这里可以使用一个名为`resolver`的自执行函数

```js {4-6}
function curry( fn ) {
  let arity = fn.length;

  return (function resolver() {

  }());
}
```

现在,需要现在`resolver`中创建一个名为`memory`变量用来保存函数接收到的参数,这里采用`Array.slice()`方法来复制一份`arguments`对象.

```js {5}
function curry( fn ) {
  let arity = fn.length;

  return (function resolver() {
    let memory = Array.prototype.slice.call(arguments);
  }());
}
```

因为这个内部函数实际上是最终被调用,它需要接受参数.但它也需要添加这些任何参数存储在内存中。首先,所以我们下复制一份.

```js {6-8}
function curry( fn ) {
  let arity = fn.length;

  return (function resolver() {
    let memory = Array.prototype.slice.call(arguments);
    return function() {
      let local = memory.slice();
    };
  }());
}
```

现在通过`push`来添加新的参数

```js {8}
function curry( fn ) {
  let arity = fn.length;

  return (function resolver() {
    let memory = Array.prototype.slice.call( arguments );
    return function() {
      let local = memory.slice();
      Array.prototype.push.apply( local, arguments );
    };
  }());
}
```

现在已经有一个数组可以根据调用顺序将参数给收集起来了.

最后需要做的事情,就是去比较参数数量与柯里化函数中`arity`参数数量是否一致.如果数量一致的话,就可以调用最初的源函数.否则就继续使用`resolver`去返回存储在`memory`中参数的函数.

```js {9,10}
function curry( fn ) {
  let arity = fn.length;

  return (function resolver() {
    let memory = Array.prototype.slice.call( arguments );
    return function() {
      let local = memory.slice(), next;
      Array.prototype.push.apply( local, arguments );
      next = local.length >= arity ? fn : resolver;
      return next.apply( null, local );
    };
  }());
}
```

可能有点难理解,用另一个例子来解释一下.
```js
function volume( l, w, h ) {
  return l * w * h;
}
let curried = curry( volume );
```
这里的`curried`的结果是通过传递`volume`到curry中去返回的.

如果往回看的话,实际上发生了这几件事
1. 在`arity`中存下了`volume`参数数量,这里的话是3个参数.
2. 立刻调用`resolver`函数,这会`resolver`函数参数为0,这意味着`memory`是个空数组.
3. `resolver`函数返回了一个匿名函数.

现在我们调用`curried`函数,并传入长度

```js {5}
function volume( l, w, h ) {
  return l * w * h;
}
let curried = curry( volume );
let length = curried( 2 );
```

再分析一下调用的步骤
1. 我们调动了由`resolver`返回的匿名函数
2. 创建了一个`memory`(空数组)并称为`local`
3. 往`local`数组中添加进了参数2
4. 因为此时`local`数组的长度比`volume`中`arity`数组长度要小,所以会根据现有的`auguments`再次调用`resolver`.这样会创建一个包含新的`memory`数组的闭包,其中包含着我们外层第一个参数,2.
5. 最终,`resolver`通过外部的闭包返回了一个新的`memory`数组.

所以我们就又再次得到一个内部的匿名函数.只不过这一次,`memory`数组就不是空的了,它包含了2这个参数在里面.

调用一下`length`,`lengthAndWidth`,就得到了最终的数据
```js {6,7}
function volume( l, w, h ) {
  return l * w * h;
}
let curried = curry( volume );
let length = curried( 2 );
let lengthAndWidth = length( 3 );
console.log( lengthAndWidth( 4 ) ); // 24
// 等价于
curried(2)(3)(4);
```

```js
// es6版本
const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));
```