const http = require('http');
const path = require('path');
const fs = require('fs');
//创建
const server= http.createServer();


//监听
server.on("request",(req,res)=>{
    let pathname=req.url;
    pathname=pathname==="/"?"/index.html":pathname;
    let filename=path.join(__dirname,"public",pathname);
    
    if(pathname!=='/favicon.ico'){
        pathname=path.join(__dirname,"public",filename)
        
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end("serer internal error.");
        }else{
            res.end(data);
        } 
    })    
}
})

//启动
server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080")
})