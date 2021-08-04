<?php 
error_reporting(0);
include "cn.php";
try {
	session_start();
} catch (Exception $e) {}

$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$r=mysqli_query($c,"SELECT * FROM modelo WHERE usuario REGEXP '[u]?".$id."[u]'");
while($row=mysqli_fetch_assoc($r) ){
	$t=$row["tipo"];
	if($t=="dc"){$t="Diagrama de clases";}
	if($t=="ds"){$t="Diagrama de Secuencia";}

	////////////////////////////////////////////////////////////////////
	echo "<div class=models onmouseover=show_p('".$row["id"]."')>
		<button class=cerrar onclick=dell('".$row["id"]."')>x</button>
 	<span id=nombre onclick=ver(".$row["id"].",'".$row["tipo"]."')>".$row["nombre"]."</span>
 	<hr>
 	<span id=nombre onclick=ver(".$row["id"].",'".$row["tipo"]."')>".$t."</span>
 </div>";
	
	}
 ?>

