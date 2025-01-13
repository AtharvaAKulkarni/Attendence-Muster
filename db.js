const { connect } = require('http2');
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'atharva123',
    database:'attendence_muster'
})

connection.connect((err)=>{
    if(err){
        console.log("ERROR DB");
    }
})


module.exports=connection;