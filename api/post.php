<?php 
$mysqli = new mysqli("localhost", "root", "", "");    

if($mysqli->connect_error){
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}


$result = $mysqli->query("SELECT id, titulo, content , slug, created_at FROM posts WHERE published = 1");

$posts = $result->fetch_all(MYSQLI_ASSOC);

header("Content-Type: application/json");
echo json_encode($posts);

?>