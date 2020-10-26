export const validator = {
  isValid: (creditCardNumber) => {
    //console.log(creditCardNumber)

    var retorno = false;

    let sum = 0;
    for (var i = 0; i < creditCardNumber.length; i++) {
      var digito = parseInt(creditCardNumber.substr(i, 1));
      if (i % 2 == 0) {
        //console.log("pos", 1);
        //console.log("val", resultadotarjeta[i]);
        digito *= 2;
        //console.log("multiplicar", digito);
        if (digito > 9) {
          digito = 1 + (digito % 10);
          //console.log("mayor10", digito);
        }
      }
      sum += digito;

    }
    if (sum % 10 == 0) {
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

