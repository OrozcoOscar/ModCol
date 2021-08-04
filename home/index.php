<?php 
error_reporting(0);
session_start();
include "cn.php";
$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$_SESSION['model_code']="";
$row=set_sql("SELECT id,correo,nombre FROM usuario WHERE id='$id'");
if(!$row){
header("location:../login.php");
}
	
 ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../css/home.css">
	<title>Modcol</title>
	
</head>
<body>
	<header>
		<a href="#" class="logo"><img src="../imagenes/logo.jpg" alt=""><span>MODCOL</span></a>
		<nav>
                    <a href="perfil.php" >Perfil</a>
                    <a href="salir.php" >Salir</a>
                   
                </nav>
	</header>
	<div class="create">
		<div class="modelos_d">
			<button class="cerrar" onclick="cerrar(this)">X</button>
			<span>Escoje el modelo de tu preferencia</span><br>
			<div class="t">
				<button onclick="subirModelos()" id="IMPORTAR">IMPORTAR MODELO</button>
				<button onclick="crear_m('dc')">Diagrama de Clases</button>
				<button onclick="crear_m('ds')">Diagrama de Secuencia</button>
				<button onclick="crear_m('dcu')">Diagrama de Casos de Uso</button>
			</div>
		</div>
	</div>
	<div class="invitar">
		<div class="modelos_d">
			<button class="cerrar" onclick="cerrar(this)">X</button>
			<span>Escoje el modelo a compartir</span><br>
			<div class="it">
				
			</div>
			
		</div>
	</div>
	<div class="contain">
		<div class="users">
			<input type="text" placeholder="Buscar personas" id="search" onkeypress="search()">
			<input type="submit" value="Buscar" onclick="search()">
				<div class="res"></div>
				<div class="res_models"></div>
		</div>
		<div class="mis_modelos">
		</div>
	
	</div>
	<center><button onclick="crear_m()" class="new">+</button></center>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/import.js"></script>
	<script type="text/javascript" src="../js/home.js"></script>
	<?php echo "<script>let id=$id;</script>"; ?>
</body>
</html>