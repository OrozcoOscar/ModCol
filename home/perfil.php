<?php 
error_reporting(0);
session_start();
include "cn.php";
$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$row=set_sql("SELECT id,correo,nombre,apellido FROM usuario WHERE id='$id'");
if(!$row){
header("location:../login.php");
}
	
 ?><!DOCTYPE html>
<html lang="es">
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/home.css">
<link rel="stylesheet" href="../css/perfil.css">
<head>
	<meta charset="UTF-8">
	<title><?php echo $row["nombre"] ?></title>
</head>
<body>
<header>
		<a href="./" class="logo"><img src="../imagenes/logo.jpg" alt=""><span>MODCOL</span></a>
		<nav>
                    <a href="./" >Home</a>
                    <a href="salir.php">Salir</a>
                   
                </nav>
	</header>
	<center>	
	<div class="data">
		<span id="letra"><?php echo $row["correo"][0] ?></span><span><?php echo $row["correo"] ?></span>
		<input type="text" placeholder="Nombre" id="username" value=<?php echo ''.$row["nombre"].'';?>  >
		<input type="text" placeholder="Apellido" id="userapellido" value=<?php echo ''.$row["apellido"].'';?>  >
		<input type="password" placeholder="Nueva Contraseña" id="pass">
		<input type="password" placeholder="Repite Contraseña" id="pass2" onkeypress="val()" onkeyup="val()">
		<input type="submit" value="Actualizar datos" onclick="act()">
		<span class="res"></span>
	</div>
	</center>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/import.js"></script>
	<script>
		let est = false;
function val(){
	if($("#pass").val()==$("#pass2").val()){
		$(".res").html("");
		est=true;
	}else{
		$(".res").html("Las contraseñas no coinciden");
		est = false;
	}
	
}
		function act() {
			$.ajax({
		type:"POST",
		url:"Actualizar.php",
		data:{"u":<?php echo $id ?>,"n":$("#username").val(),"a":$("#userapellido").val(),"p":$("#pass").val(),"p2":est},
		success:(e)=>{
		
			if(e.indexOf("200")>-1){
				window.location.reload();
			}
			else if(e.indexOf("100")>-1)message("Oops! Algo ha fallado,intentalo de nuevo");
			else message(e)
		}
		})
		}
	</script>
</body>
</html>