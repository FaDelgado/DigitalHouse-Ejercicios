

let iniciar = confirm('Queres iniciar?');

if(!iniciar){
  alert('Gracias por visitarnos');
  window.location.replace('http://www.netflix.com');
}else{
  var cantIntegrantes = prompt('Cuantos integrantes son?');
        while(isNaN(cantIntegrantes) || cantIntegrantes < 3){
            if(isNaN(cantIntegrantes) || cantIntegrantes < 3 && cantIntegrantes != null){
              alert('Ingresa solo numeros y los inegrantes deben ser como minimo 3');
              cantIntegrantes = prompt('Cuantos integrantes son?');
            }else{
              break;
            }
        }


//METER ESTE CONSTRUCTOR EN EL ARRAY DE ABAJO
function ConstructorIntYGastos(nombre, gastos){
  this.nombre = nombre;
  this.gastos = gastos;
};
var integranteYGasto = new ConstructorIntYGastos();
integranteYGasto.nombre = 'a';
integranteYGasto.gastos = 'b';

//ACA DEBO METER EL CONSTRUCTOR DE ARRIBA
var meterEnArray =[];

for (var i = 0; i < cantIntegrantes; i++) {

  var integranteYGasto = prompt('Ingrese el nombre y el gasto del integrante numero ' + (i + 1) + ' (separelos por una ",")');

  // var intArryslplit = integranteYGasto.split(','); //almaceno los datos y los convierto en array.

  // meterEnArray.push(integranteYGasto.split(',')); //genera array dentro de array

  meterEnArray.push(integranteYGasto); //Funciona bien.

}
console.log(meterEnArray);
// console.log(intArryslplit);



}
