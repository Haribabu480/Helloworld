const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("second hello world");
})

const port=3000;

app.listen(port,()=>{
    console.log(`server created at http://localhost:${port}`);
})