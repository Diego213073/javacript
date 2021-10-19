const navegacion = document.querySelector('.contenido');


console.log(navegacion.childNodes); //Retorna una lista de los hijos y toma encuenta los espacios en blanco del html
console.log(navegacion.children); //Solamente retorna la lista de elemntos descartando los espacios en blanco del HTML
console.log(navegacion.firstElementChild); //devuelve el primer hijo de un elemento
console.log(navegacion.lastElementChild); //devuelve el último elemento de un html
console.log(navegacion.parentElement.parentElement); //devuelve el elemento padre de un elemento
console.log(navegacion.firstElementChild.nextElementSibling); //Devuelve el siguiente elemento hijo de la lista.


const segundoElemento = document.querySelector('.prueba');

console.log(segundoElemento.previousElementSibling); //devuelve el elemento hijo anterior del contenedor