<?php

$redis = new Redis();
$redis->connect('db', 6379);
//$redis->rPush('new', 'A');
//$redis->rPush('new', 'B');
//$redis->rPush('new', 'C');

for($i = 0; $i < $redis->lLen('new'); $i++){
    echo $redis->lIndex('new', $i) . '<br />';
}

$redis->lPop('new');