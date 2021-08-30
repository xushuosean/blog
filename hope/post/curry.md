---
# This is the icon of the page
icon: page
# This is the title of the article
title: 函数柯里化
# Set author
author: Sean
# Set writing time
time: 2021-05-20
# A page can only have one category
category: Javascript
# A page can have multiple tags
tag:
  - Curry
  - Javascript
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: 函数柯里化
---

## On the first

之前在面经中看到过函数柯里化，但是在自己的面试过程中也没有遇到过，但是最近又准备看新的机会，所以又开始关注起这个问题，顺便写一篇文章记录一下

## 函数柯里化

#### 柯里化到底是什么？

我一直没有找到一个完整的解释，直到看到这里 [What is currying](https://stackoverflow.com/questions/36314/what-is-currying)

> 柯里化就是将一个拥有多个参数的 **方法** 拆解为一系列 **单个参数** 的方法

所以重点在这里。

* 多个参数的方法

* 单个参数

#### .eg

有了这个定义以后，我们尝试定义一个多个参数的方法

```javascript
function add(a, b) {
    return a + b
}
```
看到了吗？与其他的`currying`化的示例简直一模一样，那么接下来呢？

先说一下我们对于柯里化的预期

我们期望能够将 `add(a, b)` 能够转换为 `add(a)(b)`，也就是说，当传入第一个参数时，即：

`add(a)`

我们期望他能够返回一个function，使得`add(a)(b)`能够成功被调用

所以，我们把这个方法拆解为一系列接受单个参数的方法

```javascript
// 硬编码柯里化
function add(a) {
    return function(b) {
        return a + b
    }
}
```
这样，就完成了一个函数的**柯里化**

但是这样的话，我们每次想要柯里化一个函数都需要重写这个方法，这也太麻烦了，且修改原函数的定义，可能会导致未知的问题，所以我们需要一个通用的方法，能够返回新的function

## 柯里化function

沿用刚刚的**硬编码柯里化**方案，我们继续考虑如何更灵活的调用

既然重写方法如此麻烦，那不如将方法传入一个新定义的方法（currying）内，使其成为currying的参数。

```javascript
function currying(fn) {
    return something
}
```

我们所期望的是，传入待柯里化的function，返回一个新的方法，可以让我们直接连续调用

期望的用法如下

```javascript
let curryingAdd = currying(add)

curryingAdd(a)(b)
```

但是却存在一个问题：

何时返回add方法的值呢？很简单

#### 参数个数大于等于add所需的参数

当柯里化后的方法（curryingAdd）所接收的值的个数，大于等于add所接收的个数时，就返回计算值

但是如何返回计算值呢？那我们可以保存所有传入的参数和原函数（add），当条件达到时，则调用函数（add）并传入所有的值


那我们可以将代码按照如下改造

> 前置知识：function拥有一个length属性，为定义改方法时的参数个数

```javascript
function currying(fn, ...args) {
    let len = fn.length
    
    if (args.length >= len){
        // 返回计算值
        return fn.call(null, ...args)
    } else {
        // 保存args
    }
}
```

#### 情况相反

如果情况相反，传入的参数不足以调用add，理论上的期望继续调用的路径是

```javascript
let curryingAdd_a = curryingAdd(a)

curryingAdd_a(b)
```
所以在这种情况下，应该返回一个function

在这个function调用时，应该继续检测是否满足参数的个数是否大于fn的个数，这和currying方法的功能一致，所以我们继续递归调用currying


```javascript
function currying(fn, ...args) {
    let len = fn.length
    
    if (args.length >= len){
        // 返回计算值
        return fn.call(null, ...args)
    } else {
        return function curried(...args2) {
            return currying(fn, ...[...args, ...args2])
        }
    }
}
```
那这样，就解决了柯里化硬编码的问题

## In the end

柯里化函数是保存状态并且返回一个仍然可以调用的方法的函数
