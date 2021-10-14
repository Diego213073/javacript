const producto = {
    nombre: 'papa',
    precio: 2000.0,
    mostrarInfo: function() {
        console.log(`nombre - ${this.nombre}  - precio ${this.precio}`);
    }
}


producto.mostrarInfo();