<?php
include 'students.php';

$studentId = isset($_GET['id']) ? $_GET['id'] : null;
$student = getStudentById($studentId);

if (!$student) {
    echo "Student not found.";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Detail</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
<div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-6">Student Detail</h1>
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <p><strong>ID:</strong> <?php echo $student['id']; ?></p>
        <p><strong>Name:</strong> <?php echo $student['name']; ?></p>
        <p><strong>Age:</strong> <?php echo $student['age']; ?></p>
        <p><strong>Course:</strong> <?php echo $student['course']; ?></p>
    </div>
    <a href="index.php" class="inline-block mt-4 text-blue-500 hover:underline">Back to List</a>
</div>
</body>
</html>
