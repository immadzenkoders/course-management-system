// const mysql = require('mysql2');
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: 'immad123',
//     database: 'course_managementdb'
// });

// mysqlConnection.connect((err) => {
//     if (err) {
//         console.log("Unable to connect database" + JSON.stringify(err, undefined, 2));
//     } else {
//         console.log("database connected successfully");
//     }
// });

// module.exports = mysqlConnection;

// config/database.js

const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
        user:'root',
        password: 'immad123',
        database: 'course_managementdb'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();

