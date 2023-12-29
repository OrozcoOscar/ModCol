function invitar(i,idM=null){
	$(".res_models").css({"display":"block"});
	if(idM!=null){
		$.ajax({
		type:"POST",
		url:"invitar.php",
		data:{"u":i,"m":idM},
		success:(e)=>{
			if(e.indexOf("200")>-1){
				message("Se ha invitado con exito");
				cargar_m();
				$(".res_models").css({"display":"none"});
			}
			else if(e.indexOf("100")>-1)message("Oops! Algo ha fallado,intentalo de nuevo");
			else message(e)
		}
		})
	}else{
		$(".invitar").css({"display":"flex"});
		$(".it").load("share_models.php?id="+i);

	}

}
function show_p(id){
		$(".res_models").css({"display":"none"});
	$.ajax({
		type:"POST",
		url:"showUSers.php",
		data:{"u":id,"m":id},
		success:(e)=>{
			 $(".res").html(e);
		}
		})
}
function show_models(id){
	$(".res_models").html("");
	$.ajax({
		type:"POST",
		url:"we_models.php",
		data:{"u":id,"m":id},
		success:(e)=>{
		$(".res_models").html(e+"<button onclick=invitar('"+id+"')>Invitar</button>");
		}
		})
}
function ver(id,tipo) {
	$.ajax({
		type:"POST",
		url:"session.php",
		data:{"u":id,"m":id},
		success:(e)=>{
		if(e.indexOf("200")>-1)window.location.href="modcol.php?tipo="+tipo;
		else alert(e)
		}
		})
}
function dell(i){
	if(confirm("Esta seguro que desea borrar este elemento?")){
		$.ajax({
		type:"POST",
		url:"dell_m.php",
		data:{"m":i,"u":id},
		success:(e)=>{
		if(e.indexOf("200")>-1){
			message("Se ha elimidado con exito");
			cargar_m();
		}
		else if(e.indexOf("100")>-1)message("Oops! Algo ha fallado,intentalo de nuevo");
		else message(e)
		}
		})
	}
	
}

function crear_m(tipo=null){
	if(tipo==null){
		$(".create").css({"display":"flex"})
	}else{
		window.location.href="modcol.php?tipo="+tipo;
	}
}
setInterval(cargar_m,2000)
function cargar_m(){
	$(".mis_modelos").load("load_models.php");
}

function search(){
	$(".invitar").css({"display":"none"});
	$(".res_models").html("");
	$.ajax({
		type:"POST",
		url:"search.php",
		data:{"s":$("#search").val(),"u":id},
		success:(e)=>{
			$(".res").html(e);
			$(".res_models").css({"display":"block"});
			}
		})
}

function subirModelos(e=null){
	if(e==null){
		message("<input type='file' id='file-input' /> <button onclick=subirModelos(2)>Subir</button>")
			document.getElementById('file-input')
		   addEventListener('change', leerArchivo, false);
	}else{
		$.ajax({
		type:"POST",
		url:"modcol_cripting.php",
		data:{"file":contenido,"n":file_name,"u":id},
		success:(e)=>{
			message(e);
			}
		})
	}
	

    
}
var contenido,file_name;
function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  console.log(e)
  var lector = new FileReader();
  lector.onload = function(e) {
    contenido = e.target.result;
    file_name = document.querySelector("#file-input").value.split("\\");
   	file_name=file_name[file_name.length-1]
  };
  lector.readAsText(archivo);
}


