//Otra forma de detener el event Bubbling

const contenido = document.querySelector('.contenido-secundario');


contenido.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('imagen-angular')) {
        console.log('le diste click a una imagen');
    }

    if (evento.target.classList.contains('texto-principal')) {
        console.log('le diste click al título principal del contenido');
    }
});

console.log(contenido);