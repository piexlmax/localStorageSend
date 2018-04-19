const Koa = require("koa")
const app = new Koa()
const fs = require("fs")

app.use(async (ctx,next)=>{
    ctx.type = "text/html;charset=utf-8"
    ctx.body = `
    //增加一个和首页同域名的空jsp或者html文件 加入以下js 用于作为iframe嵌入的页面 来传输 localStorage中的内容
    <script type="text/javascript">
        window.addEventListener('message',function(e){
            if(e.data){
                var message1 = localStorage.getItem("tzxtid")
                window.parent.postMessage(message1,'*'); //从子iframe传输数据到父页面
            }     
        })
    </script>
    `
})



app.listen(9527)

