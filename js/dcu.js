class Ovalo extends Obj{
	constructor(type,id,x,y,w,h,nombre){
		super(type,id,x,y,w,h,nombre)
	}
	set_nombre(){
		let n=prompt("Ingrese el texto");
		this.nombre=n[0].toUpperCase()+n.substr(1)
		actualizar()
	}

	duplicate(){
		obj.push(new Ovalo(this.type,++N,10+this.x,10+this.y,this.w,this.h,this.nombre,this.color))
		actualizar()
	}
	paint(){
		ctx.fillStyle="white";

		if (this.w<49) {this.w=49}
		if (this.h<49) {this.h=49}
		if(this.help)ctx.fillRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.strokeStyle=this.color;
		roundRect(ctx, this.x, this.y, this.w, this.h,28, true);
		ctx.fillStyle=this.color;
		if(this.help)ctx.strokeRect(this.w+this.x,this.h+this.y,15,15);//resize
		
		//------------------------------NAME-------------------------------------------
		ctx.font="bold 20px sans-serif";
		ctx.fillText("	"+this.nombre,this.x+this.w/3,this.y+22);//NAME
		//--------------------------------vars-------------------------------------------------
		
	}
}
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
		ctx.font="bold 20px sans-serif";
		ctx.fillText("	"+this.nombre,this.x+5,this.y+22);//NAME
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
		ctx.font="bold "+30+"px sans-serif";
		ctx.fillText(this.nombre,this.x-15,this.y+this.h+29);
		var img = new Image();
		img.src = '../imagenes/skin.png';
		ctx.drawImage(img, this.x,this.y,this.w,this.h);
	}
}

///funcion extraida de http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html?m=1
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }        
}

function setObj(e,x_,y_,x,y){
		if(e=="caja") objT.push(new Caja("caja",++N,x_,y_,x-x_,y-y_))
		if(e=="skin") objT.push(new Skin("skin",++N,x_,y_,x-x_,y-y_))
		if(e=="ovalo") objT.push(new Ovalo("ovalo",++N,x_,y_,x-x_,y-y_))
		
		}