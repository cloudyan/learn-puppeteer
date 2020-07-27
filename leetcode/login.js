

// 账号密码登录
// https://leetcode-cn.com/accounts/login/

export async function login(page, obj) {
  const url = `${obj.origin}${obj.pathname}`;
  console.log('open ', url)
  await page.goto(url, {
    // networkIdleTimeout: 5000,
    // waitUntil: 'networkidle',
    timeout: 0
  });

  await page.click('[data-cypress="sign-in-with-password"]');
  await page.$eval('[placeholder="手机号/邮箱"]',(el, val) => {
    el.value = val
    return el.value
  }, obj.user)
  await page.$eval('[placeholder="输入密码"]',(el, val) => {
    el.value = val
    return el.value
  }, obj.pwd)

  // console.log(user, pwd)

  // await page.waitFor(1000)
  // await page.click('button[type="submit"]')
  await page.waitFor(10000)

  await page.screenshot({path: './leetcode/screenshots/leetcode.png'});
}
