class Obj{
	constructor(type=null,id=null,x=0,y=0,w=0,h=0,nombre="",color="black"){
		this.type=type
		this.id=id
		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.nombre=nombre
		this.color=color
		this.help=true;
	}
	set_color(c){
		this.color=c
	}

}
class Line{
	constructor(type=null,id=null,x=0,y=0,xf=0,yf=0,card=["",""]){
		this.type=type
		this.id=id
		this.x=x
		this.y=y
		this.xf=xf
		this.yf=yf
		this.w=9
		this.h=9
		this.help=true;
		this.color="black";
		this.card=card

	}
	show_card(){
		ctx.beginPath()
		ctx.save()
		ctx.fillStyle="black";
		ctx.font="bold 23px sans-serif";
		let a={x:0,y:0} ,b={x:0,y:0} ;
		if((this.yf-this.y)/(this.xf-this.x)<1){
			if(this.xf>this.x){
				a.x=29;
				a.y=-29;

				b.x=-29;
				b.y=-29;
			}else{
				a.x=-29;
				a.y=29;

				b.x=29;
				b.y=29;
			}
		}else{
			if(this.yf>this.y){
				
				a.x=29;
				a.y=29;

				b.x=29;
				b.y=-29;
			}else{
				a.x=-29;
				a.y=-29;

				b.x=-29;
				b.y=29;
			}
		}
		ctx.fillText(this.card[0],this.x+a.x,this.y+a.y)
		ctx.fillText(this.card[1],this.xf+b.x,this.yf+b.y)
		
	}
	set_card(e){

		if(e){
			let c_a=e.parentNode.children[0].value;
			let c_b=e.parentNode.children[1].value;
			if(c_a!="")this.card[0]=c_a;
			if(c_b!="")this.card[1]=c_b;
			e.parentNode.parentNode.children[0].click()
		}else{
			let po;
			obj.map((e,i)=>{if(e.id==this.id)po=i});
			message('<span>Ingrese los cardinales</span><br><input type="text" id="c_a" placeholder="Cardinal A" >'+
				'<input type="text" id="c_b" placeholder="Cardinal B" >'+
				'<input type="submit" onclick=obj['+po+'].set_card(this)>');

		}
		
	}
	duplicate(){
		obj.push(new Line(this.type,++N,10+this.x,10+this.y,this.xf,this.yf,this.card))
		actualizar()
	}
	paint(){
		
		ctx.beginPath()
		if(this.help){
			ctx.fillStyle="blue";
		ctx.arc(this.x,this.y,this.w,grad(0),grad(-360));
		ctx.fill()
		}
		this.show_card();
		ctx.fillStyle=this.color;
		ctx.strokeStyle=this.color;
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.xf,this.yf);
		ctx.stroke();//resize
		}

}
function cerrar(e){
	$("."+e.parentNode.parentNode.className).css({"display":"none"})
	try{
		document.querySelector(".message").remove();
	}catch(e){}
	

}
function message(m){
	if($(".message").length>0){
		$(".message .cont p").html(m)
	}else{
	
		$("body").append('<div class="message"><div class="cont"><button class="cerrar" onclick="cerrar(this)">X</button><p>'+m+'</p></div></div>')	
		
		
	}
	$(".message").css({"display":"flex"})
}
function m(x,y,xf,yf){
	return Math.atan((yf-y)/(xf-x));

}

function grad(g){

	return (g*Math.PI)/180;
}
function Import(url){
		this.script=document.createElement("script")
		this.script.src=url
		document.body.appendChild(this.script)
	}