var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_property'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Connected');
});

module.exports = conn;