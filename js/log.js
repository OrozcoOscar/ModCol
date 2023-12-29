$("#form").submit(false)
if(window.screen.width<499)message("Hemos detectado que estas en un dispositivo móvil, actualmente nuestros servicios no son compatibles con este tipo de dispositivos  por favor intenta ingresar desde un ordenador; si decides continuar te remondamos que solo veas mas no intentes editar modelos ")
function log() {
	$.ajax({
		type:"POST",
		url:"log.php",
		data:{"u":$("#u").val(),"c":$("#c").val()},
		success:(e)=>{
		
			if(e=="200"){
				window.location.href="./home";
			}
			else if(e=="100")message("Oops! Algo ha fallado,intentalo de nuevo");
			else message(e)
		}
		})
	return false;
}