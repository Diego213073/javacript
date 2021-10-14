const producto = {
    nombre: 'Xiaomi redmi note pro 23',
    espicificaciones: {
        bateria: '5000 mAh',
        pantall: '1980 x 1080',
        almacenamiento: '128 GB'
    }
};


const { nombre } = producto;
const { espicificaciones: { bateria } } = producto;
console.log(nombre);

console.log(bateria);