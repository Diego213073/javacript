//eliminar elemento con POP

const personas = [{ nombre: 'Diego', apellido: 'Roble' }, { nombre: 'Maria', apellido: 'alejandra' }];

//eliminar al principio
personas.pop(); //elimina primer elemento dentro de un arreglo
personas.shift(); //Elimina último elemento en un arreglo

console.log(personas);


const numero = ['elemento 1', 'elemento 2', 'elemento 3'];

numero.splice(1, 1); //recibe posición y la cantidad de elementos que se desea eliminar

console.log(numero);