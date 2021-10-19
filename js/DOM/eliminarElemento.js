const imagen = document.querySelector('img');
imagen.remove(); //eliminar directamente el elemento del html

const contenido = document.querySelector('.contenido');
const hijo = document.querySelector('.prueba');
contenido.removeChild(hijo); //Elimina elemento desde el padre