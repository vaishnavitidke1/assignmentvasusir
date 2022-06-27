const url="";
let data={
    host:"localhost",
    user:"Parsh",
    password:"Parsh",
    database:"Pankaj",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(data);

console.log("Database Connected");