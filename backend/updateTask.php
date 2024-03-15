<?php

include('connection.php');

$description = $_POST['description'];  
$id = $_POST['id'];
$id_user = $_POST['id_user'];

$update_description=mysqli->prepare('update users set description=? where id=? and id_user=?');
$update_description->bind_param('sis', $description, $id, $id_user);
$update_description->execute();
$response['status'] = "success";
$response['message'] = "description was updated successfully";
echo json_encode($response);

