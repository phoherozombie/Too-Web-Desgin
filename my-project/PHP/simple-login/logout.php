<?php
include 'auth.php';

logoutUser();
header('Location: login.php');
exit;
