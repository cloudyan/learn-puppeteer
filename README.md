# learn-puppeteer

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
