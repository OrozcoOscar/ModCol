<?php 
session_start();
$id=$_SESSION['user_code'];
	if (empty($id)) {
		echo "<script>window.location.href='../';</script>";
	}
 if(empty($_POST)){
 	echo "404";
 }else{
 	
 	include "cn.php";
 	$user=$_POST["u"];
 	$user=str_replace("'","",$user);
 	$nombre=$_POST["n"];
 	$nombre=str_replace("'","",$nombre);
	$modelo=$_POST["m"];
	$modelo=str_replace("'","",$modelo);
	$tipo=$_POST["t"];
	$tipo=str_replace("'","",$tipo);
	if((empty($user)||empty($modelo)||empty($nombre)||empty($tipo)) && $_SESSION['user_code']!=$user){
		echo "404";
	}else{
			$row=set_sql("SELECT id,nombre,usuario FROM modelo WHERE nombre='$nombre' AND usuario REGEXP'[u]?".$user."[u]'");
	    		if($row){
					$r =set_sql("UPDATE  modelo SET archivo='$modelo' WHERE id=".$row["id"]."",1);
				}else{

					$r =set_sql("INSERT INTO modelo(nombre,usuario,archivo,tipo) VALUES('$nombre','".$user."u','$modelo','$tipo')",1);
					$row=set_sql("SELECT id,nombre,usuario FROM modelo WHERE nombre='$nombre' AND usuario REGEXP'[u]?".$user."[u]'");
					$_SESSION['model_code']=$row["id"];
				}

	if($r){
		echo "200";
	}else{
		echo "100";
	}
		
	}
 }

	
 ?>
