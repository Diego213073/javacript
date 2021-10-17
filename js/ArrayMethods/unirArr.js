const arr = [{ nombre: "Diego", apellido: "Roble", edad: 21 },
    { nombre: "Aquiles", apellido: "Rafael", edad: 17 },
    { nombre: "Carlos", apellido: "Revolledo", edad: 21 }
];

const arr2 = ['XIaomi', 'Samsung', 'Apple', 'Poco Phone'];

const union = [...arr, arr2];
const unionForma2 = arr.concat(arr2);

console.log(unionForma2);
console.log(union);