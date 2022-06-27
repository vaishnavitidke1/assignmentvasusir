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
let price =500;

let category = 'cosmatics';
let itemno = 3;

con.query('update  item set price =?,category =? where itemno=? ', [price,category,itemno], 
(err,res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }
}
);
