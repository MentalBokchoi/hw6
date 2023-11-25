<?php
header("Access-Control-Allow-Origin: *");
echo file_get_contents('https://evilinsult.com/generate_insult.php?lang=en&type=json');
?>