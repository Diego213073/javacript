//Evita el efecto dominó.
//Cuando se propaga un evento de un elemento hijo a un padre que también tiene un eventLiestener

const btn = document.querySelector('form button');
const formulario = document.querySelector('form');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); //eveita el efecto dominó 
    console.log('Soy el botón');
});

formulario.addEventListener('click', () => {
    console.log('Soy el formulario');
});