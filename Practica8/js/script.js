const parrafo = document.querySelector('#parrafo1');
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
parrafo.textContent = "Nuevo texto";

});
//======================================
const contadorClick = document.querySelector('#contadorClicks');
const btnclicks = document.querySelector('#clicks');
let contador = 0;

btnclicks.addEventListener('click',()=>{
contador++;
contadorClicks.textContent = `Contador: ${contador}`;
});
//======================================
const midiv = document.querySelector('#miDiv');
midiv.addEventListener('mouseover',()=>{
midiv.style.background = '#FFF000';
});

const midiv2 = document.querySelector('#miDiv2');
const contadorMouseover = document.querySelector('#contadorDiv');
let contadorMover = 0;
midiv2.addEventListener('mouseover',()=>{
    contadorMover++;
contadorMouseover.textContent = `Contador: ${contadorMover}`;
});
//======================================
const miInput1 = document.querySelector('#miInput1');
const milista1 = document.querySelector('#lista1');

miInput1.addEventListener('keydown',function(event){
    if(event.keyCode === 13){
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = `Elemento ${milista1.children.length + 1}`;
        milista1.appendChild(nuevoElemento);
        miInput1.value = "";
        alert("Se presiono enter")
    }
});
//======================================

const formulario1 = document.querySelector('#miFormulario1');

formulario1.addEventListener('submit',function(event){
 event.preventDefault();

 const nombre1 = document.querySelector('#nombre1').value;
 const correo1 = document.querySelector('#correo1').value;
 
 if(nombre1 === "" || correo1 === ""){
    alert('Por favor, complete el formulario');
 }else{
    setTimeout(function(){
        alert('Formulario enviado con exito');
    }, 1000);
 }
});

