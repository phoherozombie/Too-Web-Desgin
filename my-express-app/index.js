const express = require('express');
const mysql = require('mysql');
const app = express();

// Thiết lập kết nối MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_database_password',
    database: 'your_database_name'
});

// Kết nối tới MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Tạo route để kiểm tra kết nối
app.get('/', (req, res) => {
    res.send('Welcome to MySQL Database with Node.js and Express!');
});

// Route để lấy dữ liệu từ bảng User
app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM User';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Lắng nghe trên cổng 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
