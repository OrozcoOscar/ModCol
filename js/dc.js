class Clase extends Obj{
	constructor(type,id,x,y,w,h,nombre){
		super(type,id,x,y,w,h,nombre)
		this.variables=Array()
		this.metodos=Array()
	}
	edit_variable(i,pv=null,e){
		if (pv!=null) {
			let txt=prompt("Ingresa el nuevo valor ",this.variables[pv]);
			try{
			if(txt.length>0){
					this.variables[pv]=txt;
					actualizar();
				}
			}catch(e){}
			
		}else{
			let salida="<h3>Escoje la variable a editar</h3><br>";
			this.variables.map((e,p)=>{
				salida+="<button onclick=obj["+i+"].edit_variable("+i+","+p+",this)>"+e+"</button>";
			})
			message(salida);
			salida="";
		}

	}
	edit_metodo(i,pv=null,e){
		if (pv!=null) {
			let txt=prompt("Ingresa el nuevo valor ",this.metodos[pv]);
			try{
				if(txt.length>0){
			this.metodos[pv]=txt;
			actualizar();
			}
		}catch(e){}
			
		}else{
			let salida="<h3>Escoje la metodo a editar</h3><br>";
			this.metodos.map((e,p)=>{
				salida+="<button onclick=obj["+i+"].edit_metodo("+i+","+p+",this)>"+e+"</button>";
			})
			message(salida);
			salida="";
		}

	}
	dell_variable(i,pv=null,e){
		if (pv!=null) {

			if(confirm("seguro que desea eliminar este elemento?")){
			this.variables.splice(pv,1);
			e.remove();
			actualizar();
			}
		}else{
			let salida="<h3>Escoje la variable a eliminar</h3><br>";
			this.variables.map((e,p)=>{
				salida+="<button onclick=obj["+i+"].dell_variable("+i+","+p+",this)>"+e+"</button>";
			})
			message(salida);
			salida="";
		}

	}
	dell_metodo(i,pv=null,e){
		if (pv!=null) {
			if(confirm("seguro que desea eliminar este elemento?")){
			this.metodos.splice(pv,1);
			e.remove();
			actualizar();
			}
			
		}else{
			let salida="<h3>Escoje el metodo a eliminar</h3><br>";
			this.metodos.map((e,p)=>{
				salida+="<button onclick=obj["+i+"].dell_metodo("+i+","+p+",this)>"+e+"</button>";
			})
			message(salida);
			salida="";
		}

	}
	set_variables(v){
		this.variables=v;
	}
	set_metodos(m){
		this.metodos=m
	}
	set_nombre(){
		let n=prompt("Ingrese el nombre");
		try{
			this.nombre=n[0].toUpperCase()+n.substr(1)
		}catch(e){}
		
		actualizar()
	}
	set_variable(){
		let v=prompt("Ingrese el nombre de la variable");
		try{
			this.variables.push("- "+v)
		}catch(e){}
			
			if(this.variables.length>1){
				if(this.metodos.length>1)this.h+=font_size
			}
	actualizar()
	}
	set_metodo(){
		let m=prompt("Ingrese el nombre del metodo");
		try{
			this.metodos.push("- "+m)
		}catch(e){}
			
			if(this.metodos.length>1)this.h+=font_size
	actualizar()
	}
	duplicate(){
		let myClass=new Clase(this.type,++N,10+this.x,10+this.y,this.w,this.h,this.nombre,this.color);
		let m=Array(this.metodos).toString().split(",")
		let v=Array(this.variables).toString().split(",")
		myClass.set_metodos(m)
		myClass.set_variables(v)
		obj.push(myClass)
		actualizar()
	}
	paint(){
		let max=5;
		this.variables.map((e)=>{
			if(e.length>max){
				max=e.length;
			}
		})
		this.metodos.map((e)=>{
			if(e.length>max){
				max=e.length;
			}
		})
		if(this.nombre.length>max){
				max=this.nombre.length;
			}
		if(this.w<(max)*font_size)this.w=(max)*font_size;
		if(this.h<(this.variables.length+this.metodos.length+2)*font_size)this.h=(this.variables.length+this.metodos.length+2)*font_size;
		
		ctx.fillStyle="white";
		ctx.fillRect(this.x,this.y,this.w,this.h);
		if(this.help)ctx.fillRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.strokeStyle=this.color;
		ctx.fillStyle=this.color;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
		ctx.fillRect(this.x,this.y+24,this.w,2);//name line
		if(this.help)ctx.strokeRect(this.w+this.x,this.h+this.y,15,15);//resize
		//------------------------------NAME-------------------------------------------
		ctx.font="bold "+font_size+"px sans-serif";
		ctx.fillText("	"+this.nombre,this.x+5,(this.y+font_size));//NAME
		//--------------------------------vars-------------------------------------------------
		ctx.fillRect(this.x,this.y+24+this.variables.length*font_size+4,this.w,2);//var line
		for (let i = 0; i < this.variables.length; i++) {
				ctx.fillText(this.variables[i],this.x+5,(this.y+24)+i*font_size+font_size);
		}
		//----------------------------------Methods-------------------------------------
		for (let i = 0; i < this.metodos.length; i++) {
			ctx.fillText(this.metodos[i]+"()",this.x+5,(this.y+24+this.variables.length*font_size+4)+i*font_size+font_size);
		}
		
		
	}
}

class Pack extends Obj {
	constructor(type,id,x,y,w,h,nombre){
		super(type,id,x,y,w,h,nombre)
	}
	duplicate(){
		obj.push(new Pack(this.type,++N,10+this.x,10+this.y,this.w,this.h,this.nombre,this.color))
		actualizar()
	}
	set_nombre(){
		let n=prompt("Ingrese el nombre");
		this.nombre=n[0].toUpperCase()+n.substr(1)
		actualizar()
	}
	paint(){
		ctx.fillStyle="white";
		ctx.fillRect(this.x,this.y,this.w,this.h);
		if(this.help)ctx.fillRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.fillRect(this.x,this.y-30,this.w/3,30);//pestaña
		ctx.fillStyle=this.color;
		ctx.strokeStyle=this.color;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
		ctx.strokeRect(this.x,this.y-30,this.w/3,30);//pestaña
		if(this.help)ctx.strokeRect(this.w+this.x,this.h+this.y,15,15);//resize
		ctx.font="bold font_sizepx sans-serif";
		ctx.fillText(this.nombre,this.x+this.w/3,this.y+this.h/12);
	}
}

class Agregacion extends Line{
	constructor(type=null,id=null,x=0,y=0,xf=0,yf=0,card=["",""]){
		super(type,id,x,y,xf,yf,card);
	}
	duplicate(){
		obj.push(new Agregacion(this.type,++N,10+this.x,10+this.y,this.xf,10+this.yf,this.card))
		actualizar()
	}
	paint(){
		
		ctx.fillStyle=this.color;
		ctx.strokeStyle=this.color;
		ctx.beginPath()
		ctx.save()
		if(this.help){
			ctx.fillStyle="blue";
			ctx.arc(this.x,this.y,this.w,grad(0),grad(-360));
			ctx.fill()
		}
		this.show_card();
		let ang=m(this.x,this.y,this.xf,this.yf);
		if(this.x>this.xf && Math.abs(m(this.x,this.y,this.xf,this.yf))<=1){
			ang=grad(180)+ang;
		}
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.xf,this.yf);
		ctx.stroke();
		ctx.beginPath()
		ctx.save()
		ctx.translate(this.x,this.y)
		ctx.rotate(m(this.x,this.y,this.xf,this.yf)+grad(45*3))
		ctx.translate(-(this.x),-(this.y))
		ctx.strokeRect(this.x,this.y,font_size,font_size);
		ctx.fillStyle="white";
		ctx.fillRect(this.x,this.y,font_size,font_size);
		ctx.restore()
		
		ctx.stroke();

		}
}
class Composicion extends Line{
	constructor(type=null,id=null,x=0,y=0,xf=0,yf=0,card=["",""]){
		super(type,id,x,y,xf,yf,card);
	}
	duplicate(){
		obj.push(new Composicion(this.type,++N,10+this.x,10+this.y,this.xf,10+this.yf,this.card))
		actualizar()
	}
	paint(){
		
		
		ctx.strokeStyle=this.color;
		ctx.beginPath()
		ctx.save()
		if(this.help){
			ctx.fillStyle="blue";
			ctx.arc(this.x,this.y,this.w,grad(0),grad(-360));
			ctx.fill()
		}
		this.show_card();

		let ang=m(this.x,this.y,this.xf,this.yf);
		if(this.x>this.xf && Math.abs(m(this.x,this.y,this.xf,this.yf))<=1){
			ang=grad(180)+ang;
		}
		ctx.translate(this.x,this.y)
		ctx.rotate(m(this.x,this.y,this.xf,this.yf)+grad(45*3))
		ctx.translate(-(this.x),-(this.y))
		ctx.strokeRect(this.x,this.y,font_size,font_size);
		ctx.fillStyle="black";
		ctx.fillRect(this.x,this.y,font_size,font_size);
		ctx.restore()
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.xf,this.yf);
		ctx.stroke();

		}
}
class Herencia extends Line{
	constructor(type=null,id=null,x=0,y=0,xf=0,yf=0,card=["",""]){
		super(type,id,x,y,xf,yf,card);
		this.color="black"
	}
	duplicate(){
		obj.push(new Herencia(this.type,++N,10+this.x,10+this.y,this.xf,10+this.yf,this.card))
		actualizar()
	}
	paint(){
	
		
		
		ctx.strokeStyle=this.color;
		ctx.fillStyle=this.color;
		ctx.beginPath()
		ctx.save()
		if(this.help){
			ctx.fillStyle="blue";
			ctx.arc(this.x,this.y,this.w,grad(0),grad(-360));
			ctx.fill()
		}
		this.show_card();
		let ang=m(this.x,this.y,this.xf,this.yf);
		if(this.x>this.xf && Math.abs(m(this.x,this.y,this.xf,this.yf))<=1){
			ang=grad(180)+ang;
		}
		ctx.translate(this.x,this.y)
		ctx.rotate(ang)
		ctx.translate(-(this.x),-(this.y))
		/////////////////////////////////////////////////////
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.x+10,this.y-10);

		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.x+10,this.y+10);
		ctx.restore()
		///-------------------------------
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.xf,this.yf)
		
		ctx.stroke();

		}
}

function setObj(e,x_,y_,x,y){
		if(e=="class") objT.push(new Clase("class",++N,x_,y_,x-x_,y-y_))
		else if(e=="pack") objT.push(new Pack("pack",++N,x_,y_,x-x_,y-y_))

		}