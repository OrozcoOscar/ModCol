<?php 
error_reporting(0);
include "cn.php";
try {
	session_start();
} catch (Exception $e) {}
$nombre=$_POST["n"];
$nombre=str_replace("'","",$nombre);
$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}else{
	$row=set_sql("SELECT nombre FROM modelo WHERE usuario REGEXP '[u]?".$id."[u]' AND nombre='$nombre'");
if($row){
	echo "101";
}else{
	echo "200";
}
}

	
	










 ?>