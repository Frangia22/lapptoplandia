const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'laptoplandia',
    user: 'root',
    password: '',
    port: 3306
});

connection.connect(err => {
    if (err) throw err;
    console.log('DB conectada');
});
setInterval(function () {
    connection.query('SELECT 1');
    console.log('Mantener la conexion viva');
}, 50000);

module.exports = connection;