<?php
error_reporting(0);
session_start();
$id=$_SESSION['user_code'];
	if (empty($id)) {
		echo "<script>window.location.href='../';</script>";
	}
include "cn.php";


if (empty($_POST)) {
	# code...
	echo "Algo ha salido mal :(";
}else{
	if($_POST["o"]=="wp34"){
		echo encode($_POST["f"]);
	}else{
		$id=$_SESSION['user_code'];

		if($id==$_POST["u"] and !empty($_POST["file"])){
			$nombre=$_POST["n"];
 			$nombre=str_replace("'","",$nombre);
 			$tipo=substr($nombre,0,strpos($nombre,"]"));
 			$tipo=substr($tipo,strpos($nombre,"[")+1,strlen($tipo));
 			$tipo=str_replace("'","",$tipo);
 			$nombre=substr($nombre,0,strpos($nombre,"["));
 			$modelo=decode($_POST["file"]);
 			$modelo=str_replace("'","",$modelo);
 			if($tipo=="ds" or $tipo=="dc"){
 				$row=set_sql("SELECT nombre FROM modelo WHERE usuario REGEXP '[u]?".$id."[u]' AND nombre='$nombre'");
 				if($row){
 					echo "Ya existe un modelo con en este nombre [".$nombre."]";
 				}else{
 					$r =set_sql("INSERT INTO modelo(nombre,usuario,archivo,tipo) VALUES('$nombre','".$id."u','$modelo','$tipo')",1);
					if($r){
						echo "Se ha subido con exito";
					}else{
						echo "Algo ha salido mal :(";
					}
 				}
 			}else{
				echo "Algo ha salido mal,escoje un archivo valido";
			}
 			
			

			
		}else{
			echo "Algo ha salido mal :( ";
		}
	}
	
}
	

 ?>