const meses = [];

meses.push('enero'); //agregar al final de un arreglo
meses.unshift('abril'); //agregar al inicio del arreglo

const nombre = "Diego";


let auxiliar = [...meses, ...nombre]; //Spread Operator con arreglos -> copia el arreglo.

auxiliar = [...nombre, ...meses];

console.log(meses);

console.log(auxiliar);