const express=require('express');
const path=require('path');
const port=3000;
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"templates")));

app.use('/',require(path.join(__dirname,"routes/main.js")));

app.listen(port,()=>{
    console.log(`Attendence Muster app is running at http://localhost:${port}`);
})


