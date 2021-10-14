const marca = "Xiaomi";
const modelo = "redmi note pro 9";
const templates = `<h1 style = "color: red;">${marca} - ${modelo}</h1>`; //template

document.write(templates);
console.log(templates);
console.log(marca.concat(' --- ').concat(modelo));
console.log(marca, modelo, templates);