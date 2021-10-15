const persona = {
    nombre: 'Diego',
    apellido: 'Roble',
    metodo: (function(parametro) {
        return 'Hola mundo ', parametro;
    })
};


console.log(persona.metodo('Diego'));