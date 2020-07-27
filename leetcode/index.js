// 做 leetcode 爬虫
// 爬取自己的 leetcode 站点，生成静态的 blog 站

// 思路
// 1. 读取配置，完成登录
// 2. 遍历已解决问题
// 3. 缓存已解决问题

import run from './run'
import { login } from './login'
import config from './config'

try {
  run(async page => {
    await login(page, config)
  })
    // .then(spider());
} catch (err) {
  console.log(err);
}
