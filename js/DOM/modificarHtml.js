const img = document.querySelector('img');
const contenido = document.querySelector('.contenido');
const cuerpo = document.querySelector('body');

cuerpo.style.display = "grid";

contenido.innerHTML = "<h1>Nuevo contenido</h1>";

img.src = "img/blast.webp";
img.style.border = "1px solid";
img.style.borderRadius = "1rem";