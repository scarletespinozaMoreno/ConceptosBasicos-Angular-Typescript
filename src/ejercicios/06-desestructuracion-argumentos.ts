export interface Producto { // exportando la interfaz
    desc: string;
    precio:number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'ipad Air',
    precio: 350
}

function calculaISV (productos : Producto[]): number{
    let total = 0 ;

    productos.forEach((producto)=>{
            total += producto.precio;


    })

    return total * 0.15;
}

const articulos = [ telefono , tableta];
const isv1 = calculaISV(articulos)

console.log('ISV:', isv);


function calculaISV2 (productos : Producto[]){
    let total = 0 ;
    
    productos.forEach( ({precio}) => {
            total += precio;


    })

    return total * 0.15;
}



export function calcularISV3 (productos : Producto[]) : [number , number]{
    let total = 0 ;
    
    productos.forEach( ({precio} )=>{
            total += precio;


    })

    return [total,total * 0.15];
}


const articulos2 = [ telefono , tableta];
const [total , isv2] = calcularISV3(articulos2)

console.log('total:', total);

console.log('ISV:', isv2);