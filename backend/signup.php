<?php
include('connection.php');


$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$check_email = $mysqli->prepare('select username, email from users where username=? or email=?');
$check_email->bind_param('ss', $username,$email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();


if ($email_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(username,email,password) values(?,?,?);');
    $query->bind_param('sss', $username, $email, $hashed_password);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "user $username was created successfully";
} else {
    $response["status"] = "user already exists";
    $response["message"] = "user $username wasn't created";
}
echo json_encode($response);
