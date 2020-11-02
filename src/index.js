import validator from './validator.js';


document.getElementById("validar").onclick= function(){
 
  let nombre = document.getElementById("nombre").value; //Extraer datos
  let creditCardNumber = document.getElementById("numerotarjetaa").value;
  let tarjetaEnmascarada = creditCardNumber;
  let years= document.getElementById("year").value;
  let mes= document.getElementById("mes").value;
  let cvv= document.getElementById("cvv").value;
  if (nombre!="" && creditCardNumber!="" && years!="" && mes!="" && cvv!=""){ //si los datos no estan vacios ejecuta
  
    if (creditCardNumber.length === 16){
    document.getElementById("salir").style.display="block";
    document.getElementById("validar").style.display= "none";
    document.getElementById("numeroescondido").innerHTML = validator.isValid(creditCardNumber)
    document.getElementById("sobrescribir").innerHTML = " Hola " + nombre + " Tu Tarjeta " + validator.maskify(tarjetaEnmascarada) + " es " + validator.isValid(creditCardNumber);
    
  }
    else {
      alert ("El largo de la tarjeta no es Valido")
    }
  }

  else {
    alert ("Faltan datos por ingresar")
  }
 
 }
document.getElementById("numerotarjetaa").addEventListener("keydown", e => {
  if (e.which != 9 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
  }
  else {
    // eslint-disable-next-line no-undef
    creditCardNumber = document.getElementById("numerotarjetaa").value;
  }
});

document.getElementById("salir").onclick= function(){
    window.location.reload(); //
}