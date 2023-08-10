// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad < 18){
//     document.write(`Bienvenido ${nombre} eres menor de edad cuentas con ${edad} años`);
// }else{
//     document.write(`Bienvenido ${nombre} eres mayor de edad cuentas con ${edad} años<br>`);
// }
// document.writeln("========================================<br>");
// let anio =parseInt(prompt("Ingrese su año de nacimiento"));
// let calculo_edad = 2023-anio;
// document.write(`Su edad es de ${calculo_edad}<br>`);
// document.writeln("========================================<br>");



var numero_generado = Math.round(Math.random()*(10-1)-1);

do {
    let numero_ingresado = parseInt(prompt("Ingrese un numero"));

    if(numero_ingresado != numero_generado){
        document.write("Sigue intentado!");
    }else{
        document.write("Feliciades! " +numero_generado);
    }

} while (numero_generado != numero_ingresado);

