/*
    ===== Código de TypeScript =====
*/

let habilidades1 = []; // arreglo sin un tipo especificado puede meter lo que sea

let habilidades2 = ['scar','chris']; // arreglo que typescrit solo infiere que es de sring

//habilidades2.push (1); // error  el arreglo solo es de string

let habilidades3 = ['scar','chris',1,20]; //arreglo de string y number pero no booleans

habilidades3.push (1);

let habilidades4 : (boolean| string | number)[] = ['scar','chris',1,20];  // para declarar el tipo de dato

let habilidades5 : string [] = ['scar','chris']; 


// COMO AGREGAR UN NUEVA PROPIEDAD AL OBJETO

interface Personaje {
    nombre: string;
    hp : number;
    habilidades : string[];
    puebloNatal ?: string; // con el ? digo que ese campo sea opcional al momento de crear un objeto de esta interface
}


//COMO CREAR OBJETOS

const personaje: Personaje = {
    nombre:'scar',
    hp : 500,
    habilidades : [ 'counter','healing','fire']
}

personaje.puebloNatal='pueblo paleta';

console.table(personaje); // imprimer x consola como tabla
