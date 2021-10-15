const personas = [{ nombre: 'Diego', apellido: 'Roble' }, { nombre: 'Maria', apellido: 'alejandra' }];

const numero = ['elemento 1', 'elemento 2', 'elemento 3'];


const [, segundoElemento] = personas;

console.log(segundoElemento.nombre);