<?php
/*
// this is a stardard get
$output = [
    "success" => true,
    "message" => 'The api is working'
];
$output = json_encode($output);
echo $output;
*/

/*
// this is a post with URLSearchParams() formatted data
echo '<pre>';
print_r($_POST);
echo '</pre>';
//for formatData
*/

// this is for post with unformatted data
$tempPostData = file_get_contents('php://input');

$_POST = json_decode($tempPostData, true);

echo '<pre>';
print_r($_POST);
echo '</pre>';

?>