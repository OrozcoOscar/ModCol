<?php 
session_start();
 if(empty($_POST)){
 	echo "404";
 }else{
 	include "./home/cn.php";
 	$user=$_POST["u"];
 	$user=str_replace("'","",$user);
 	$clave=$_POST["c"];
 	$clave=str_replace("'","",$clave);
 	$nombre=$_POST["n"];
 	$nombre=str_replace("'","",$nombre);
 	$apellido=$_POST["a"];
 	$apellido=str_replace("'","",$apellido);
	if(empty($user)||empty($clave)||empty($apellido)||empty($nombre)){
		echo "404";
	}else{
		$row=set_sql("SELECT id,correo,clave FROM usuario WHERE correo='$user'");
		if($row){
			echo "101";
		}else{
			$clave=password_hash($clave,PASSWORD_BCRYPT);
			$r =set_sql("INSERT INTO usuario(nombre,apellido,correo,clave) VALUES('$nombre','$apellido','$user','$clave')",1);
			if($r){
				echo "200";
			}else{
				echo "100";
			}
		}
	
	}
	}
 ?>