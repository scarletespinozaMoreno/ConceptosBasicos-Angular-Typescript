import { SuperProperty } from "typescript";

interface SuperHeroe {
    nombre:string;
    edad: number;
    direccion : Direccion,
    mostrarDireccion : ()=> string;
}

interface Direccion {
    calle : string;
    pais: string;
    ciudad:string;
    
}
const  superHeroe:SuperHeroe ={
    nombre: 'Spiderman',
    edad : 30,
    direccion : {
        calle : 'main stree',
        pais : 'usa',
        ciudad : ' ny'
    },
    mostrarDireccion  () {
        return this.nombre + ',' + this.direccion.ciudad + ','+ this.direccion.pais
    }

}

const direccion = superHeroe.mostrarDireccion();

superHeroe.direccion.calle.substring

console.log(direccion)