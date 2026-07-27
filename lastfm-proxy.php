<?php
require_once __DIR__ . '/../config.php';

$allowedMethods = ['user.getrecenttracks', 'track.getInfo'];


$method = $_GET['method'] ?? '';

if (!in_array($method, $allowedMethods, true)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$params = $_GET;

if ($method === 'user.getrecenttracks') {
    $params['user'] = LASTFM_USERNAME; 
}

$params['api_key'] = LASTFM_API_KEY;
$params['format'] = 'json';

$url = "https://ws.audioscrobbler.com/2.0/?" . http_build_query($params);
$response = file_get_contents($url);

header('Content-Type: application/json');
echo $response;