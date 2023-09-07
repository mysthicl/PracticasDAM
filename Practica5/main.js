const miArray = []; 
let number = ''; 
let centinela = 'z'; 
while (number. toString (). toLowerCase () != centinela) { 
    number = prompt ("Introduce un número [ "+ centinela +" para terminar ]:");
    miArray.push(number);
    
}
miArray.pop();
console.log(miArray);

function media(datos){

    function sumatoria(serie){
        let suma = 0;
        serie.forEach(numero => {
            suma += parseInt(numero);
        });
        return suma;
    }
    return sumatoria(datos) / datos.length;
}
console.log(media(miArray));

const varianza = (datos) =>{
    function sumatoria(serie){
        let suma = 0;
        serie.forEach(item => {
           let resultado = parseFloat(item) - media(serie)
           suma += Math.pow(resultado, 2);
        });
        return suma;
    }
    return sumatoria(datos) / datos.length;
}

console.log(varianza(miArray));
