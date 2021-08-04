<?php 
error_reporting(0);
include "cn.php";
try {
	session_start();
} catch (Exception $e) {}
$user=$_POST["u"];
$user=str_replace("'","",$user);
$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$r=mysqli_query($c,"SELECT * FROM modelo WHERE usuario REGEXP '[u]?".$id."[u]' AND usuario REGEXP '[u]?".$user."[u]'");
echo "<h3>Modelos en comun</h3><br>";
while($row=mysqli_fetch_assoc($r) ){
	$t=$row["tipo"];
	if($t=="dc"){$t="Diagrama de clases";}
	if($t=="ds"){$t="Diagrama de Secuencia";}
	$idM=$row["id"];
	echo "<div class=models >
		<button class=cerrar onclick=dell('".$idM."')>x</button>
 	<span id=nombre onclick=ver(".$idM.",'".$row["tipo"]."')>".$row["nombre"]."</span>
 	<hr>
 	<span id=nombre onclick=ver(".$idM.",'".$row["tipo"]."')>".$t."</span>
 </div>";
	
	}

 ?>

