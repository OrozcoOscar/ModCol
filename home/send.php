<?php 
error_reporting(0);
session_start();
include "cn.php";
$id=$_SESSION['user_code'];

if (empty($id) or empty($_POST) ){
	
}else{
	$id_modelo=$_POST["m"];
	$message=$_POST["message"];
	$row=set_sql("SELECT id,messages FROM chats WHERE id_modelo='$id_modelo'");
	$f=set_sql("SELECT nombre,apellido FROM usuario WHERE id='$id'");
	$nombre=$f["nombre"];
	$apellido=$f["apellido"];
	if($row){

		$message=$row["messages"]."<p class=user_code$id><span class=name_user>$nombre $apellido : <span>$message</span></span></p>";
		$r=set_sql("UPDATE  chats SET messages='$message' WHERE id='".$row["id"]."'",1);
	}else{
		$message="<p class=user_code$id><span class=name_user>$nombre $apellido :<span>$message</span></span></p>";
		$r=set_sql("INSERT INTO chats(id_modelo,messages)  VALUES('$id_modelo','$message')",1);
	}
}



 ?>