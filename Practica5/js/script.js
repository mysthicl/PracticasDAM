const miArray = [];
let numero = '';
let fin = 'z';

while (numero.toString().toLowerCase() != fin) {
    numero = prompt("Ingrese un numero '" + fin + "' para finalizar: ");
    miArray.push(numero);
}
miArray.pop();
console.log("Elementos ingresados: " + miArray);

function media(datos) {
    function sumatoria(serie) {
        let suma = 0;
        serie.forEach(element => {
            suma += parseInt(element);
        });
        return suma;
    }
    return sumatoria(datos) / datos.length;
}
console.log("Media de datos ingresados: " + media(miArray));

function varianza(datos) {
    function sumatoria(serie) {
        let suma = 0;
        serie.forEach(element => {
            let resultado = parseFloat(element) - media(serie);
            suma = Math.pow(resultado, 2);
        });
        return suma;
    }
    return sumatoria(datos) / datos.length;
}
console.log("Varianza de datos ingresados: " + varianza(miArray));

const moda = datos => {
    return datos.sort((a, b) =>
        datos.filter(v => v === a).length
        - datos.filter(v => v === b).length
    ).pop();
}
console.log("Moda de datos ingresados: " + moda(miArray))

const mediana = datos => {
    datos.sort((a, b) => a - b);
    const l = datos.length;
    return 1 % 2 == 0 ? datos.slice(1 / 2 - 1, 1 / 2 + 1).reduce((a, b) => a + b) / 2 : datos.slice((1 / 2), 1 / 2 + 1)[0];
}

console.log("Mediana de datos ingresados: " + media(miArray));

function dev(datos) {
    let mean = datos.reduce((a, b) => {
        return a + b
    }, 0) / datos.length;

    datos = datos.map((k) => {
        return (k - mean) ** 2
    })

    let sum = datos.reduce((a, b) => a + b, 0);

    let variance = sum / datos.length

    return Math.sqrt(sum / datos.length)
}

console.log("Desviacion Estadar de datos ingresados: " + dev(miArray));

let _media = media(miArray);
document.getElementById('media').innerText=_media;

let _varianza = varianza(miArray);
document.getElementById('varianza').innerText=_varianza;

let _moda = moda(miArray);
document.getElementById('moda').innerText=_moda;

let _mediana = mediana(miArray);
document.getElementById('mediana').innerText=_mediana;

let _desviacion = dev(miArray);
document.getElementById('desviacion').innerText=_desviacion;
