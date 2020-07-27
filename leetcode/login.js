

// 账号密码登录
export async function login(page, obj) {
  await page.goto('https://github.com', {
    // networkIdleTimeout: 5000,
    // waitUntil: 'networkidle',
    timeout: 0
  });
  await page.screenshot({path: './screenshots/github2.png'});
}
