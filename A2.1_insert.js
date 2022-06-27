const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wbt',
	port:3306
};
const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);
// console.log("chali to shuru karte hai");

let itemno = 3;
let itemname = 'cream';
let price =700;
let category = 'mekup';
con.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno,itemname,price,category], 
(err, res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);
