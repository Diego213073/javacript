const input = document.querySelector('input[type=submit]');

let valorAleatorio = () => Math.round(Math.random() * 1000);

input.addEventListener('click', (e) => {
    e.preventDefault();
    const contenido = document.querySelector('.resultado h1:nth-child(2)');
    contenido.innerHTML = `<h1>${valorAleatorio()}</h1>`;
});