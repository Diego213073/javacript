const formulario = document.querySelector('form');
const input = document.querySelector('input');
const contenido = document.querySelector('.contenido-2');
let nombres = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Detiene el comportamiento por defecto de un botón de un formulario tipo POST para enviar información


    nombres.push(input.value);

    const ul = document.querySelector('ul');
    let li;
    nombres.forEach(elemento => {
        li = document.createElement('li');
        li.innerHTML = `<h1>${elemento}</h1>`;
    });
    ul.appendChild(li);


    console.log(nombres);
});