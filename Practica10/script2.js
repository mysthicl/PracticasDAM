//Metodo filter
let numeros = [1,4,3,5,6,3,22,6,3,3,4,2,3];
let numersPares = numeros.filter(function(num){
    return num%2==0;
});
console.log(numersPares);

//Metodo Map
const persona = [
    {nombre:'Julio',edad:15},
    {nombre:'Ruth',edad:35},
    {nombre:'Elias',edad:33},
    {nombre:'Juana',edad:55}
]
const Npersona = persona.map(function(per){
 return per.edad + 1;
});
console.log(Npersona);

//Metodo concat
let arreglo = [1,98,3,4,6,3,4,53,53,5];
let nuevosElementos = [2,3,4,543,5,6];
let nuevo = arreglo.concat(nuevosElementos);
console.log(nuevo);

//Metodo sort
nuevo.sort();
console.log(nuevo);