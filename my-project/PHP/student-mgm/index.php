<?php
include 'students.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student List</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
<div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-6">Student List</h1>
    <table class="min-w-full bg-white border border-gray-300">
        <thead>
        <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Age</th>
            <th class="py-2 px-4 border-b">Course</th>
            <th class="py-2 px-4 border-b">Details</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($students as $student) : ?>
            <tr class="text-center">
                <td class="py-2 px-4 border-b"><?php echo $student['id']; ?></td>
                <td class="py-2 px-4 border-b"><?php echo $student['name']; ?></td>
                <td class="py-2 px-4 border-b"><?php echo $student['age']; ?></td>
                <td class="py-2 px-4 border-b"><?php echo $student['course']; ?></td>
                <td class="py-2 px-4 border-b">
                    <a href="/student-mgm/student-detail.php?id=<?php echo $student['id']; ?>" class="text-blue-500 hover:underline">View Details</a>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</div>
</body>
</html>
