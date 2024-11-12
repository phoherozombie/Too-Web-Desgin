const mongoose = require('mongoose');

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/rectangleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Tùy chọn này không còn cần thiết trong MongoDB Driver 4.0 trở lên
  connectTimeoutMS: 30000,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose;
