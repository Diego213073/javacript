const producto = {
    nombre: 'Xiaomi redmi note pro 23',
    espicificaciones: {
        bateria: '5000 mAh',
        pantall: '1980 x 1080',
        almacenamiento: '128 GB',
        otrasEspecificaciones: {
            procesador: 'snadragon 720g'
        }
    }
};


const { nombre, espicificaciones } = producto;
const { espicificaciones: { bateria } } = producto;
const { espicificaciones: { otrasEspecificaciones: { procesador } } } = producto;

console.log(nombre, espicificaciones);
console.log(bateria);
console.log(procesador);