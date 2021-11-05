window.addEventListener('scroll', () => {
    const formulario = document.querySelector('form');

    let ubicacion = formulario.getBoundingClientRect(); //lugar en que se encuentra el elemento

    console.log(ubicacion);
});