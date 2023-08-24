/*const personas = {
    nombre: "Juan",
    apellido: "Perez",
    caminar: function(){
        return `Estoy caminando`
    }
}

console.log(personas.nombre);
console.log(personas.apellido);
console.log(personas.caminar());

personas.hablar = function(palabras){
    return `estoy diciendo: ${palabras}`
}
console.log(personas.hablar(`Hola Mundo`));

let propiedad = ['edad'];
let edad = 30;

personas.propiedad = edad;

console.log(personas.propiedad)*/

const btnAgregar = document.querySelector('#btn_agregar');
const btnEditar = document.querySelector('#btn_editar');

btnEditar.setAttribute('disabled',true);

//Referenciando campos de formulario
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const genero = document.querySelector('#genero');
const fecha = document.querySelector('#fecha');

const filas = document.querySelector('#fila-personas');

const personas = {
    data : [],
    nextId : 0,
    agregar : function(persona){
        this.nextId ++;
        persona.id = this.nextId;
        this.data.push(persona);
    },

}

btnAgregar.addEventListener('click', function(){
    if(nombre.value == "" || apellido.value == ""){
        return
    }

    const Npersona = {
        nombre : nombre.value,
        apellido : apellido.value,
        genero : genero.value,
        fecha : fecha.value
    }

    personas.agregar(Npersona);
    console.log(personas.data);
    mostrarPersonas();
})

function mostrarPersonas(){
    filas.innerHTML = " ";
    personas.data.forEach( personas =>{
        filas.innerHTML += `
        <tr>
            <td>${personas.nombre}</td>
            <td>${personas.apellido}</td>
            <td>${personas.genero}</td>
            <td>${personas.fecha}</td>
            <td>
                <button type="button" id="btn_agregar" class="btn btn-primary">Seleccionar</button>
                <button type="button" id="btn_editar" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        `
    })
}