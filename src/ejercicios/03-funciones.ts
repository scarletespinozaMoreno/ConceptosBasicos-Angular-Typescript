/*
    ===== Código de TypeScript =====
*/

function sumar1 (a ,b){
    return a +b ;
}

const resultado1 = sumar1 ('fernando' , 'herrera'); // debe estar los dos argumentos que pida ;a funcion


function sumar2 (a:number ,b:number){
  return a +b ;
}

const resultado2 = sumar2 (10 ,20); // retornara 30 pero sera un number

function sumar3 (a:number ,b:number){
  return (a +b).toString ;
}

const resultado3 = sumar3 (10 ,20); // retornara 30 pero sera un string 

function sumar4 (a:number ,b:number) :  number { // se especifica el tipo de dato de retorno
  return a +b;
}

const resultado4 = sumar4 (10 ,20); // retornara 30 pero sera un string 

// FUCION DE FLECHA especificando el tipo de dato de entrada y de retorno 

const sumarFlecha = (a: number, b: number) : number => {
  return a + b ;
}
;
function multiplicar ( numero: number , otronumero?:number, base: number=2) : number { // obligatorio , opcional , por defecto ( sino se envia toma a 2 caso contrario al numero que manda) esta mal poner ( numero: number , otronumero?:number, base: number) 
  return numero * base ;
}

//const resultado5 = multiplicar (10,20); // error deben estar todos los argumentos que  se solicite al declarar la funcion y en orden
const resultado5 = multiplicar (5); // correcto sale 10 porque la base es 2
const resultado6 = multiplicar (5,10,3); // aqui si quiero modificar el valor d ela base debo manda el que era opcional 

// CREA UN INTERFAZ
interface PersonajeLOR {
  nombre:string;
  pv:number;
  mostrarHp : ()=> void; // definir una funcion dentro de una interfaz 
}

// CREA UN OBJETO DE LA INTERFAZ 
const nuevoPersonaje : PersonajeLOR = {
  nombre : 'scarlet',
  pv : 50 ,
  mostrarHp(){
      console.log ('Puntos de vida', this.pv);
  }
}
// FUNCION QUE UTILIZA EL OBJETO 
function curar (personaje:PersonajeLOR , curarX:number) : void { // no retorna nada
      personaje.pv += curarX;

}


curar( nuevoPersonaje,20)
nuevoPersonaje.mostrarHp();