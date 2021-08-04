<?php 
error_reporting(0);
session_start();
include "cn.php";
$id=$_SESSION['user_code'];

if (empty($id) or empty($_POST)) {
	
}else{
	$id_modelo=$_POST["m"];
	
	$row=set_sql("SELECT id,messages FROM chats WHERE id_modelo='$id_modelo'");
	
	if($row){
		$r=set_sql("SELECT id FROM modelo WHERE id='$id_modelo' AND usuario REGEXP'[u]?".$id."[u]'");
		if($r){
			echo $row["messages"];
		}
		
	}
}




 ?>