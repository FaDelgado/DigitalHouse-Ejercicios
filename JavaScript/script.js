
// var uls = document.querySelector('.links');
// console.log(uls);



  // var colorElegido = prompt("Elegi un color");
  //
  // var losLi = document.querySelectorAll("li");
  //
  //
  // for(var i=0; i<losLi.length; i++){
  //
  //   losli[i].style.backgroundColor = colorElegido;
  // }
  // var colorElegido = prompt("Elegi un color");
  //
  //   var losLi = document.querySelectorAll("li");
  //
  //   for(var i=0; i<losLi.length; i++){
  //
  //     losLi[i].style.color = colorElegido;
  //   }

//   function sumarArray(numero){
//     var sumaFinal = 0;
//     for(const cadaNum of numero){
//       sumaFinal = sumaFinal + cadaNum;
//     }
//     return sumaFinal;
//   };
// console.log(sumarArray([1,2,3,4,5,6,7]));
// console.log(sumarArray([2,5,8,7]));
//
//   function operarArray(num1, operacion){
//     return operacion(num1);
//   };
//   console.log(operarArray([1,2,3,4,5,6,7],sumarArray));

  /*FOR OF */

  // let notas = [7, 6, 10, 6, 3, 2]
  //
  // let suma = 0;

  // for (const elemento of notas){ //Recorre un array por tantos elementos tenga
  //   suma = suma + elemento;
  // }
  // console.log(suma);
  //   let sumar = 0;
  // for (let i = 0; i < notas.length; i++){
  // 	console.log('Recorro y muestro cada dato del array: ' + notas[i]);
  //   sumar = sumar + notas[i];

  // }
  // console.log('La suma de todo es: ' + sumar);


//   var canciones = [
//   {
//     id: 1,
//     nombre: "Manuelita",
//     puntaje: 8.5
//   },
//   {
//     id: 2,
//     nombre: "La reina batata",
//     puntaje: 7.8
//   }
// ]
//
//
// var titulos = canciones.map(function(objeto){
//
//   console.log(objeto.nombre);
// })

// var lasMejores = canciones.map(function(elemento){
//   let puntos = elemento.puntaje;
//   return puntos > 8 ? console.log(puntos): "";
// })
// var lasMejores = canciones.filter(function(atributo){
//   return atributo.puntaje > 8;
// })
// console.log(lasMejores);
//
// var lasMejores = canciones.filter(function(atributo){
//   return atributo.puntaje > 8? console.log(atributo.puntaje):'';
// })
//
// var reina = canciones.find(function(atributos){
//   return atributos.nombre === 'La reina batata';
// })
// console.log(reina);

// var verObjeto = canciones.map(function(elemento){
//     var titulo;
//   for (var atributos in elemento) {
//     if (atributos == 'nombre') {
//       titulo = elemento[atributos];
//       console.log(titulo);
//     }
//   }
// })

// var series = prompt('Cuales son tus series preferidas?');
//
//   var seriesArray = series.split(',');
//
//   var lista = document.querySelector('ul');
//
//   // var crearLi = document.createElement('li');//Se crea una sola vez
//
//   for(const serie of seriesArray){
//
//     var crearTexto = document.createTextNode(serie);
//
//     var crearLi = document.createElement('li');//Se crea cada vez q itineramos
//
//     crearLi.append(crearTexto);
//
//     lista.append(crearLi);
//   };

// var respuesta = confirm('Agrandar el sitio?');
//
// var obtenerH1 = document.querySelector('h1');
//   if(respuesta){
//
//     obtenerH1.classList.add('xl');
//
//   };
//   var nombre = prompt("¿Cuál es tu nombre?");
//
//   document.querySelector("h1").innerHTML = "Bienvenido " + nombre;

window.addEventListener("load", function() {

  var imagenes = [
    "https://images.agoramedia.com/everydayhealth/cms/looking-at-cute-pics-helps-you-work-article.jpg",    "http://lifeisbetterrescue.org/images/large/kittens.jpg",
    "https://vmdtoday.s3.amazonaws.com/_media/_image/Kitten-USDA-Investigation_Thumb.jpg",
    "https://pet-uploads.adoptapet.com/f/9/9/243980831.jpg"
  ]

  var indice = 0

  document.getElementById('siguiente').addEventListener('click',function(){
    if(indice > 2){
      indice = 0;
    }else{
      indice = indice + 1;
    };
    document.querySelector('img').src = imagenes[indice];// Selecciono la etiqueta (img) y le modifico el valor al atributo (src)
    console.log(indice);
  });


  document.getElementById('anterior').addEventListener('click',function(){
    if(indice == 0){
      indice = 3;
    }else{
      indice = indice - 1;
    };
    document.querySelector('img').src = imagenes[indice];
    console.log(indice);
  });

})
