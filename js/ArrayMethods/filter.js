const arr = [{ nombre: "Diego", apellido: "Roble", edad: 21 },
    { nombre: "Aquiles", apellido: "Rafael", edad: 17 },
    { nombre: "Carlos", apellido: "Revolledo", edad: 21 }
];

const personasMayores = arr.filter(persona => persona.edad > 20);


console.log(personasMayores);