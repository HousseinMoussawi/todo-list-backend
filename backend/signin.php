<?php
include('connection.php');

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare('select *
from users
where email=? or username=?');
$query->bind_param('ss', $email, $username);
$query->execute();
$query->store_result();
$query->bind_result($id, $username, $email, $hashed_password);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['user_id'] = $id;
        $response['username'] = $username;
        $response['email'] = $email;
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);
