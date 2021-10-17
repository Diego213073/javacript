//Todos tienen que cumpliar la condición para que retorne verdadero

const arr = [{ nombre: "Diego", apellido: "Roble", edad: 21 },
    { nombre: "Aquiles", apellido: "Rafael", edad: 17 },
    { nombre: "Carlos", apellido: "Revolledo", edad: 21 }
];



const comprobar = arr.every(persona => persona.edad > 15);


console.log(comprobar);