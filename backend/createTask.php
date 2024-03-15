<?php

include('connection.php');

$description = $_POST['description'];
$id_user = $_POST['id_user'];

$create_task = $mysqli->prepare('insert into tasks (description, id_user) values (?, ?)');   
$create_task->bind_param('si',$description, $id_user);
$create_task->execute();
$response['status'] = "success";
$response['message'] = "task was created successfully";
echo json_encode($response);