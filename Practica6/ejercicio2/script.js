const txtIzquierda = document.querySelector('#txtIzquierda');
const txtDerecha = document.querySelector('#txtDerecha');
const txtJustificado = document.querySelector('#txtJustificado');
const txtCursiva = document.querySelector('#txtCursiva');
const txtSubrayado = document.querySelector('#txtSubrayado');
const txtNegrita = document.querySelector('#txtNegrita');
const txtMas = document.querySelector('#txtMas');
const txtMenos = document.querySelector('#txtMenos');
const btnGuardar = document.querySelector('#btnGuardar');
const btnEliminar = document.querySelector('#btnEliminar');
const Espacio = document.querySelector('#Espacio');
const descripcion = document.querySelector('#descripcion');

txtIzquierda.addEventListener('click',()=>{
    descripcion.style.textAlign = 'left';
});

txtDerecha.addEventListener('click',()=>{
    descripcion.style.textAlign = 'right';
});

txtJustificado.addEventListener('click',()=>{
    descripcion.style.textAlign = 'justify';
});

txtCursiva.addEventListener('click',()=>{
    descripcion.style.fontStyle = 'italic';
});

txtSubrayado.addEventListener('click',()=>{
    descripcion.style.textDecoration = 'underline';
});

txtNegrita.addEventListener('click',()=>{
    descripcion.style.fontWeight = 'bold';
});

let fontSize = 16;
txtMas.addEventListener('click',()=>{
    fontSize ++;
    descripcion.style.fontSize = fontSize;
});

txtMenos.addEventListener('click',()=>{
    fontSize --;
    descripcion.style.fontSize = fontSize;
});

function libreta(nota){
    const estilo = `
    text-align: ${descripcion.style.textAlign || 'left'};
        font-style: ${descripcion.style.fontStyle || 'normal'};
        text-decoration: ${descripcion.style.textDecoration || 'none'};
        font-weight: ${descripcion.style.fontWeight || 'normal'};
        font-size: ${descripcion.style.fontSize || '16px'};
    `;

    return `<div class="col-4" style="${estilo}">
    ${nota}&nbsp;
    </div>`
}

btnGuardar.addEventListener('click',()=>{
    Espacio.innerHTML += libreta(descripcion.value);
    descripcion.value = '';
    descripcion.style.textAlign = 'center'; // Restablece la alineación
    descripcion.style.fontStyle = 'normal'; // Restablece la cursiva
    descripcion.style.textDecoration = 'none'; // Restablece el subrayado
    descripcion.style.fontWeight = 'normal'; // Restablece la negrita
    descripcion.style.fontSize = '16px'; // Restablece el tamaño de fuente
});

btnEliminar.addEventListener('click',()=>{
    Espacio.innerHTML = '';
});

