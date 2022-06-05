const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "bh9bhq7k3h2aphzhhl7n-mysql.services.clever-cloud.com",
  user: "uytjzpklayns3yl1",
  password: "Nut489wLRCwl5q8rltc6",
  database: "bh9bhq7k3h2aphzhhl7n",
  connectionLimit: 5,
});
// /** Connection pool creation - END */
 db.query(`select * from users`, (err, result, fields) =>{
 if(err){
   return console.log(err);
   }
   return console.log(result);
 }
 );
module.exports = db;