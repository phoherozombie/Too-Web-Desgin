const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

// Route chính (trang chủ)
app.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);  // Hiển thị dữ liệu người dùng dưới dạng JSON
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu' });
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
