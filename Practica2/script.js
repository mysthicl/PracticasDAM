const libros = Array();
const btnAgregar = document.querySelector("#btnAgregar")
const libro = document.querySelector("#libro")
const listaLibro = document.querySelector("#misLibros")

btnAgregar.addEventListener("click",() =>{
    if(libro.value == ""){
        alert("Llene el espacio de libro");
    }else{
        if(libros.length <= 0){
            libros.push(libro.value);
        }else{
            libros.forEach(elements => {
                if(elements == libro.value){
                    alert("Libro registrado");
                }else{
                    libros.push(libro.value);
                }
            });
        }
        
        mostrarLibros()
        libro.value = "";
    }
})

function mostrarLibros(){
listaLibro.innerHTML=null
libros.forEach((item, index)=>{
listaLibro.innerHTML += `<li>${item} - <button type="button" onclick="prestarLibro(${index})">Prestar</li>`})
}

function prestarLibro(index){
libros.splice(index,1)
console.log(libros)
mostrarLibros()
alert("Se presto un Libro")
}

mostrarLibros()