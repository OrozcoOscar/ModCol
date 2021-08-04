class Caja extends Obj{
	constructor(type,id,x,y,w,h,nombre){
		super(type,id,x,y,w,h,nombre)
	}
	set_nombre(){
		let n=prompt("Ingrese el texto");
		this.nombre=n[0].toUpperCase()+n.substr(1)
		actualizar()
	}

	duplicate(){
		obj.push(new Caja(this.type,++N,10+this.x,10+this.y,this.w,this.h,this.nombre,this.color))
		actualizar()
	}
	paint(){
		ctx.fillStyle="white";
		ctx.fillRect(this.x,this.y,this.w,this.h);
		if(this.help)ctx.fillRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.strokeStyle=this.color;
		ctx.fillStyle=this.color;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
		if(this.help)ctx.strokeRect(this.w+this.x,this.h+this.y,15,15);//resize
		//------------------------------NAME-------------------------------------------
		ctx.font="bold "+font_size+"px sans-serif";
		ctx.fillText("	"+this.nombre,this.x+5,this.y+font_size+2);//NAME
		//--------------------------------vars-------------------------------------------------
	}
}

class Skin extends Obj {
	constructor(type,id,x,y,w,h,nombre){
		super(type,id,x,y,w,h,nombre)
	}
	duplicate(){
		obj.push(new Skin(this.type,++N,10+this.x,10+this.y,this.w,this.h,this.nombre,this.color))
		actualizar()
	}
	set_nombre(){
		let n=prompt("Ingrese el nombre");
		this.nombre=n[0].toUpperCase()+n.substr(1)
		actualizar()
	}
	paint(){
		
		ctx.fillStyle="white";
		if(this.help)ctx.fillRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.fillStyle=this.color;
		if(this.help)ctx.strokeRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.font="bold "+font_size+10+"px sans-serif";
		ctx.fillText(this.nombre,this.x-15,this.y+this.h+font_size+9);
		var img = new Image();
		img.src = '../imagenes/skin.png';
		ctx.drawImage(img, this.x,this.y,this.w,this.h);
	}
}



function setObj(e,x_,y_,x,y){
		if(e=="caja") objT.push(new Caja("caja",++N,x_,y_,x-x_,y-y_))
		if(e=="skin") objT.push(new Skin("skin",++N,x_,y_,x-x_,y-y_))
		
		}