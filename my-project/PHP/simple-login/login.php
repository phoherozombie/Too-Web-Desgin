<?php
include 'users.php';
include 'auth.php';

// If the user is already logged in, redirect to the dashboard
if (isLoggedIn()) {
    header('Location: index.php');
    exit;
}

// Check if the form was submitted
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = authenticate($username, $password);
    if ($user) {
        loginUser($user);
        header('Location: index.php');
        exit;
    } else {
        $error = 'Invalid username or password.';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
<div class="container mx-auto mt-8">
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <?php if ($error): ?>
            <p class="text-red-500"><?php echo $error; ?></p>
        <?php endif; ?>
        <form method="POST" action="/simple-login/login.php">
            <div class="mb-4">
                <label class="block text-gray-700">Username</label>
                <input type="text" name="username" class="w-full px-3 py-2 border rounded" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Password</label>
                <input type="password" name="password" class="w-full px-3 py-2 border rounded" required>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
    </div>
</div>
</body>
</html>
