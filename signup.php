<?php 

session_start();
if(!empty($_SESSION['user_code'])){
header("location:./home");
}

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sign Up</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="imagenes/logo.jpg">
	<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/reg.css">

</head>
<body>
	<header>
		<a href="index.html" class="logo"><img src="imagenes/logo.jpg" alt=""><span>MODCOL</span></a>
		<nav>
                    <a href="index.php" >Inicio</a>
                    <a href="login.php" >Iniciar Sesión</a>
                </nav>
	</header>
	<section class="contain">
		<h3>Registrate</h3>
		<form id="form" onsubmit="reg()">
			<input class="campo" type="text" placeholder="Nombre" id="n" required>
			<input class="campo" type="text" placeholder="Apellido" id="a" required>
			<input class="campo" type="email" placeholder="Correo" id="u" required>
			<input class="campo" type="password" placeholder="Contraseña" id="c" required>
			<input class="campo" type="password" placeholder="Repite Contraseña" id="c2" onkeyup="val()" onkeypress="val()" required >
			<div>
				<input class="boton" type="submit" value="Continuar">
			</div>
			
			<a href="login.php">¡Ya tengo cuenta!</a>
			<div class="res"></div>
		</form>
	</section>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/import.js"></script>
	<script type="text/javascript" src="js/reg.js"></script>
</body>
</html>