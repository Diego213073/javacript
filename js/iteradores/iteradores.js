const arr = ['Diego', 'Juan', 'Carlos', 'Yina'];

const persona = {
    nombre: 'Ronaldo',
    apellido: 'Nasario',
    edad: 34
}

//Itera sobre arreglos
for (let valor of arr) {
    console.log(valor);
}


//Itera sobre objetos
for (let obj in persona) {
    console.log(`for...in ${persona[obj]}`);
}

//Otra forma de iterar un objeto pero con for of
for (let [llave, valor] of Object.entries(persona)) {
    console.log(`for..of ${llave}  - ${valor}`);
}