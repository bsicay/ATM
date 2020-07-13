class Billete{
    constructor(v, c){
        this.image = new Image();
        this.valor = v;
        this.cantidad = c;
        this.image.src = imagenes[this.valor];
    }
    mostrar(){
      //document.body.appendChild(this.image);
      var p = document.createElement("p");
      resultado.appendChild(p);
      p.innerHTML += this.cantidad + " billetes de $" + this.valor + "<br />";
      p.appendChild(this.image);
    }
}

var imagenes = [];
imagenes[10] = "10dollar.png";
imagenes[20] = "20dollar.png";
imagenes[100] = "100dollar.png";

//console.log(Billete.image)

function entregarDinero(){
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(let bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }else{
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero  = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0){
        resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cantidad";
    }else{
        for(let e of entregado){
            if(e.cantidad > 0){
               e.mostrar();
            }    
        }
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100,10));
caja.push( new Billete(20,10));
caja.push( new Billete(10,10));


var dinero = 0;
var div = 0;
var papeles = 0;    

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);