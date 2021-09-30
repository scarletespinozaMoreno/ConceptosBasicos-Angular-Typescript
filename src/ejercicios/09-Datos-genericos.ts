// generico le puedo decir que yo puedo recibir algo de tipo T cualquie tipo
function queTipoSoy <T> (argumento:T){
    return argumento;
}

let soyString = queTipoSoy('hola Mundo')
let soyNumber = queTipoSoy(100)
let soyArreglo= queTipoSoy([1,2,3,4,5,6])
let soyExplicito = queTipoSoy <number>(104)
