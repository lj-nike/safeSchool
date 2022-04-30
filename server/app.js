const Koa = require('koa')
const userRouter = require('./app/api/user')

const app = new Koa()
app.use(userRouter.routes())

app.listen(3000)
