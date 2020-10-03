# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：  
- forEach与map中，map使用于有返回值的函数，而forEach则是遍历某个list，进行函数操作
- 减少 `==` 运算符，使用`===`代替
- 在React中，尽可能使用不可变数据
- 在React中，可以通过`memo（Functional Component）`或 `shouldComponentUpdate（Class Component）`中进行浅比较来优化React渲染性能
- 

## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO';
};
```

答：声明getLogLevel函数，函数返回浏览器LocalStorage中的logLevel，如果logLevel没有值（`null`或`undefined`，但不包括`''(空字符串)`或`false`）则返回INFO，反之则返回logLevel中的值（字符串）
