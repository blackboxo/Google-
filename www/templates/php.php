<?php
header("Access-Control-Allow-Origin: *");


$db=new mysqli('121.42.29.139','root','google','google','3306');
if(mysqli_connect_errno()){
  echo 'database connection erro';
  exit;
}
$query="select * from post natural join user";
@$result= $db->query($query);



$arr = array();
while($row=$result->fetch_assoc()){
  $arr[] = $row;
}

$str = json_encode($arr);
echo($str);

?>
