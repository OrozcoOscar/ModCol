<?php 

session_start();
if(!empty($_SESSION['user_code'])){
header("location:./home");
}

 ?>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> MODCOL </title>
        <link rel="shortcut icon" type="image/x-icon" href="imagenes/logo.jpg">
        <meta name="description" content="Diseña y modela de manera colaborativa online">
        <meta name="keywords" content="MODCOL, uml, modelar, alto nivel">
        <link rel="stylesheet" href="css/index.css" > 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"> 
        
    </head>

    <body>

            <header>

                <nav>
                    <a href="login.php" >Iniciar sesion</a>
                    <a href="signup.php" >Registrarse</a>
                    <a href="#contactos">Contacto</a>
                    
                </nav>
                <section class="textos-header">
                    <h1>Crea, diseña, y modela en equipo</h1>
                    <h2>Usando la herramienta de modelado online más usada del planeta</h2>
                </section>
                <div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C501.41,47.86 -0.27,49.83 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: rgb(0, 0, 0);"></path></svg></div>
            </header>

            <main>
                <section class="contenedor">
                   <h2 class="titulo">¿Qué es MODCOL?</h2>
                    <div class="contenedor-sobre-nosotros">
                        <img src="imagenes/miniatura.png" alt="" class="miniatura">

                        <div class="descripcion">
                            <h3 class="doble"><span>1</span>    Modelar en equipo, en cualquier momento, y en cualquier lugar
                                                                Sácale provecho a las herramientas de modelado online
                                                                del mercado</h3>
                            <h3><span>2</span> Es fácil, práctico, y agradable</h3>
                        </div>
                    </div>
                   
                </section>

                <section class="servicios">
                    <div class="contenedor">
                        <div class="servicios">
                            <div class="servicio">
                                <img class="foto" src="imagenes/crear.png" alt="">
                                <h3 class="titulo">Crea</h3>
                                <p> Crea el modelo todos los modelos que necesites</p>
                            </div>
                            <div class="servicio">
                                <img class="foto" src="imagenes/editar.png" alt="">
                                <h3 class="titulo">Edita</h3>
                                <p> Cambia o rediseña tus modelos</p>
                            </div>
                            <div class="servicio">
                                <img class="foto" src="imagenes/idea.png" alt="">
                                <h3 class="titulo">Comparte</h3>
                                <p> Invita a tus colegas a trabajar en tus modelos</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </section>
            </main>
                <footer>
                    <div class="contenedor-footer">
                        <div class="content-foot">
                            <img class="contactos" src="imagenes/llamar.png" alt="">
                            <h4>Llamanos</h4>
                            <p>3234324922</p>
                        </div>
                        <div class="content-foot">
                            <img class="contactos" src="imagenes/correo.png" alt="">
                            <h4> <a name="contactos">Evíanos un correo</a> </h4>
                            <p><a href="mailto:jesusclaus11@gmail.com">jesusclaus11@gmail.com</a> </p>
                        </div>
                    </div>
                </footer>
            

    </body>




</html>