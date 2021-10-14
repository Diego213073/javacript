const persona = {
    nombre: 'Marisol',
    apellido: 'Revolledo',
    edad: 51,
    identificacion: 10023232
};


const persona2 = {
    nombre: 'Carlos',
    apellido: 'Roble',
    edad: 11,
    identificacion: 123213
};


//Sellar un objeto. Permite modificar los atributos pero no agregar un nuevo atributo.
Object.seal(persona2);
persona2.nombre = "Diego";
delete persona2.nombre;

console.log(persona2);
console.log(Object.isSealed(persona2));

//Congelar un objeto. Comportamiento igual a una constante
Object.freeze(persona);

delete persona.edad;
persona.nombre = "Diego";

console.log(persona);
console.log(Object.isFrozen(persona));