const express = require('express')


const server = express()


server.get('/', (req,res)=>{
    res.send("welcome to express seerbver")
})



server.listen (5600,()=>{
    console.log(`server is lisening`+3000);
})