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
contenido.append(nuevoElemento);


//Agregar nuevas propiedades
persona.fechaActual = Date();
console.log(persona);


//Eliminar una propiedad
delete persona.nombre;
console.log(persona);