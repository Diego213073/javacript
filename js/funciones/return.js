const funcionJs = (n1, n2) => {

    return (parametro1, parametro2) => {
        return (elevado) => `Hola mundo : ${Math.pow(((n1 + n2) * (parametro1 + parametro2)), elevado)}`;
    };
};

function mostarInfomarcion() {
    const contenido = document.querySelector('div');

    contenido.addEventListener('click', mostrarResultado);
}

const mostrarResultado = (event) => {
    event.target.firstElementChild.textContent = funcionJs(2, 2)(2, 3)(2);
};


mostarInfomarcion();