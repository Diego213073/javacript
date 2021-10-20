const contenido = document.querySelector('.contenido');
const newElement = document.createElement('a');
newElement.href = "#";
newElement.style.border = "1px solid red";
newElement.textContent = "soy el nuevo botón";


contenido.lastElementChild.appendChild(newElement); //inserta un nuevo hijo en el contenedor
console.log(contenido.children);
contenido.lastElementChild.insertBefore(newElement, contenido.children[1].children[0]); //Inserta hijo antes del elemento hijo
//Hay que pasarme la posición de un hijo del elemento para que tome de referencia dónde va a insertarlo antes