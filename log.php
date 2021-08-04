<?php 
error_reporting(0);
session_start();
 if(empty($_POST)){
 	echo "404";
 }else{
 	include "./home/cn.php";
 	$user=$_POST["u"];
 	$user=str_replace("'","",$user);
 	$clave=$_POST["c"];
 	$clave=str_replace("'","",$clave);
	if(empty($user)||empty($clave)){
		echo "404";
	}else{
		$row=set_sql("SELECT id,correo,clave FROM usuario WHERE correo='$user'");
		if(count($row)>0 && password_verify($clave, $row["clave"])){
			$_SESSION['user_code']=$row["id"];
			echo "200";
		}else{
			echo "Usuario o Contraseña Erroneos";
		}
	
	}
	}