<?php

include('connection.php');

$id = $_POST['id'];
$id_user = $_POST['id_user'];

$delete_task = $mysqli->prepare('delete from tasks where id=? and id_user=?');
$delete_task->bind_param('ii', $id, $id_user);
$delete_task->execute();
$response['status'] = "success";
$response['message'] = "task was deleted successfully";
echo json_encode($response);


