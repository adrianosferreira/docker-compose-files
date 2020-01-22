<?php
$http = new Swoole\HTTP\Server("0.0.0.0", 9501);

$http->on('start', function ($server) {
    echo "Swoole http server is started at http://127.0.0.1:9501\n";
});

$http->on('request', function ($request, $response) {
    $response->header('Content-Type', 'text/json');
    $response->end(json_encode($request));
});

$http->start();