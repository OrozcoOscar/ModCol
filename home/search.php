<?php 
error_reporting(0);
session_start();
include "cn.php";
$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$user=$_POST["s"];
$user=str_replace("'","",$user);
if (!empty($user)){
	$r=mysqli_query($c,"SELECT id,correo FROM usuario WHERE  correo REGEXP '$user'");
	while($row=mysqli_fetch_assoc($r)){
		echo "<div class='user search'  onclick=show_models(".$row["id"].")>".$row["correo"]."</div>";
	}


}



 ?>