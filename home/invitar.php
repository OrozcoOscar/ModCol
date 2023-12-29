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
	$id=$_SESSION['user_code'];
 	$user=$_POST["u"];
 	$user=str_replace("'","",$user);
 	$modelo=$_POST["m"];
	$modelo=str_replace("'","",$modelo);
	if(empty($user)||empty($modelo)){
		echo "404";
	}else{

		
			$row=set_sql("SELECT id,nombre,usuario FROM modelo WHERE id='$modelo' AND usuario REGEXP '[u]?".$id."[u]' AND usuario NOT REGEXP '[u]?".$user."[u]'");
	    		if($row){
					$r =set_sql("UPDATE  modelo SET usuario='".$row["usuario"]."".$user."u' WHERE id=".$row["id"]."",1);
					if($r){
						echo "200";
					}else{
						echo "100";
					}
				}else{
					echo "100";
				}
	}
 }








 ?>