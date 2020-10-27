export const validator = {
  isValid: (creditCardNumber) => {
    //console.log(creditCardNumber)

    var retorno = false;

    let sum = 0;
    for (var i = 0; i < creditCardNumber.length; i++) {
      var digito = parseInt(creditCardNumber.substr(i, 1)); //numero ingresado se "parsea" para convertirlo a numero
      if (i % 2 == 0) {                                     // si el numero ingresado entre 2 es igual a 0    
        //console.log("pos", 1);
        //console.log("val", resultadotarjeta[i]);
        digito *= 2;                                          
        //console.log("multiplicar", digito);
        if (digito > 9) {                                   // si digito en mayo a 9 suma 1 y dividelo entre 10
          digito = 1 + (digito % 10);
          //console.log("mayor10", digito);
        }
      }
      sum += digito;

    }
    if (sum % 10 == 0) {                                  //si la suma de todos los numeros entre 10 da 0 es valida la tarjeta
      retorno = true;
    }
    if (digito === true) {
      retorno = true;
    }

    if (retorno===true) {
      return "Valida"
    }
    else {
      return "Invalida"
    }

  },
  maskify: (creditCardNumber) => {
  
    var escondido = "*";
//let numeroescondido = resultadotarjeta;
var tarjetaEnmascarada = creditCardNumber.slice(-4);
if (creditCardNumber.length > 4) {
  tarjetaEnmascarada = escondido.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4)
}

return tarjetaEnmascarada;
            

}
  
    }

