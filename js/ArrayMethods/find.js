const arr = [{ nombre: "Diego", apellido: "Roble", edad: 21 },
    { nombre: "Aquiles", apellido: "Rafael", edad: 17 },
    { nombre: "Carlos", apellido: "Revolledo", edad: 21 }
];



const persona = arr.find(per => per.nombre === 'Diego');

console.log(persona);