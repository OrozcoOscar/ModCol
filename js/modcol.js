////////----------------variables-----------------------/////////////
let canvas,ctx,obj=[],objT=[],select=[],N=0,
accion="null",
objS="null",//lo q quiero hcer 
x_,y_,xf_,yf_,zoom=100;
let expo=false,issave=true;

////////////--------funciones-----------------/////////////////////
window.onload=function () {
			
			canvas=document.querySelector("#canvas");
			canvas.width=window.screen.width*9/4;
			canvas.height=window.screen.height*3;
			ctx=canvas.getContext("2d");
			ctx.lineWidth=1;

			importM();
		canvas.onmousedown=(e)=>{
				$("#opciones").css({"display":"none"})
				issave=false;
				 x_=Math.round(e.offsetX);
				 y_=Math.round(e.offsetY);
					core(x_,y_)
					
				}
		canvas.onmousemove=(e)=>{

				let x=Math.round(e.offsetX);
				let y=Math.round(e.offsetY);
				if(objS.type!="null" && objS.type!=undefined && accion=="null"){// && obj[objS].id!="line"){//mover
					try{
						xf_=objS.xf-objS.x;
						yf_=objS.yf-objS.y;
							
					}catch(e){}
					objS.x=x-x_;
					objS.y=y-y_;

					try{
					objS.xf=objS.x+xf_;
					objS.yf=objS.y+yf_;
					}catch(e){}
					actualizar()
				}else if(accion=="create"){

					setObj(objS,x_,y_,x,y)
					actualizar()
				}else if(accion=="resize"){
					resizeObj(objS,x,y)
					actualizar()
				}else if(accion=="move" && objS=="canvas"){
					move_all(x_,y_,x,y)
					actualizar()
				}else if(accion=="select"){
					actualizar()
					selecionar(x_,y_,x,y)
				}else if(accion=="moveS"  && objS=="allS"){
					moveS(x_,y_,x,y)
					actualizar()
				}
			}
		canvas.onmouseup=()=>{
			$("#canvas").css({"cursor":"default"})
			if(accion=="create" && objT.length>=2){
				obj.push(objT[objT.length-1]);
				objT=[];
			}
			if(objS!="line" && objS!="line_a" && objS!="line_c" && objS!="line_h" && accion!="move"  && accion!="moveS"){
				objS="null";
				accion="null";

				$("#herramientas button").css({"background":"#57585d"})
			}
			if(accion=="move" || accion=="moveS")objS="null";
			/////////////////////////////////////////
			if(select.length==1){
				obj.map((o,i)=>{
					if(o.id==select[0]){
						set_eventos(i,o)
					}
				})
			}
		}

actualizar()
}
function getObj(e){
			x_=null,y_=null
			$("#herramientas button").css({
				"background":"#ffffff",
				"color":"#000000"
			})
			e.setAttribute("style","background:#1e8bc5");
			if(e.value!="move" && e.value!="select" && e.value!="moveS")objS=e.value;
			else accion=e.value
			if(e.value=="null"){
				select=[]
				objS=e.value;
				accion=e.value
			}
		}
function core(x,y){
				
				
				if(objS=="null" && accion=="null"){
					for (let i = obj.length-1; i >= 0; i--) {
						obj[i].color="black";
						
						if(x>=obj[i].x&& x<=obj[i].w+obj[i].x&& y>=obj[i].y&& y<=obj[i].h+obj[i].y){
							objS=obj[i];
							select=[];
							x_=x-objS.x;     
							y_=y-objS.y;
							
							objS.color="#52b8ff";
							for (let e = 0; e < obj.length; e++) {
								if(i!=e)obj[e].color="black";
							}

							set_eventos(i,objS);
							actualizar();
							return true;
						}else if(obj[i].type.indexOf("line")<0 &&x>=obj[i].w+obj[i].x&& x<=obj[i].w+obj[i].x+15&& y>=obj[i].h+obj[i].y&& y<=obj[i].h+obj[i].y+15){
							accion="resize"
							objS=obj[i];
							objS.color="#52b8ff";
							for (let e = 0; e < obj.length; e++) {
								if(i!=e)obj[e].color="black";
							}
							return true;
						}else{select=[];}
						
					}

					$("#opciones button").css({"display":"none"})
					actualizar();
				}else if(accion=="move"){
						objS="canvas"
						$("#canvas").css({"cursor":"move"})
						$("#move").css({"background":"#1e8bc5","color":"white"})
				}else if(accion=="select"){select=[]}
				else if(accion=="moveS"){
					objS="allS"
					$("#canvas").css({"cursor":"move"})
					$("#moveS").css({"background":"#1e8bc5","color":"white"})

				}
				else{
					select=[]
					accion="create"
					line()
				}
		}
		
function actualizar(){
			ctx.fillStyle="#F8F8F8";
			ctx.fillRect(0,0,canvas.width,canvas.height);
			if(!expo){
				for (let i = 0; i < canvas.width; i+=20) {//pinta la malla
				
				ctx.fillStyle="#AAA9A9";
				ctx.fillRect(0,i,canvas.width,2);
				ctx.fillStyle="#AAA9A9";
				ctx.fillRect(i,0,2,canvas.height);
				
			}
			}
			
			obj.map((i)=>{
				try{
					i.paint();
				}catch(e){}

			})
				try{
					objT[objT.length-1].paint();
				}catch(e){}
}
function resizeObj(i,x,y){
			i.w=x-i.x-7;
			i.h=y-i.y-7;
		}	
function frenteObj(i){
			if(obj[i+1]!=null){
				var aux=obj[i+1];
				obj[i+1]=obj[i];
				obj[i]=aux;
				set_eventos((i+1),obj[i+1])
	
						
			}
				actualizar()
		}
function atrasObj(i){
			if(obj[i-1]!=null){
				var aux=obj[i-1];
				obj[i-1]=obj[i];
				obj[i]=aux;
				set_eventos((i-1),obj[i-1])
			}
				actualizar()
		}
function dellObj(i){
			var op=document.querySelector("#opciones");
			try{
				obj.splice(i,1);
			}catch(e){}
			op.setAttribute("style","display:none");
			actualizar()
		}
function move_all(x_,y_,x,y){
			let  _x_=4;
			let  _y_=4;

			
			if(x<x_)_x_=-_x_;
			if(x==x_)_x_=0
			if(y<y_)_y_=-_y_;
			if(y==y_)_y_=0

			
			obj.map((i)=>{
				try{
					xf_=i.xf-i.x;
					yf_=i.yf-i.y;
				}catch(e){}
					
				i.x+=_x_;
				i.y+=_y_;

				try{
					i.xf=i.x+xf_;
					i.yf=i.y+yf_;
				}catch(e){}
			})
			actualizar()
		}

function mas(){
			scala=1.2244;
			zoom+=10;
			$(".porc").html(zoom+"%");
			obj.map((i)=>{
				i.x*=scala;//zoom obj
				i.y*=scala;
				if(i.type.indexOf("line")<0){
					i.w*=scala;//zoom obj
					i.h*=scala;
				}
				try{
					i.xf*=scala;//zoom line
					i.yf*=scala;
				}catch(e){}
			})
			actualizar()
		}
function menos(){
			scala=1.2244;
			zoom+=-10;
			$(".porc").html(zoom+"%");
			obj.map((i)=>{
				i.x/=scala;//zoom obj
				i.y/=scala;
				if(i.type.indexOf("line")<0){
					i.w/=scala;//zoom obj
					i.h/=scala;
				}
				try{
					i.xf/=scala;//zoom line
					i.yf/=scala;
				}catch(e){}
			})
			actualizar()
		}
function line(){
		try{
			if(objS.indexOf("line")>-1){
				if(objT.length<2){
					objT.push({x:x_,y:y_})
					ctx.fillStyle="black";
					ctx.fillRect(objT[0].x,objT[0].y,9,9);
				}
				if(objT.length==2){
					if(objS.split("_")[1]=="a"){
						try{
						obj.push(new Agregacion("line_a",++N,objT[0].x,objT[0].y,objT[1].x,objT[1].y))
						}catch(e){}
					}else if(objS.split("_")[1]=="c"){
						try{
						obj.push(new Composicion("line_c",++N,objT[0].x,objT[0].y,objT[1].x,objT[1].y))
						}catch(e){}
					}
					else if(objS.split("_")[1]=="h"){
						try{
						obj.push(new Herencia("line_h",++N,objT[0].x,objT[0].y,objT[1].x,objT[1].y))
						}catch(e){}
					}else{
						try{
						obj.push(new Line("line",++N,objT[0].x,objT[0].y,objT[1].x,objT[1].y))
					}catch(e){}
					}
					
					objS="null";
					objT=[]
				}

			}
		}catch(e){}
			
			actualizar();
		}
function moveS(x_,y_,x,y){
			let  _x_=4;
			let  _y_=4;

			
			if(x<x_)_x_=-_x_;
			if(x==x_)_x_=0
			if(y<y_)_y_=-_y_;
			if(y==y_)_y_=0

			
			obj.map((i)=>{
				select.map((j)=>{
					if(i.id==j){
						try{
							xf_=i.xf-i.x;
							yf_=i.yf-i.y;
						}catch(e){}
							
						i.x+=_x_;
						i.y+=_y_;

						try{
							i.xf=i.x+xf_;
							i.yf=i.y+yf_;
						}catch(e){}
					}
				
				})
			})
			actualizar()
		}
function selecionar(x_,y_,x,y){

	if(x_!=null && y_!==null){
			
			ctx.strokeStyle="black"
			ctx.strokeRect(x_,y_,x-x_,y-y_);
			obj.map((i)=>{
		if(i.x>=x_ && i.y>=y_ && i.x<=x && i.y<=y &&  i.w<=x-x_ && i.h<=y-y_ ){

			if(select.indexOf(i.id)<0)select.push(i.id)	
			i.color="#52b8ff";
				
		}else{
			i.color="#000000";
			if(select.indexOf(i.id)>=0)select.splice(select.indexOf(i.id),1)
			}

	})


	}else{
		select=[]
	}
}
function save(){

	let mod =JSON.stringify(obj);
	mod =mod.substring(0,mod.length-1);
	if(name==undefined || name==""){
		name=prompt("Ingrese el nombre del modelo")
		$.ajax({
		type:"POST",
		url:"existe.php",
		data:{"n":name,"m":tipo},
		success:(e)=>{
		if(e=="101")name=prompt("Ingrese otro nombre");
		}
		})
		if(name){
			

		$.ajax({
		type:"POST",
		url:"save.php",
		data:{"u":uss,"n":name,"m":mod+",{\"N\":"+N+"}]","t":tipo},
		success:(e)=>{
		if(e=="200"){
				issave=true;
				message("Se ha guardado con exito");
		}  
		else if(e=="100")message("Oops! Algo ha fallado,intentalo de nuevo");
		else message(e)
		}
		})
		}
		
	}else{
		
		$.ajax({
		type:"POST",
		url:"save.php",
		data:{"u":uss,"n":name,"m":mod+",{\"N\":"+N+"}]","t":tipo},
		success:(e)=>{
		if(e=="200"){
				issave=true;
				message("Se ha guardado con exito");
		} 
		else if(e=="100")message("Oops! Algo ha fallado,intentalo de nuevo");
		else message(e)
		}
		})
	}
	$("#name_modelo").html(name);
}

function importM(){
		$(document).ready(()=>{
			setTimeout(()=>{
				try{
				let modelo=eval(data)
				modelo.map((i)=>{
				let {type,id,x,y,w,h,nombre,color,xf,yf,variables,metodos,card,N}=i
				if(type=="class"){
					let c=new Clase(type,id,x,y,w,h,nombre,color)
					c.set_variables(variables)
					c.set_metodos(metodos)
					obj.push(c)

				}
				else if(type=="pack")obj.push(new Pack(type,id,x,y,w,h,nombre,color))
				else if(type=="line")obj.push(new Line(type,id,x,y,xf,yf,card))
				else if(type=="line_a")obj.push(new Agregacion(type,id,x,y,xf,yf,card))
				else if(type=="line_c")obj.push(new Composicion(type,id,x,y,xf,yf,card))
				else if(type=="line_h")obj.push(new Herencia(type,id,x,y,xf,yf,card))
				else if(type=="caja")obj.push(new Caja(type,id,x,y,w,h,nombre,color))
				else if(type=="skin")obj.push(new Skin(type,id,x,y,w,h,nombre,color))
				else if(type=="ovalo")obj.push(new Ovalo(type,id,x,y,w,h,nombre,color))
			})	
				}catch(e){
					//("algo salio mal,por favor recarga la pagina")
				}
			
		actualizar()			
		},299)
		})
	
	
}
let file;
function exportar(){
	expo=true;
	
	obj.map((i)=>{try{i.help=false;}catch(e){}});
	actualizar();
	while(zoom<100)mas();
	while(zoom>100)menos();
	img=canvas.toDataURL("image/png");
	img=img.replace("image/png","image/octet-stream")
	
	$.ajax({
		type:"POST",
		url:"modcol_cripting.php",
		data:{"o":"wp34","f":JSON.stringify(obj)},
		success:(e)=>{
		file=e;
		}
		})
	message("<a href="+img+" download='"+name+".png'>Descargar imagen</a> <br><a href=# onclick=\"downloadFile('"+name+".["+tipo+"]modcol')\" >Descargar Proyecto</a>");
		
	expo=false;
	
	obj.map((i)=>{try{i.help=true;}catch(e){}});
	actualizar();
}
function downloadFile(filename) {
	message("LOADING...")
	setTimeout(()=>{
    let link = document.createElement('a');
   link.setAttribute('download', filename);
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
    link.click(); 
    document.querySelectorAll(".message")[document.querySelectorAll(".message").length-1].remove();
	},999)
	 
}

function set_eventos(i,o){
			$("#opciones button").css({"display":"none"})
			document.querySelector("#e_metodo").setAttribute("onclick","obj["+i+"].edit_metodo("+i+")");
			document.querySelector("#e_variable").setAttribute("onclick","obj["+i+"].edit_variable("+i+")");
			document.querySelector("#d_metodo").setAttribute("onclick","obj["+i+"].dell_metodo("+i+")");
			document.querySelector("#d_variable").setAttribute("onclick","obj["+i+"].dell_variable("+i+")");

			document.querySelector("#duplicate").setAttribute("onclick","obj["+i+"].duplicate()");
			document.querySelector("#dell").setAttribute("onclick","dellObj("+i+")");
			document.querySelector("#t_frente").setAttribute("onclick","frenteObj("+i+")");
			document.querySelector("#e_atras").setAttribute("onclick","atrasObj("+i+")");
			document.querySelector("#nombre").setAttribute("onclick","obj["+i+"].set_nombre()");
			document.querySelector("#a_metodo").setAttribute("onclick","obj["+i+"].set_metodo()");
			document.querySelector("#a_variable").setAttribute("onclick","obj["+i+"].set_variable()");
			document.querySelector("#card").setAttribute("onclick","obj["+i+"].set_card()");
			document.querySelector("#obj").innerHTML=o.type;

			$("#opciones").css({
				"display":"block",
				"top":o.y+"px",
				"left":(39+o.w+o.x)+"px"
			})
			
			$("."+o.type+",.default").css({
				"display":"block"
			})
			$("."+o.type.split("_")[0]).css({
				"display":"block"
			})
}
let mensajes;
function chat() {
	load_message();
	chat_content='<div class="chat_content"><div class="mensajes"></div><div class="bar"><form id="form" onsubmit="send_message()"><input type="text" id="message" placeholder="Mensaje" required><input type="submit"></form></div>'
	message(chat_content);
	
	$("#form").submit(false);
	try{
		let int=setInterval(()=>{$(".mensajes").html(mensajes)},999);
	}catch(e){}
	

}
function load_message() {
$.ajax({
		type:"POST",
		url:"load_message.php",
		data:{"m":im,"x":"qws"},
		success:(e)=>{
			mensajes=e;
		}
		})
}

function send_message() {
	$.ajax({
		type:"POST",
		url:"send.php",
		data:{"m":im,"message":$("#message").val()},
		success:(e)=>{
		load_message();
		$("#message").val("")
		}
		})
	return false;
}
//window.onbeforeunload=()=>{if(!issave){return true}}