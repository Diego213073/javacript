function mensaje() {
    console.log("Hola mundo con JavaScript");
};

mensaje();


const usuario = function() {
    console.log("Hola usuario");
};

usuario();


//función de flecha y paramétros por defecto
const test = (nombre, apellido = 'default') => console.log(`Hola ${nombre} - ${apellido}`);

test("Carlos");