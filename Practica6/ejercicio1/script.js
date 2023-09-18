const urlImagen = document.querySelector('#url');
const btnMostrar = document.querySelector('#mostrar');
const btnEliminar = document.querySelector('#eliminar');
const galeria = document.querySelector('#galeria');

function imagen(url){
    return `<div class="col-4">
    <img class="img-fluid" src="${url}" alt="img">
    </div>`
}

btnMostrar.addEventListener('click',() =>{
    if(urlImagen.value != ''){  
        galeria.innerHTML += imagen(urlImagen.value);
    }
});

btnEliminar.addEventListener('click',()=>{
galeria.innerHTML = '';
});






