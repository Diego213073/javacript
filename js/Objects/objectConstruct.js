//Objeto constructor
function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.disponible = true;
}


const cliente = new Cliente("Diego", 20);

console.log(cliente.edad);