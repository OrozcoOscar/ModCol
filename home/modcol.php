<?php 
error_reporting(0);
session_start();
include "cn.php";
$id=$_SESSION['user_code'];

if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$nom="";
try {
	$nom=$_SESSION['model_code'];
} catch (Exception $e) {}

if(set_sql("SELECT id,nombre FROM usuario WHERE id='$id'")){
	if($_GET["tipo"]=="dc"){
		$opc='<button class="icon-class" id="class" value="class" onclick="getObj(this)" title="Clase"></button>
		<button class="icon-pack" id="pack" value="pack" onclick="getObj(this)" title="Packete"></button>
		<button class="icon-line" id="line" value="line" onclick="getObj(this)" title="Linea"></button>
		<button class="icon-herencia" id="line_h" value="line_h" onclick="getObj(this)" title="Herecia"></button>
		<button class="icon-agregacion" id="line_a" value="line_a" onclick="getObj(this)" title="Agregacion"></button>
		<button class="icon-composicion" id="line_c" value="line_c" onclick="getObj(this)" title="Composicion"></button>';
	}
	else if($_GET["tipo"]=="ds"){
		$opc='<button id="caja" class="icon-caja" value="caja" onclick="getObj(this)" title="Caja"></button>
		<button class="icon-line" id="line" value="line" onclick="getObj(this)" title="Linea"></button>
		<button id="skin"class="icon-skin"value="skin" onclick="getObj(this)" title="skin"></button>';
	}else if($_GET["tipo"]=="dcu"){
		$opc='<button id="caja" class="icon-caja" value="caja" onclick="getObj(this)" title="Caja"></button>
		<button id="ovalo" class="icon-ovalo" value="ovalo" onclick="getObj(this)" title="Ovalo"></button>
		<button class="icon-line" id="line" value="line" onclick="getObj(this)" title="Linea"></button>
		<button id="skin"class="icon-skin"value="skin" onclick="getObj(this)" title="skin"></button>';
	}
}else{
	header("location:../login.php");
}
	
 ?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/modcol.css">
<style>
	 <?php 

echo ".user_code$id{
			flex-wrap: wrap-reverse;
	}"
  ?>

</style>
</head>
<body>
	<header>
		<a href="index.php" class="logo"><img src="../imagenes/logo.jpg" alt=""><span>MODCOL</span></a>
			<nav>
                    <a href="./" >Inicio</a>
                    <a href="perfil.php" >Perfil</a>
                   
                </nav>
	</header>
	<span id="name_modelo">New model</span>
	
	<div id="herramientas">
		<button class="icon-chat" id="chat" value="chat" onclick="chat()" title="Chat"></button>
		<button class="icon-save" id="save" value="save" onclick="save()" title="Guardar"></button>
		<button class="icon-download" id="export" value="export" onclick="exportar()" title="Exportar"></button>
		<button class="icon-default" id="null" value="null" onclick="getObj(this)" title="Default"></button>
		<button class="icon-mover" id="move" value="move" onclick="getObj(this)" title="Mover"></button>
		<button class="icon-mover-seleccion" id="moveS" value="moveS" onclick="getObj(this)" title="Mover Seleccion"></button>
		<button class="icon-seleccionar" id="select" value="select" onclick="getObj(this)" title="Seleccionar"></button>

		<?php echo $opc; ?>
		
	</div><br><br><br>
	<div id="opciones">
		<span id="obj"></span>
		<button class="class pack skin caja ovalo" id="nombre" ><?php 
		if($_GET["tipo"]=="dc"){echo "nombre";} 
		else if($_GET["tipo"]=="ds" or $_GET["tipo"]=="dcu"){echo "Texto";}
		?></button>
		<button id="duplicate" class="default">duplicar</button>
		<button id="card" class="line" >cardinal</button>
		<button id="t_frente" class="default">Traer al frente</button>
		<button id="e_atras" class="default">Enviar atras</button>
		<button class="class" id="e_variable">Editar variable</button>
		<button class="class" id="e_metodo">Editar Metodo</button>
		<button class="class" id="a_variable">Agregar variable</button>
		<button class="class" id="a_metodo">Agregar Metodo</button>
		<button class="class" id="d_variable">Eliminar variable</button>
		<button class="class" id="d_metodo">Eliminar Metodo</button>
		<button id="dell" class="default">Eliminar</button>
		
	</div>
	<span class="zoom porc">100%</span><br><br>
	<div class="zoom">
		<button id="mas" onclick="mas()">+</button><button id="menos" onclick="menos()">-</button>
	</div>

	<canvas id="canvas"></canvas>

	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/import.js"></script>
	<?php if(!empty($_GET)){
			$tipo=$_GET['tipo'];
				echo "<script>let tipo='$tipo'; Import('../js/'+tipo+'.js');</script>\n";
			}else{
				echo "<script>window.location.href='./';</script>";
			} ?>
	<script type="text/javascript" src="../js/modcol.js"></script>
	<?php 
	
		$row=set_sql("SELECT * FROM modelo WHERE id='$nom' AND usuario REGEXP '[u]?".$id."[u]'");
		echo "<input type=hidden id=data value='".$row["archivo"]."'>";
		echo "<input type=hidden id=uss value='".$id."'>";
		echo "<input type=hidden id=name_m value='".$row["nombre"]."'>";
		echo "<input type=hidden id=im value='".$nom."'>";
		?>
	<script>
	let data,name,uss,im;	
		try{
			data=$("#data").val()
			uss=$("#uss").val()
			name=$("#name_m").val()
			im=$("#im").val()
			if(name!=undefined && name!="")$("#name_modelo").html(name)
		}catch(e){}
		
	</script>
</body>
</html>