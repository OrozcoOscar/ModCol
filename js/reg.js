$("#form").submit(false)
let est = false;
function val(){
	if($("#c").val()==$("#c2").val()){
		$(".res").html("");
		est=true;
	}else{
		$(".res").html("Las contraseñas no coinciden");
		est = false;
	}
	
}
function reg() {
	if(est){
		$.ajax({
		type:"POST",
		url:"reg.php",
		data:{"n":$("#n").val(),"a":$("#a").val(),"u":$("#u").val(),"c":$("#c").val()},
		success:(e)=>{
			if(e=="200"){
				window.location.href="./log.html";
			}
			else if(e=="100")message("Oops! Algo ha fallado,intentalo de nuevo");
			else if(e=="101")message("Oops! El usuario ya esta registrado");
			else message(e)
		}
		})
	return false;
}else{
	message("Revisa los campos ");
}
	
}