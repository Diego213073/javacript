window.addEventListener('scroll', () => {
    const formulario = document.querySelector('form');

    let ubicacion = formulario.getBoundingClientRect(); //lugar en que se encuentra el elemento


    if (ubicacion.top > 100) {
        console.log('por encima del elemento a buscar');
    }
    console.log(ubicacion);
});