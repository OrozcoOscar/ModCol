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
	<title>Inicia Sesion</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="imagenes/logo.jpg">
	<link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/log.css">
</head>
<body>
	<header>
		<a href="index.html" class="logo"><img src="imagenes/logo.jpg" alt=""><span>MODCOL</span></a>
			<nav>
                    <a href="index.php" >Inicio</a>
                    <a href="signup.php" >Registrarse</a>
                </nav>
	</header>
	<div class="contain">
		<h3>Inicio de sesion</h3>
		<form id="form" onsubmit="log()">
			<input class="campo" type="text" placeholder="Correo" id="u" required>
			<input class="campo" type="password" placeholder="Contraseña" id="c" required>
			<div>
				<input class="boton" type="submit" value="Continuar" >
			</div>
			<div>
				<p>¿No tienes una cuenta?<a href="signup.php"> Registrate aquí</a></p>
			</div>

			
		</form>
	</div>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/import.js"></script>
	<script type="text/javascript" src="js/log.js"></script>
</body>
</html>