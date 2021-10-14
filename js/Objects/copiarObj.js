const persona = {
    nombre: 'Yina',
    apellido: 'Luz',
    edad: 31,
    ocupacion: 'Diseñadora',
    disponible: true
};

const medidas = {
    peso: '1kg',
    medida: '1m'
};


//Copiar un objeto con Object

const copiaObj = Object.assign(persona);
console.log(copiaObj);


//Copiar un objeto con spread operator
const copiaObj2 = {...persona, ...medidas };
console.log(copiaObj2);