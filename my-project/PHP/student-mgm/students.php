<?php
// Sample data
$students = [
    ['id' => 1, 'name' => 'Alice Johnson', 'age' => 20, 'course' => 'Computer Science'],
    ['id' => 2, 'name' => 'Bob Smith', 'age' => 22, 'course' => 'Electrical Engineering'],
    ['id' => 3, 'name' => 'Charlie Brown', 'age' => 21, 'course' => 'Mathematics'],
    // Add more students if needed
];

function getStudentById($id) {
    global $students;
    foreach ($students as $student) {
        if ($student['id'] == $id) {
            return $student;
        }
    }
    return null;
}
