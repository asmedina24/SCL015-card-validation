import {validator} from './validator.js';

console.log(validator);

document.getElementById("validar").onclick= function(){
 
  let nombre = document.getElementById("nombre").value;
  let creditCardNumber = document.getElementById("numerotarjetaa").value;
  let tarjetaEnmascarada = creditCardNumber;
    document.getElementById("salir").style.display="block";
    document.getElementById("validar").style.display= "none";

  console.log (nombre);
  console.log (creditCardNumber);
  //console.log (tarjetaEnmascarada);
  
  document.getElementById("numeroescondido").innerHTML = validator.isValid(creditCardNumber)
  document.getElementById("sobrescribir").innerHTML = " Hola " + nombre + " Tu Tarjeta " + validator.maskify(tarjetaEnmascarada) + " es " + validator.isValid(creditCardNumber);
  

//  window.nuevo = nuevo;*/
}


document.getElementById("salir").onclick= function(){
    window.location.reload();
}