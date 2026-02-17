<?php
if (!isset($_GET['url'])) {
    http_response_code(400);
    exit("No URL");
}

$url = $_GET['url'];

$headers = [
    "User-Agent: Mozilla/5.0",
    "Referer: https://www.tataplay.com/",
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$data = curl_exec($ch);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

header("Content-Type: $contentType");

echo $data;
curl_close($ch);
?>
