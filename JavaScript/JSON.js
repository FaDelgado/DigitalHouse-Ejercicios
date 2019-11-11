let personas = {

    nombre: "Lionel",
    apellido: "Messi",
    profesion: "Futbolista",
    edad: 32

};

let textoJSON = JSON.stringify(personas); // Transforma un OBJETO LITERAL en una cadena de texto.

console.log(textoJSON);

let codigoJSON = JSON.parse(textoJSON);

console.log(codigoJSON);
