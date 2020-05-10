export async function pageInit({
  browser,
  UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.84 Chrome/63.0.3239.84 Safari/537.36',
} = {}) {
  const page = await browser.newPage();
  await Promise.all([
    page.setUserAgent(UA),
    // 允许运行js
    page.setJavaScriptEnabled(true),
    // 设置页面视口的大小
    // page.setViewport({width: 1100, height: 1080}),
    page.setRequestInterception(true),
  ]);

    // await page.emulate(devices['iPhone 6']);

  // block images
  // await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'image') {
      request.abort();
    } else {
      request.continue();
    }
  });
  return page;
}

export async function doTask(page, config) {
  if (!page) page = pageInit()

  // 打开网址
  await page.goto(config.siteUrl, {
    // 等待网络状态为空闲的时候才继续执行
    waitUntil: 'networkidle2',
    timeout: 0,
  })

  const task = config => {
    // 这里是沙箱，要 evaluate 传递变量才能读取外部变量
    const els = Array.from(document.querySelectorAll(config.selector))
    return els.map(config.callback)
  }

  return page.evaluate(config => {

    // 这里是沙箱，要 evaluate 传递变量才能读取外部变量
    const els = Array.from(document.querySelectorAll(config.selector))
    return els.map(el => {
      return {
        question: el.querySelector('span').innerText,
        answer: el.querySelector('.info').innerHTML.replace(/^\/n/g, '').trim(),
      }
    })
    // const els = Array.from(document.querySelectorAll(config.selector))
    // return els.map(config.callback)
  }, config)
}
