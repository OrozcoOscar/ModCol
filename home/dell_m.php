<?php 
try {
session_start();
} catch (Exception $e) {}
if(empty($_POST)){
 	echo "404";
 }else{
include "cn.php";
include "lib.php";
	$user=$_POST["u"];
 	$user=str_replace("'","",$user);
 	$modelo=$_POST["m"];
 	$modelo=str_replace("'","",$modelo);
 	if(empty($user)||empty($modelo)){
		echo "404";
	}else{
		
	$id=$_SESSION['user_code'];
	if (empty($id)) {
		echo "<script>window.location.href='../';</script>";
	}
	if($id==$user){
		$r=mysqli_query($c,"SELECT id,nombre,usuario FROM modelo WHERE id='$modelo' AND usuario='".$id."u'");
		$row=mysqli_fetch_assoc($r);
		if($row){
			$r=mysqli_query($c,"DELETE FROM modelo WHERE usuario='".$id."u' AND id='$modelo'");
			if($r){
				echo "200";
			}else{
				echo "100";
			}
		}else{
		$r=mysqli_query($c,"SELECT id,nombre,usuario FROM modelo WHERE id='$modelo' AND usuario REGEXP '[u]?".$id."[u]'");
		$row=mysqli_fetch_assoc($r);
		if($row){
			$usuarios=dell_element($row["usuario"],$id);
			$r=mysqli_query($c,"UPDATE  modelo SET usuario='$usuarios' WHERE id=".$row["id"]."");
			if($r){
				echo "200";
			}else{
				echo "100";
			}
			
		}

		}
		
		
		
	}else{
		echo "100";
	}

	}
}



 ?>