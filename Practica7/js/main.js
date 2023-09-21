const contentFilas = document.querySelector('#filas-content');
const templateFilaS = document.querySelector('#filas-template');
const fragment = document.createDocumentFragment();

let productos = [
    {
        id:1,
        name: 'Cerveza Corona',
        stock: 200,
        price: 1.50
    },
    {
        id: 2,
        name: 'Caña Rica',
        stock: 150,
        price: 0.50
    }
]

function filasTabla(){
    contentFilas.textContent='';

    productos.forEach(item => {
        const clone = templateFilaS.content.cloneNode(true)

        clone.querySelector('.id').textContent = item.id;
        clone.querySelector('.name').textContent = item.name;
        clone.querySelector('.stock').textContent = item.stock;
        clone.querySelector('.price').textContent = `$${item.price}`;
        clone.querySelector('.btn-remover').dataset.id = item.id;

        fragment.appendChild(clone);
    })
    contentFilas.appendChild(fragment);
    agregarEventosRemoverProductos();
}

function agregarEventosRemoverProductos(){
    const buttons = document.querySelectorAll('.btn-remover');

    buttons.forEach(btn => {
        btn.addEventListener('click',(e)=>{
            let id = btn.dataset.id;
            removerProductos(id);
            filasTabla();
            console.log(id);
        })
    })
}

function removerProductos(id){
    productos = productos.filter(pro => parseInt(pro.id) !== parseInt(id))
}
const nombre = document.querySelector('#nombre');
const cantidad = document.querySelector('#cantidad');
const precio = document.querySelector('#precio');
const btnAgregar = document.querySelector('#btn-agregar');

btnAgregar.addEventListener('click',()=>{
    const proa={
        id: parseInt(productos.length)+1,
        name: nombre.value,
        stock: cantidad.value,
        price: precio.value
    }
    productos.push(proa)
    console.log(productos)
    limpiarCampos();
    filasTabla();
})

function limpiarCampos(){
    nombre.value = '';
    cantidad.value = '';
    precio.value = ''
}


filasTabla();