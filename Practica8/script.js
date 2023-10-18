const btn = document.querySelector('#btn-cambiar');
const parrafo1 = document.querySelector('#parrafo1');
btn.addEventListener('click',()=>{
    parrafo1.textContent = 'Nuevo texto';
});

let contador = 0;
let clicks = document.querySelector('#clicks');
const contadorClick = document.querySelector('#contadorClick').addEventListener('click',()=>{
    contador++;
    clicks.textContent='Clicks: '+contador;
});

const div = document.querySelector('#miDiv1');
div.addEventListener('mouseover',()=>{
    div.style.backgroundColor = 'lightblue';
});

const divCon = document.querySelector('#divCon');
const contadorDiv = document.querySelector('#contadorDiv');
let contador2 = 0;
divCon.addEventListener('mouseover',()=>{
    contador2 ++;
    contadorDiv.textContent = 'Clicks: '+contador2;
});

const miInput1 = document.querySelector('#miInput1');
const lista = document.querySelector('#lista');

miInput1.addEventListener('keydown',function(e){
    if(e.keyCode == 13){
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = `Elemento ${lista.children.length +1}`;
        lista.appendChild(nuevoElemento);
        miInput1.value = "";
    }
});

const formulario = document.querySelector('#miFormulario');

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const correo = document.querySelector('#correo').value;
    if(nombre == "" || correo == ""){
        alert("Revise los campos por favor!")
    }else{
        setTimeout(function(){
            alert("Formulario enviado con exito");
        },1000);   
    }
});