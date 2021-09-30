interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
     autor: string;
     anio: number;
}

const reproductor: Reproductor ={
      volumen: 90,
      segundo:36,
      cancion:'mess',
      detalles:{
        autor: 'ed sheeran',
        anio: 2015
      }
      
}

console.log('el volumen actual de:', reproductor.volumen);
console.log('el segundo actual de:', reproductor.segundo);
console.log('la cancion actual de:', reproductor.cancion);
console.log('el autor es',reproductor.detalles.autor)

//DESESTRUCUTRACION D EOBJETOS

const {volumen,segundo,cancion,detalles} = reproductor;

const {autor} = detalles;

console.log('el volumen actual de:',volumen);
console.log('el segundo actual de:', segundo);
console.log('la cancion actual de:', cancion);
console.log('el autor es',autor)


//const {volumen,segundo,cancion,detalles:{autor}} = reproductor;
//const {volumen:vol,segundo,cancion,detalles:{autor:autorDetalle}} = reproductor;

//DESESTRUCRACION DE ARREGLOS

const dbz : string []= ['goku','vegeta','trunks']
const [p1,p2,p3]= dbz
console.log('personaje 1',dbz[0]);
console.log('personaje 2:', dbz[1]);
console.log('personaje 3:', dbz[2]);

console.log('personaje 1',p1);
console.log('personaje 2:', p2);
console.log('personaje 3:', p3);


const [,,personaj3]= dbz /// se da por el orden un nombre sino quiero los demas y solo quiero el personajes 3 solo pongo las comas