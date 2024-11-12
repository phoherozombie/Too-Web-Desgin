<?php
// Sample user data with username and password (hashed for security)
$users = [
    ['username' => 'john', 'password' => password_hash('password123', PASSWORD_DEFAULT), 'full_name' => 'John Doe'],
    ['username' => 'jane', 'password' => password_hash('mypassword', PASSWORD_DEFAULT), 'full_name' => 'Jane Smith'],
];

// Function to check credentials
function authenticate($username, $password) {
    global $users;
    foreach ($users as $user) {
        if ($user['username'] === $username && password_verify($password, $user['password'])) {
            return $user;
        }
    }
    return false;
}
