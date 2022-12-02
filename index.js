const express = require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send(`<h1>Hello!!</h1>`)
})
app.get('/home',(req,res)=>{
    res.send(`<h1>welcome!! home</h1>`)
})
app.listen(5000,(req,res)=>{
    console.log("server is running....");
})