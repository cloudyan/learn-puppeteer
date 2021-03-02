/*
 * @Descripttion: 入口文件
 * @version: 1.0.0
 * @Author: falost
 * @Date: 2019-08-27 10:54:32
 * @LastEditors: falost
 * @LastEditTime: 2019-09-08 18:20:41
 */
const Koa = require('koa')
const SnapshotController = require('./libs/SnapshotController')

const app = new Koa()
const controller = new SnapshotController()

app.use(async ctx => {
  return await controller.postSnapshotJson(ctx)
})

app.listen(3000, () => {
  console.log('127.0.0.1:3000')
})
