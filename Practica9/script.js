//push(): agrega uno o mas elementos al final del array
let numero = [1,2,3];
numero.push(4,5);
console.log('METODO PUSH');
console.log(numero);

//pop(): Elimina y devuelve el ultimo elemento del array
let frutas = ['manzana','banana','uva'];
let ultimaFrut = frutas.pop();
console.log('METODO POP');
console.log("Fruta eliminada "+ultimaFrut);
console.log(frutas);

//unshift: Agrega uno o mas elementos al inicio del array
let colores = ['verde','rojo'];
colores.unshift('azul','blanco');
console.log('METODO UNSHIFT');
console.log(colores);

//shift: Elimina y devuelve el primer elemento del array
let paises = ['El Salvador','Peru','Mexico'];
let PrimerPais = paises.shift();
console.log('METODO SHIFT');
console.log("Primer elemento eliminado "+PrimerPais);
console.log(paises);

//concat(): combina dos o mas array para crear un nuevo array
let arr1 = [1,2];
let arr2 = [3,4];
let arrCombi = arr1.concat(arr2);
console.log('METODO CONCAT');
console.log(arrCombi);

//slice(): Crea una copia superficial(shadow copy) del array con los elementos
let ArrayOriginal = [1,2,3,4,5];
let copiaArray = ArrayOriginal.slice(1,2);
console.log('METODO SLICE');
console.log(copiaArray);

//spice(): Cambia el contenido de un array eliminado, reemplazando o agregando
let frut = ['banana','naranja','kiwi','pera','manzana'];
let removerFruta = frut.splice(2,1,'uva');
console.log('METODO SPLICE');
console.log(frut);

//forEach(): Ejecuta una funcion para cada elemeto del array
let numbers = [1,2,3];
numbers.forEach(function(n){
    console.log(n*2);
});

const product = [
    {name: 'Camisa', precio:20},
    {name: 'Jeans', precio:25},
    {name: 'Zapatos', precio:80},
    {name: 'Sombrero', precio:10}
]

let precioTotal = 0;
product.forEach(function(prod){
    precioTotal += prod.precio;
});
console.log('Metodo forEach');
console.log(`Precio total a pagar ${precioTotal}`);

//map(): Crea un nuevo array aplicando una function a cada elemento del array orignal

let numbers1 = [1,2,3];
let nuevoArraglo = numbers1.map(function(num){
    return num*2;
});
console.log('Metodo MAP')
console.log(nuevoArraglo);

const Gcelcius = [0,15,30,5,10];
const Gfarenhein = Gcelcius.map(function(celcius){
    return (celcius*9/5) + 32;
});
console.log(`Grados Celcius: ${Gcelcius}`);
console.log(`Grados Farenhein: ${Gfarenhein}`);

//filter(): crea un nuevo array con todos los elementos que pasan una prueba (funcion proporcionada)

const nums = [2,8,3,6,10,4,7];

const num2 = nums.filter(function(n){
    return n > 5;
})
console.log('Metodo FILTER')
console.log(num2);

const persona = [
    {nombre: 'Yanci',edad:24},
    {nombre: 'Jose',edad:17},
    {nombre: 'Luciana',edad:30},
    {nombre: 'Kevin',edad:15},
    {nombre: 'Plutarca',edad:20},
];
const adulto = persona.filter(function(a){
    return a.edad > 18;
});
console.log(adulto);

//reduce(): Aplica una funcion a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducir a un solo valor
let _num = [1,2,3,4];
let sum = _num.reduce(function(acumular, valorActual){
    return acumular + valorActual;
},0);
console.log('Metodo REDUCE');
console.log(sum);

//every(): Compuerba si todos los elementos de un arreglo cumplen una condicion dada y devuelve true o false
let mayorCero = _num.every(function(e){
    return e > 0;
});
console.log('Metodo EVERY');
console.log(mayorCero);

//sort(): ordena los elementos de un arreglo en orden alfabetico(sin crear un nuevo arreglo)
let nombres = ['Margarita','Alberto','Cesia','Santiago','Zuleima'];
console.log('Metodo SORT');
console.log('Nombres desordenados');
console.log(nombres);
nombres.sort();
console.log('Nombres ordenados');
console.log(nombres);