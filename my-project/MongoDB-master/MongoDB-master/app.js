const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rectangleRoutes = require('./routes/squareRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
require('./config/db');
// Cấu hình MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/rectangleDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};
connectDB();

// Sử dụng EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle root URL
app.get('/', (req, res) => {
    res.render('index', { perimeter: null });
});

// Sử dụng routes
app.use('/', rectangleRoutes);

// Chạy ứng dụng
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
