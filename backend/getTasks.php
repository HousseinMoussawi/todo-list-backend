<?php

include('connection.php');

$id_user = $_POST['id_user'];

$get_tasks = $mysqli->prepare('select id, description from tasks where id_user=?'); 
$get_tasks->bind_param('i', $id_user);
$get_tasks->execute();
$get_tasks->bind_result($id, $description); 
while ($get_tasks->fetch()) {
    $task = array();
    $task['id'] = $id;
    $task['description'] = $description;
    $response['tasks'] = $task;
}