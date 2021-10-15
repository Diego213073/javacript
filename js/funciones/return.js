const funcionJs = (n1, n2) => {

    return (parametro1, parametro2) => {
        return (elevado) => `Resultado : ${Math.pow(((n1 + n2) * (parametro1 + parametro2)), elevado)}`;
    };
};

function mostarInfomarcion() {
    const contenido = document.querySelector('div');

    contenido.addEventListener('click', mostrarResultado);
}

const mostrarResultado = (event) => {
    const text = document.createElement('li');
    text.style.color = "red";
    text.style.textAlign = "center";
    text.textContent = funcionJs(2, 2)(2, 3)(2);
    event.target.firstElementChild.append(text);
};

mostarInfomarcion();