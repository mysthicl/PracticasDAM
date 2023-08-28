document.addEventListener("DOMContentLoaded",function(){
    const btnAgregar=document.getElementById("btnAgregar")
    const id=document.getElementById("id")
    const btnEditar=document.getElementById("btnEditar")
    const nombre=document.getElementById("nombre")
    const apellido=document.getElementById("apellido")
    const genero=document.getElementById("genero")
    const fecha=document.getElementById("fecha")
    const tabla=document.getElementById("tablita")
    
    btnEditar.setAttribute("disabled",true)
    
    
    const personas={
        data:[],
        id:0,
        add: function (persona) {
            this.id++
            persona.id=this.id
            this.data.push(persona)
        }
    }
    btnAgregar.addEventListener("click",function(){
        if(nombre.value==="" || apellido.value==="" || fecha.value===""){
            Swal.fire(
                'Error!',
                'No deje espacios en blanco!',
                'error'
              );
            nombre.value="";
            apellido.value="";
            fecha.value="";
            return
        }
    
            const persona={
                nombre:nombre.value,
                apellido:apellido.value,
                genero:genero.value,
                fecha: fecha.value
            }
            personas.add(persona);
            nombre.value="";
            apellido.value="";
            fecha.value="";

            mostrar();
    })
    function cargarPersonaEnCampos(persona) {
        id.value=persona.id;
        nombre.value = persona.nombre;
        apellido.value = persona.apellido;
        fecha.value = persona.fecha;
    }
    
    function mostrar() {
        tabla.innerHTML=""
        tabla.innerHTML=`<thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Gerenero</th>
          <th scope="col">Fecha</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>`
        personas.data.forEach(i => {
            tabla.innerHTML+=`
    
            <tr>
                <td>${i.id}</td>
                <td>${i.nombre}</td>
                <td>${i.apellido}</td>
                <td>${i.genero}</td>
                <td>${i.fecha}</td>
                <td>
                <button type="button" id="btnEliminar" data-id="${i.id}" class="btn btn-success">Eliminar</button>
                <button type="button" id="btnSeleccionar" data-id="${i.id}" class="btn btn-warning">Seleccionar</button>
                </td>
            </tr>
            `
        });

        const btnSeleccionar = document.querySelectorAll("#btnSeleccionar");
        btnSeleccionar.forEach(element => {
            element.addEventListener("click", function() {
                const personaId = element.getAttribute("data-id");
                const persona = personas.data.find(p => p.id == personaId);
                if (persona) {
                    cargarPersonaEnCampos(persona);
                }
                btnAgregar.setAttribute("disabled",true);
                btnEditar.removeAttribute("disabled");
            });
        });

        const btnEliminar = document.querySelectorAll("#btnEliminar");
        btnEliminar.forEach(btn => {
            btn.addEventListener("click", function() {
                const personaId = btn.getAttribute("data-id");
                const index = personas.data.findIndex(p => p.id == personaId);
                if (index !== -1) {
                    personas.data.splice(index, 1);
                    nombre.value = "";
                    apellido.value = "";
                    fecha.value = "";
                    mostrar();
                    btnAgregar.removeAttribute("disabled");
                    btnEditar.setAttribute("disabled",true);
                }
            });
        });



    };

    btnEditar.addEventListener("click",function () {
        const personaId=parseInt(id.value);
        const persona=personas.data.find(p=>p.id==personaId);
        if(persona){
            persona.nombre = nombre.value;
            persona.apellido = apellido.value;
            persona.genero = genero.value;
            persona.fecha = fecha.value;
            
            nombre.value = "";
            apellido.value = "";
            fecha.value = "";
            
            // btnAgregar.removeAttribute("disabled");
            btnAgregar.setAttribute("disabled", true);
            btnEditar.setAttribute("disabled", true);
            
            mostrar();
        }
    })
});