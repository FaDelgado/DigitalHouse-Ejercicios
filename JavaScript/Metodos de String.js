/*function dominio(web) {
    let pagina = "http://" + web;

    console.log(pagina);
}
dominio("digitalhouse.com.ar");
*/


//Cambiar el string "digitalhouse.com.ar" por "http://digitalhouse.com.ar"
function dominio(web) {

    let pagFinal = web.replace(web, "http://" + web);
    console.log(pagFinal);


}
dominio("digitalhouse.com.ar");

//En el texto cambiar la palabra que quiera.
function reemplazoFastFast(texto, palabra, cambioPalabra) {

    console.log(texto.replace(palabra, cambioPalabra));

}
reemplazoFastFast("Hola como estas, yo bien", "bien", "mal");

//Devolver "true" si encuentra la palabra mencionada.

function menciona(texto, palabra) {
    if (texto.indexOf(palabra) != -1) {
        console.log(true);
    } else {
        console.log(false);

    }
}
menciona('Existen muchos lenguajes de programacion y javascript es uno de ellos', 'programacion');


//

let texto = "¡Hola!, soy Carli";

let licenciada = texto.slice(12);


console.log(licenciada);

//

var resta = "true";
console.log(typeof resta);


//Extraer las posiciones de los valores almacenados en el Array, de no encontrarlo el resultado es -1;

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]

let indiceJuan = alumnos.indexOf("Juan");

let indiceFrancisco = alumnos.indexOf("Francisco");

console.log(indiceJuan + " " + indiceFrancisco);


/*Metodos de Array II*/

//.map() recorre el ARRAY y realiza la funcion que escribamos dentreo del CALLBACK;

let numeros = [1, 5, 7];

let usoMap = numeros.map(function(valorAlmacenadoEnElIndicie) { //La funcion dentro del metodo .map() se denomina "CALLBACK".

    return valorAlmacenadoEnElIndicie * 2; // Multiplico los valores almacenados en el Array, recorriendolos desde el primero al ultimo. Y los guarda en un nuevo Array con el resultado.
});
console.log(usoMap);

//.filter() recorre el ARRAY y devuelve uno nuevo con las condiciones que cumpla el CALLBACK.

var edades = [20, 50, 12, 15, 33, 18];

var condicionACumplir = edades.filter(function(edad) { //"edad" son los indices con los valores que tienen almacenados dentro del array.

    return edad >= 18; // Va a devolver las edades mayores o iguales a 18, y lo devuelve dentro de un nuevo Array.
});
console.log(condicionACumplir);

//.reduce() recorre el Array pero solo devuelve un resultado final, q no es almacenado en un nuevo Array.

let numerosParaSumar = [1, 2, 3, 4, 5, 6];

let sumaFinal = numerosParaSumar.reduce(function(acumulador, numeroAlmacenado) {

    return acumulador + numeroAlmacenado; //El "acumulador" inicia con valor 0?????
});
console.log(sumaFinal);

//.forEach() este metodo sirve para iterar el array. Pero no retorna nada.

var paises = ["Argentina", "Colombia", "Brasil"];

var recorrerElArray = paises.forEach(function(pais) { //Recordar que "pais" es el valor de cadad indice que hay en el Array.

    console.log(pais);
});

//"for in" solo itera sobore OBJETOS LITERALES. (El forin recorre todas las "propiedades" del Objeto literal sin que sepamos cuantas son).

let persona = {
    nombre: "Alan",
    apellido: "Rios",
    edad: 28
};

for (const propiedad in persona) {

    console.log(propiedad); // Obtiene las propiedades del Objeto y se almacenan en la variable "propiedad".
    console.log("En el atributo " + propiedad + " se encuentra el valor " + persona[propiedad]); // Para obtener el "valor" del "atributo" del Objeto Literal, se obtiene con varObjeto[varDelForIn],
}

//"for of" sirve para iterar sobre ARRAYs. Como un string (cadena de texto) es un array, tambien se puede recorrer con "for of".

let otrosNumeros = [2, 35, 48, 105, 77];

for (let i = 0; i < otrosNumeros.length; i++) {

    /* console.log(i); //Recorre el array pero solo muestra cuantos indices tiene.*/

    /*console.log(otrosNumeros); // Recorre el array la cantidad de indices tenga y repite todo el array esa cantidad de veces.*/

    console.log(otrosNumeros[i]); //Recorre el array y obtiene sus valores almacenados.

}

for (const elementos of otrosNumeros) {
    console.log(elementos); // Hace lo mismo que el "for" pero solo extrae los valores almacenados que tiene en cada indice.
}


//Ejercicio for of - Imprimir por pantalla la frase en vertical (pero cada letra).

let frase = "Nos encanta hacer la vertical";

for (let palabras of frase) {

    console.log(palabras);

}