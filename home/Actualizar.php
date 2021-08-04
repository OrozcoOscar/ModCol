<?php 
error_reporting(0);
session_start();
 if(empty($_POST)){
 	echo "404";
 }else{
 	include "cn.php";
 	$user=$_POST["u"];
 	$user=str_replace("'","",$user);
 	$clave=$_POST["p"];
 	$clave=str_replace("'","",$clave);
 	$clave2=$_POST["p2"];
 	$nombre=$_POST["n"];
 	$nombre=str_replace("'","",$nombre);
 	$apellido=$_POST["a"];
 	$apellido=str_replace("'","",$apellido);
	if(empty($user)||empty($apellido)||empty($nombre)){
		echo "404 ";
	}else{

			$r =set_sql("UPDATE  usuario SET nombre='$nombre' WHERE id='$user'",1);
			$r =set_sql("UPDATE  usuario SET apellido='$apellido' WHERE id='$user'",1);
			if($clave2=="true"){
				$clave=password_hash($clave,PASSWORD_BCRYPT);
				$r =set_sql("UPDATE  usuario SET clave='$clave' WHERE id='$user'",1);
			}
			
			if($r){
				echo "200";
			}else{
				echo "100";
			}
		
	
	}
	}
 ?>