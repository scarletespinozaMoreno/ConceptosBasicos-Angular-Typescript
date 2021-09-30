// improtacion y exportaciones

import { calcularISV3, Producto } from "./06-desestructuracion-argumentos";

//primera manera click derecho en el error e importar

const carritoCompras : Producto [] = [
        {
            desc: 'telefono 1',
            precio: 100

        }
        ,
        {
            desc: 'telefono 2',
            precio : 100
        }

];

const [ total ,isv] = calcularISV3( carritoCompras);

console.log('Total',total);
console.log('isv',isv);
