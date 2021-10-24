const btn = document.querySelector('.contenido div:nth-child(2) button:nth-child(1)');
const btn2 = document.querySelector('.contenido div:nth-child(2) button:nth-child(2)');

btn.addEventListener('click', cambiarFondo);
btn2.addEventListener('click', cambiarImagenes);


function cambiarFondo(event) {

    const cuerpo = document.querySelector('body');
    const texto = document.querySelector('p');
    const titulo = document.querySelector('h1');
    const botonesList = document.querySelectorAll('button');
    const navegacion = document.querySelector('.contenido');
    const contenidoSecundario = document.querySelector('.contenido-secundario');

    const obj = {
        body: cuerpo,
        p: texto,
        h1: titulo,
        buttons: botonesList,
        nav: navegacion,
        container: contenidoSecundario
    }
    console.log("aquí llegué")
    modificarHtml(obj);


}

function modificarHtml(obj) {

    if (obj.body.style.backgroundColor === 'rgb(32, 30, 30)') {
        obj.body.style.backgroundColor = "white";
        obj.p.style.color = "black";
        obj.h1.style.color = "black";
        obj.buttons.forEach(elemento => {
            elemento.style.backgroundImage = "linear-gradient(to right, rgb(63, 18, 18) 10%, rgb(78, 8, 8) 100%)";
        });
        obj.nav.style.boxShadow = "2px 3px 1px 3px rgb(226, 221, 221)";
        obj.container.style.boxShadow = "2px 3px 1px 3px rgb(226, 221, 221)";
    } else {
        obj.body.style.backgroundColor = "rgb(32, 30, 30)";
        obj.p.style.color = "white";
        obj.h1.style.color = "white";
        obj.buttons.forEach(elemento => {
            elemento.style.backgroundImage = "linear-gradient(to right, rgb(245, 62, 62) 40%, rgb(179, 46, 46) 100%)";
        });
        obj.nav.style.boxShadow = "none";
        obj.nav.style.borderBottom = "1px solid rgb(211, 204, 204)";
        obj.container.style.boxShadow = "none";
        obj.container.style.border = "1px solid rgb(211, 204, 204)";
    }
}

function cambiarImagenes(event) {
    const imagen = document.querySelector('.contenido img');
    const imagenDos = document.querySelector('.contenido-secundario img');


    const objeto = {
        angular: imagen,
        angularContenido: imagenDos
    };



    modificarImagen(objeto);
}


function modificarImagen(obj) {


    console.log(obj.angular.src);
    if (obj.angular.src === '/img/angular.png') {
        console.log("hago esto")
    }

}