// Objetos Literales.

let computadora = {
    procesador: "intel",
    memoriaRam: "8gb",
    almacenamiento: "ssd",
    placaIntegrada: true
};

console.log(computadora.procesador + " " + computadora.memoriaRam + " " + computadora.almacenamiento + " " + computadora.placaIntegrada);


//Objetos Literales con Metodos (funciones internas).

let notebook = {
    procesador: "i5",
    memoria: "16gb",
    almacenamiento: "128gb ssd",
    caracteristicas: function() {
        return "Sus caracterisitcas son: " + this.procesador + " " + this.memoria + " " + this.almacenamiento;
    }
};

console.log(notebook.caracteristicas()); // Al pedir el Metodo dentro del obejto, debemos declararlo llamando a su funcion con "()".


//Constructores (Funcion constructora de Objetos Literales).

let ConstructorDeObjetoAuto = function(marca, modelo, anio) { //Creamos una Variable que almacene los datos de la Funcion Constructora del Objeto.
    this.marca = marca; // This (hace referencia a la propiedad creada del objeto) y lo declaramos con el nombre del mismo (marca), luego le asignamos el valor del Parametro (marca).
    this.modelo = modelo; // This . propiedad (modelo) = parametro (modelo).
    this.anio = anio;

};
//Como utilizar el constructor.
let nuevosAutos = new ConstructorDeObjetoAuto("Fiat", "Palio", 2018);
let nuevosAutos2 = new ConstructorDeObjetoAuto("Ford", "Fiesta", 2010);

console.log(nuevosAutos);
console.log(nuevosAutos2);


//Constructor con Metodos

let ConstructorCasa = function(color, pisos, cochera) {
    this.color = color;
    this.pisos = pisos;
    this.cochera = cochera;
    detalle = function() {
        return "La casa es de color: " + this.color + " y tiene " + this.pisos + " pisos. Espacio para coches: " + this.cochera;
    };

};

//let casas = new ConstructorCasa("Azul", 4, true);
//console.log(casas.detalle()); //No funciona

//Devolver True si es par.
function esPar(numero) {
    let resto = numero % 2;
    return resto == 0;
}
console.log(esPar(10));
console.log(esPar(5));


//Declarar funciones dentro de otras funciones y utilizarlas.
function anterior(num1) {
    return --num1;
}
console.log(anterior(9));


function anterior(num1) {
    return --num1;
}

function triple(num2) {
    return num2 * 3;
}

function anteriorDelTriple(num3) {
    //let triplica = triple(num3);
    return anterior(triple(num3)); //Uso la funcion para triplicar, dentro de la otra funcion que hace la resta y devuelvo el resultado con la funcion que da el parametro.
}
console.log(anterior(4));
console.log(triple(3));
console.log(anteriorDelTriple(7));

//Ejercicio Verdadero o Falso con condicional if/else.

let dato = true;
if (dato) {
    console.log("es true");
} else {
    console.log("es false");
}

//Comparacion con condicional if / else.

let lenguaje = "javascript";

if (lenguaje === "javascript") {
    console.log("Estoy aprendiendo");
} else {
    console.log("Lo aprenderé mas adelante");
}

//Comparacion con funcion dependendiendo del parametro dado devolvera true o false.

function puedePasar(nombre) {
    if (nombre !== "Cosme Fulanito") {
        return true;
    } else {
        return false;
    }
}
console.log(puedePasar("Cosme Fulanito"));

//Condicionales con Switch

let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("buena semana");
        break;
    case "viernes":
        console.log("buen finde");
        break;
    default:
        console.log("buen dia");
}

//

function tengoClases(dia) {
    switch (dia) {
        case "lunes":
            console.log("tenés clases");
            break;
        case "miércoles":
            console.log("tenés clases");
            break;
        case "viernes":
            console.log("tenés clases");
            break;
        default:
            console.log("no tenés clases");
            break;
    }
}
tengoClases("martes");

//Ciclo for

function loro(frase) {
    for (let i = 1; i <= 5; i++) {
        console.log(frase);
    }
}
loro("Estoy aprendiendo");

//
function noParesDeContarImparesHasta(numero) {

    let impares = 0;

    for (let i = 0; i <= numero; i++) {
        let resto = i % 2;
        if (resto != 0) {

            impares = impares + 1;
        }
    }
    console.log(impares);
}
noParesDeContarImparesHasta(22);