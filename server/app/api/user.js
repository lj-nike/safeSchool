const Router = require('@koa/router')
const axios = require('axios')
const router = new Router()

// 视图函数
router.get('/user', async (ctx) => {
  let res = await axios('http://oa.meitrack.com:9393/api/Device', {
    method: 'get',
    params: {
      companyId: 2,
      offset: 0,
      limit: 65535
    }
  })
  ctx.body = {
    msg: 'success',
    data: res
  }
})

module.exports = router
