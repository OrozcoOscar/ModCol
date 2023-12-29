<?php 
if(empty($_POST)){
 	echo "404";
 }else{
 	session_start();
	include "cn.php";
	$id=$_SESSION['user_code'];
 	$modelo=$_POST["m"];
	$modelo=str_replace("'","",$modelo);
	if(empty($id)||empty($modelo)){
		echo "404";
	}else{

			$row=set_sql("SELECT id,nombre,usuario FROM modelo WHERE id='$modelo' AND usuario REGEXP '[u]?".$id."[u]'");
	    		if($row){
					$users =explode("u",$row["usuario"]);
					echo "<h3>Usuarios que participan en el proyecto</h3><br>";
					foreach ($users as $key) {
						$row=set_sql("SELECT id,correo,nombre,apellido FROM usuario WHERE id='$key' AND id!='$id'");
						if($row){
							echo "<div class=user >".$row["correo"]."</div>";
						}
					}
				}else{
					echo "100";
				}
	}
 }

 ?>