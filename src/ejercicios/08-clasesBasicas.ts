/*
class Heroe {
    private alterEgo: string; // solo es visiboe en esta clase
    public edad:number; // afuera d ela clase alguien podr'a ver esta propiedad
    static nombreReal:number; // voy a poder acceder al valor de esta propiedad sin la necesidad de crear una instancian
}

*/

import { isThisTypeNode } from "typescript";

class Heroe {
     alterEgo: string; 
     edad:number; 
     nombreReal:string; 

     imprimirNombre(){
         return this.alterEgo + ' '+this.nombreReal;
     }
    // CONSTRUCTOR DE UNA CLASE es aquel que se va a llamar cuando s ecrea una instancia d ela clase
     
      constructor (alterEgo: string){
          this.alterEgo = alterEgo;
      }




}


// otra forma 

/*

class Heroe {
    

    // CONSTRUCTOR DE UNA CLASE es aquel que se va a llamar cuando s ecrea una instancia d ela clase
     // de esta forma le digo hey creat una propiedad alterEgo con accceso publico
      constructor (public alterEgo: string,
                   public edad: number,
                   public nombreReal: string
        ){}




}





*/





// una clase luce como una interfaz la diferencia es que  la interfaz no existe en javasript y ademas con las clases creo instancias 

interface Personaje2 {
    alterEgo?: string; 
    edad?:number; 
    nombreReal?:number; 

    imprimitNombre ?:() => string; // solo puedo definir que va  retornar un string mas no implementar mas cosas
  }

  // una iterfaz no puedo definir como funcione un metodo son clases tonttas
const iroman = new Heroe ('Iroman');
const spiderman : Personaje2 = {}

class PersonaNormal {
    
    constructor( 
        nombre: string, 
        direcion : string
        
        ){

    }
}

class Heroe2 extends PersonaNormal {
    constructor (
        public alterEgo : string,
        public edad: number,
        public nombreReal: string
        
    )
    {

        super (nombreReal,'new york')  ; 
    }
}


