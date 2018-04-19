const Koa = require("koa")
const app = new Koa()
const fs = require("fs")

app.use(async (ctx,next)=>{
    ctx.type = "text/html;charset=utf-8"
    // 以下iframe放在所有的子程序的html中
    ctx.body = `<iframe id="ifa" style="display:none" src="http://localhost:9527" frameborder="0"></iframe>

    <!-- 以下script放在所有子程序的主页面上 -->
    <script type="text/javascript">
    window.onload=function(){
        window.frames[0].postMessage("message1",'http://localhost:9527')
    }
    window.onfocus=function(){
        window.frames[0].postMessage("message1",'http://localhost:9527')
    }
    window.addEventListener('message',function(e){
            console.log(e.data); //当前页面获取焦点的时候拿到子iframe传过来的数据
    })
    </script> 
    `
})

app.listen(80)

