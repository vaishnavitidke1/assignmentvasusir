const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wbt',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let  itemno=1;  
con.query('select itemno, itemname,  price,category from item where  itemno=?', [ itemno], 
(err, rows) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(rows.length > 0)
          console.log(rows[0].itemno + " " + rows[0].itemname + " " + rows[0].price + " "+rows[0].category);
        else
           console.log("no emp found with "+ itemno);
    
        }
}
);
