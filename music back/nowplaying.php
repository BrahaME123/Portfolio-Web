<?php
require_once __DIR__ . '/config.php';

$apiKey = LASTFM_API_KEY;
$user = LASTFM_USERNAME;

$url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user={$user}&api_key={$apiKey}&format=json&limit=1";

$response = file_get_contents($url);
header('Content-Type: application/json');
echo $response;