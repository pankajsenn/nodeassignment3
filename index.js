// we will create index.html file using fs module.
// first import fs module
const fs = require("fs");
const http = require("http");
fs.writeFile("index.html","<h1> Hello World </h1><p> This is {Your Name}... </p>",(err)=>{
    console.log(err);
});

//we have creted our file using fs module now time to create a server to serve these file in browser..
//to create server we have to import http module , i have imported it above.
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-type" : "text/html"
    })
    fs.readFile("index.html",(err,data)=>{
        res.end(data);
    })
})
server.listen(5000, ()=>{console.log("server is at port 5000")});