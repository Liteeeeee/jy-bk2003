const express=require("express");
const app=express();

//使用自定义的中间件接受post数据
const csBodyI=require("./middlewares/csBodyI");
app.use(csBodyI);
//路由
app.post("/post",(req,res)=>{
    console.log(req.body);
});
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
});