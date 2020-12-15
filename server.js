/**引入 koa ，koa 主要是帮我们封装了 http 服务
 * 优点 ： 1、 中间件；   2、 错误处理机制
 * 中间件 ： ctx  context  上下文  koa中的（req,res）表示是原生的 , (request,response) koa自己封装的
 * 原生的 response 处理是不建议使用的
 */

let koa = require('koa')

let app = new koa();

app.use(( ctx)=>{    //handleRequest
  ctx.res.end("hello")

})

app.listen(3000)

