<?php
session_start();

// Check if the user is logged in
function isLoggedIn() {
    return isset($_SESSION['user']);
}

// Redirect to login page if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: simple-login/login.php');
        exit;
    }
}
 
// Log in a user
function loginUser($user) {
    $_SESSION['user'] = $user;
}

// Log out a user
function logoutUser() {
    unset($_SESSION['user']);
    session_destroy();
}
