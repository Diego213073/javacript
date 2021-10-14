const persona = {
    nombre: 'Marisol',
    apellido: 'Revolledo',
    edad: 51,
    identificacion: 10023232
};


const llaves = Object.keys(persona); //retorna arreglo con las llaves del objeto
const valores = Object.values(persona); //retorna arreglo con los valores del objeto
const todos = Object.entries(persona); //retorna valor y llaves del objeto


console.log(llaves);
console.log(valores);
console.log(todos);