const arr = [{ nombre: "Diego", apellido: "Roble", edad: 21 },
    { nombre: "Aquiles", apellido: "Rafael", edad: 17 },
    { nombre: "Carlos", apellido: "Revolledo", edad: 21 }
];


const meses = ["enero", "febrero", "abril", "marzo"];


const mes = meses.some(m => m.includes('enero'));
const persona = arr.some(per => per.nombre === 'Diego');

console.log(persona);
console.log(mes);