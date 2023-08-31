// let numeros = [1, 2, 3, 4, ['a','b','c'],5];
// console.log(numeros);

// let [a, b, c, d, e, f, g] = numeros;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// const rankings = [1000,200];
// let [jugador1=0, jugador2=0, jugador3=0] = rankings;
// console.log(`Puntuaje 1 : ${jugador1}`);
// console.log(`Puntuaje 2 : ${jugador2}`);
// console.log(`Puntuaje 3 : ${jugador3}`);

// let primero = 10;
// let segundo = 20;
// console.error(primero);
// console.error(segundo);


// [primero, segundo] = [segundo, primero];

// console.error(primero);
// console.error(segundo);

const bitacora = [
    {
        id: 1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: {},
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos en la tabla persona'
    },
    {
        id: 2,
        titulo: 'Modificacion',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: {
                    
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez'
                    
            },
                actual: {
                    id: 2,
                    nombres: 'Juann Carlos',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se modificaron datos en la tabla persona'
    }
]



for (const{detalles:{hora,fecha},titulo,descripcion} of bitacora) {
    console.log(`La hora es: ${hora} y la fecha es ${fecha} Titulo: ${titulo} descripcion ${descripcion}`)
}

function getNombreCompleto({detalles:{campos:{anterior:{nombres: a="",apellidos: b=""},actual:{nombres, apellidos}}}}){
    return console.log(`El nombre completo es ${nombres} ${apellidos} El anterior nombre ${a} el anterior apellido ${b} `);
}

for (let index = 0; index < bitacora.length; index++) {

   
    
    getNombreCompleto(bitacora[index]);
}

let [, {detalles:{campos:{anterior, actual}}}] = bitacora;

console.log(anterior);
console.log(actual);

let [detalles:{}]