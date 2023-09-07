
console.log(suma(1,5));

function suma(a,b){
    return a+b;
}

const otraFunction = function (a,b){
    return a+b;
}

console.log(otraFunction(4,6));

const multiplicar = function suma(a,b) {
    return (b != 0) ? a + suma(a, b-1) : 0
}

console.log(multiplicar(2,5));

let a = 4;
let b = 2;

function resta(){
    return a-b;
}

console.log(resta());

//FUNCION RECURSIVA
function contador(numero = 0){
    if(numero >= 10){
        return
    }
    console.log(numero);
    contador(numero+1);
}
contador();

function media(datos){

    function sumatoria(serie){
        let suma = 0;
        serie.array.forEach(numero => {
            suma += numero
        });
        return suma;
    }
    return sumatoria(datos) / datos.length;
}
const numeros = [1,2,3,4,5,6,7];
console.log(sumatoria(numeros));