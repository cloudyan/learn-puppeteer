import path from 'path'
import puppeteer from 'puppeteer-core'
import fs from 'fs-extra'
import { pageInit, doTask } from './utils'

(async function run() {
  const browser = await puppeteer.launch({
    // headless: false
    // 这里注意路径指向可执行的浏览器。
    // 各平台路径可以在 node_modules/puppeteer-core/lib/BrowserFetcher.js 中找到
    // Mac 为 '下载文件解压路径/Chromium.app/Contents/MacOS/Chromium'
    // Linux 为 '下载文件解压路径/chrome'
    // Windows 为 '下载文件解压路径/chrome.exe'
    // executablePath: path.resolve('/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome')
    executablePath: path.resolve('/Applications/Chromium.app/Contents/MacOS/Chromium')
  });

  const page = await pageInit({
    browser,
  });

  const siteUrl = `http://www.1080tv.cn/a/zuixintiku/list_1_1.html`;
  // const siteUrl = `http://www.1080tv.cn/a/zuixintiku/list_1_2.html`;
  const result = await doTask(page, {
    siteUrl,
    selector: '.content>ul>li',
    callback(el) {
      return {
        question: el.querySelector('span').innerText,
        answer: el.querySelector('.info').innerText.replace(/^\/n/g, '').trim(),
      }
    },
  })

  printResult({
    dist: './qa1/output/',
    name: 'qa',
    content: result,
  });

  browser.close();

  // child_process.fork()
  // http://nodejs.org/api/cluster.html
  // https://github.com/lloyd/node-compute-cluster
  // https://github.com/xk/node-threads-a-gogo
  // process.exit();
})();

function printResult(config) {
  const file = `${config.dist}${config.name}.md`;
  // 异步
  fs.outputFile(file, JSON.stringify(config.content, null, 2), err => {
    if (err) {
      console.error('printResult err:', err) // => null
      return;
    }
    console.log(`${config.name} 获取成功！`);
  });
}



// async function taskOne(callback, config) {
  //   const result = await goPage(callback, config)

  //   return result;
  // }

  // const getResultOne = taskOne()

  // printResult({

  // })
