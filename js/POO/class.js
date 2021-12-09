class Persona {

    static conteo = 0;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        Persona.conteo++;
    }


    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    static get getContadorInstancias(){
       return Persona.conteo;
    }
};


const persona1 = new Persona("Diego", 30);
const persona2 = new Persona("Aquiles", 54);
const persona3 = new Persona("Aquiles", 54);
const persona4 = new Persona("Aquiles", 54);
const persona5 = new Persona("Aquiles", 54);
const persona6 = new Persona("Aquiles", 54);

console.log(persona1.getNombre);
console.log(persona2.nombre);
console.log(Persona.getContadorInstancias)


