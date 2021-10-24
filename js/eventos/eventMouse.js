const formulario = document.querySelector('form');


//cuando se le da click a un elemento en el html
formulario.addEventListener('click', () => {
    console.log("Has hecho click en el formulario de contacto");
});


//cuando se coloca la flecha encima de un elemento se ejecuta la línea de código
formulario.addEventListener('mouseenter', () => {
    formulario.style.backgroundColor = "gray";
});


//sae ejecuta la línea de código cuando la flecha sale del elemento
formulario.addEventListener('mouseout', () => {
    formulario.style.backgroundColor = "black";
});


formulario.addEventListener('mousedown', () => {
    console.log('Función similar a click');
});


formulario.addEventListener('mouseup', () => {
    console.log('Se ejecuta cuando se da click y se  suelte el mouse');
});