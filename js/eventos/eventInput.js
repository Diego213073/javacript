const input = document.querySelector('input');

/*
//Se ejecuta el evento cuando presiono la tecla

input.addEventListener('keydown', () => {
    console.log("Escribiendo");
});

//Se ejecuta cuando suelto una tecla 
input.addEventListener('keyup', () => {
    console.log("Escribiendo keyup");
});

//Se ejecuta cuando se da click en un input y posteriormente se da click en otra zona del HTML
input.addEventListener('blur', () => {
    console.log("Click en otra zonA");
});

//Cuando se copia un texto sobre el input seleccionado
input.addEventListener('copy', () => {
    console.log("Copiando texto");
});

//Cuando copio algo dentro del input seleccionado
input.addEventListener('paste', () => {
    console.log("Texto pegado");
});

//Cuando corto un elemento dentro de un input
input.addEventListener('cut', () => {
    console.log("Cortando elemento");
});

*/
//Realiza cualquiera de los elementos utilizados anteiormente exceptuando el blur
input.addEventListener('input', (event) => {
    console.log(event.target.value);
});