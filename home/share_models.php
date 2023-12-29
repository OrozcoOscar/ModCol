<?php 
include "cn.php";
try {
	session_start();
} catch (Exception $e) {}

$id=$_SESSION['user_code'];
if (empty($id)|| empty($_GET) ) {
	echo "<script>window.location.href='../';</script>";
}
$r=mysqli_query($c,"SELECT * FROM modelo WHERE usuario REGEXP '[u]?".$id."[u]'");//el espacio es importante
while($row=mysqli_fetch_assoc($r) ){
	$t=$row["tipo"];
	if($t=="dc"){$t="Diagrama de clases";}
	if($t=="ds"){$t="Diagrama de Secuencia";}
	echo "<div class=models >
 	<span id=nombre onclick=invitar(".$_GET["id"].",'".$row["id"]."')>".$row["nombre"]."</span>
 	<hr>
 	<span id=nombre onclick=invitar(".$_GET["id"].",'".$row["id"]."')>".$t."</span>
 </div>";
	
	}
 ?>

