//Herencia

class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrarInformacion(){
        console.log(`nombre: ${this.nombre} - apellido: ${this.apellido}  - edad: ${this.edad}`)
    }
}



class Estudiante extends Persona{

    constructor(nombre,apellido,edad,carrera){
        super(nombre,apellido,edad);
        this.carrera = carrera;
    }

    mostrarInformacion(){
        super.mostrarInformacion();
        console.log(`carrera universitaria: ${this.carrera}`);
    }

}




const estudiante1 = new Estudiante("Diego","Robles",21);
estudiante1.carrera = "Ingeniería de sistemas";

estudiante1.mostrarInformacion();