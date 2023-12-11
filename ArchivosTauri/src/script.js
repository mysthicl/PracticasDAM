const invoke = window.__TAURI__.invoke
const form = document.querySelector('#img-form');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const filename = document.querySelector('#filename');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
var name2;

async function cargarImagen(e) {

    const file = e.target.files[0];
    console.log(file)

    name2 = file.name

    const image = new Image();
    image.src = URL.createObjectURL(file)
    image.onload = function () {
        widthInput.value = this.width
        heightInput.value = this.height
    }
    form.style.display = 'block';
    filename.innerHTML = name2;

    const oshomedir = await invoke('oshomedir');
    const outputPath = await invoke('get_output_path', { oshomedir });
    const outputPathElement = document.getElementById('output-path');
    outputPathElement.innerHTML = outputPath;

}

async function enviarImagen(e) {
    e.preventDefault();

    const oshomedir = await invoke('oshomedir');
    const outputPath = await invoke('get_output_path', { oshomedir });
    const url = `${oshomedir}/Downloads/${name2}`

    invoke('image_resize', {
        imgPath: url.replace(/\\/g, '/'),
        height: parseInt(heightInput.value, 10),
        width: parseInt(widthInput.value, 10),
        dest: outputPath.replace(/\\/g, '/'),
        nameimage: name2
    })


}

function esImagen(file) {
    const formatosAceptados = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'];
    return file && formatosAceptados.includes(file['type']);
}


document.addEventListener('tauri://event', (event) => {
    const eventData = event.detail;

    if (eventData.event === 'image:done') {
        alertSuccess(`Imagen redimensionada a ${heightInput.value} x ${widthInput.value}`);
    }
});

function alertSuccess(message) {
    Toastify({

        text: "This is a toast",

        duration: 3000

    }).showToast();
}

function alertError(message) {
    window.api.Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'red',
            color: 'white',
            textAlign: 'center',
        },
    });
}

img.addEventListener('change', cargarImagen);
form.addEventListener('submit', enviarImagen);

