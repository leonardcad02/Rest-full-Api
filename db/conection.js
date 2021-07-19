const mysql = require('mysql');

//Aqui se hace la conección a la base de datos
const mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '12345',
    database:'company'
});
mysqlconnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Db is connected");
    }
});

module.exports = mysqlconnection;