const frase = "Sólo sé que nada sé";
const nombre = "    Diego Alejandro Roble Revolledo   ";


//tamaño del texto y buscar una palabra dentro de una cadena
console.log(frase.length);
console.log(`${frase.indexOf('Sólo')}  ${frase.indexOf('Diego')}`);
console.log(frase.includes('sé'));


//cortar los espacios de texto
console.log(nombre.trim());
console.log(nombre.trimStart(), nombre.trimEnd());


//Reemplazar texto de una cadena
console.log(frase.replace('Sólo', 'texto nuevo'));


//cortar texto de una cadena
console.log(frase.slice(0, 8));
console.log(frase.substring(0, 8));
console.log(nombre.trim().charAt(0));


//Repetir una cadena de texto
const individuo = "Juana";

console.log(individuo.repeat(10));

//dividir una cadena
console.log(individuo.split('a'));


//Convertir cadena a mayúsula y minúscula
console.log(individuo.toLowerCase());
console.log(individuo.toUpperCase());

const numero = "30";

console.log(parseInt(numero));