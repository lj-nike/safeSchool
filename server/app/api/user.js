const Router = require('@koa/router')
const router = new Router()

// 视图函数
router.get('/user', async (ctx) => {
  ctx.body = {
    msg: 'success',
    data: 'res'
  }
})

module.exports = router
