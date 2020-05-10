const path = require('path')
const puppeteer = require('puppeteer-core');
// const devices = require('puppeteer/DeviceDescriptors');

async function run() {
  const browser = await puppeteer.launch({
    // headless: false
    executablePath: path.resolve('/Applications/Chromium.app/Contents/MacOS/Chromium')
  });
  const page = await browser.newPage();

  // 设置浏览器信息
  // const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.84 Chrome/63.0.3239.84 Safari/537.36";
  // const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36";
  const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
  await Promise.all([
    page.setUserAgent(UA),
    // 允许运行js
    page.setJavaScriptEnabled(true),
    // 设置页面视口的大小
    // page.setViewport({width: 1100, height: 1080}),
  ]);
  // await page.emulate(devices['iPhone 6']);

  await page.goto('https://github.com', {
    // networkIdleTimeout: 5000,
    // waitUntil: 'networkidle',
    timeout: 0
  });
  await page.screenshot({path: 'screenshots/github1.png'});

  browser.close();
}

try {
  run();
} catch (err) {
  console.log(err);
}
