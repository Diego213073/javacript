//creación de un objeto

const contenido = document.querySelector('div');
const persona = {
    nombre: 'Yina',
    apellido: 'Luz',
    edad: 31,
    ocupacion: 'Diseñadora',
    disponible: true
}

contenido.firstElementChild.textContent = persona.nombre;
const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = persona['apellido'];

console.log(persona);
console.log(contenido)
contenido.append(nuevoElemento);