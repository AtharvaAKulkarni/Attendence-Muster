const express=require('express');
const path=require('path');
const router=express.Router();
const mysql=require('mysql2');
const connection=require(path.join(__dirname,"../db"));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/main.html"));
})

router.post('/profile',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const query='SELECT * FROM user_info WHERE username=? AND password=?';
    connection.query(query,[username,password],(err,results)=>{
        if(err){
            console.log("Error abe!");
        }
        else if(results.length>0){
            res.sendFile(path.join(__dirname,"../templates/ls.html"));
        }
        else{
            res.status(400).send("Error aa rha hai be :_(")
        }
    })
})
module.exports=router;