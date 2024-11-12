<?php
include 'auth.php';
requireLogin(); // Require the user to be logged in

// Get logged-in user data
$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
<div class="container mx-auto mt-8">
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome, <strong><?php echo htmlspecialchars($user['full_name']); ?></strong>!</p>
        <p>Username: <strong><?php echo htmlspecialchars($user['username']); ?></strong></p>
        <a href="logout.php" class="text-red-500 mt-4 inline-block">Logout</a>
    </div>
</div>
</body>
</html>
