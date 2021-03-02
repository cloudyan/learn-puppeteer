# learn-puppeteer

## Puppeteer 是什么

puppeteer 是一个Chrome官方出品的headless Chrome node库。它提供了一系列的API, 可以在无UI的情况下调用Chrome的功能, 适用于爬虫、自动化处理等各种场景等。

## Puppeteer 能做什么

根据官网上描述，Puppeteer几乎能实现你能在浏览器上做的任何事情，比如:

1. 生成页面截图和 PDF；
2. 自动化表单提交、UI 测试、键盘输入等；
3. 创建一个最新的自动化测试环境。使用最新的 JavaScript ；
4. 和浏览器功能，可以直接在最新版本的 Chrome 中运行测试；
5. 捕获站点的时间线跟踪，以帮助诊断性能问题；
6. 爬取 SPA 页面并进行预渲染(即'SSR')。

本文的渲染服务将会使用它的截图功能，来实现图片生成。

## 问题

`npm i puppeteer` 在安装时自动下载最新版本 Chromium

在安装过程中可能会因为下载 Chromium 导致报错，官网建议是先通过 `npm i --save puppeteer --ignore-scripts` 阻止下载 Chromium， 然后再手动下载 Chromium 。

```js
// 参见 ./qa/index.js
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    // 运行 Chromium 或 Chrome 可执行文件的路径（相对路径）
    executablePath: path.resolve('/Applications/Chromium.app/Contents/MacOS/Chromium'),
    // headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'screenshot.png'});
  browser.close();
})();
```

或者使用

`npm i puppeteer-core` 在安装时不会自动下载 Chromium。参见 ./spider/index.js

学习Puppeteer
- https://github.com/puppeteer/examples
- http://csbun.github.io/blog/2017/09/puppeteer/
- https://github.com/chenxiaochun/blog/issues/38
- https://github.com/zhentaoo/puppeteer-deep
- https://www.infoq.cn/article/nodejs-weakness-cpu-intensive-tasks
- https://github.com/neilk/letterpwn
- https://my.oschina.net/o2team/blog/4269934 京喜前端自动化测试之路
- tasks
  - https://github.com/d3/d3-queue
  - https://github.com/sindresorhus/p-waterfall
  - https://github.com/jhurliman/node-rate-limiter
  - https://github.com/rvagg/node-worker-farm
  - https://github.com/bevry/taskgroup
- 破解滑动验证
  - https://mp.weixin.qq.com/s/NDIEaAhMHdrC3l9DV8z00g
  - https://blog.csdn.net/lmw1239225096/article/details/79099238

```js
const authURL = url.format({
  protocol: 'http',
  hostname: 'localhost',
  port: gatewayPort,
  pathname: '/oauth2/authorize',
  query: {
    response_type: 'code',
    client_id: clientID,
    state: state,
    redirect_uri: `http://localhost:${redirectPort}/cb`
  }
});
```
