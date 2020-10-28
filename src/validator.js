
 const validator = {       //
  isValid:(creditCardNumber) => {
    //console.log(creditCardNumber)

    // eslint-disable-next-line no-unused-vars
    let retorno = false;
    let sum = 0; //las posiciones empieza a contar desde 0
    for (var i = 0; i < creditCardNumber.length; i++) { // recorre el largo del numero de la tarjtea para obtener el numero de la posicion, la i suma la poscion
      var digito = parseInt(creditCardNumber.substr(i)); //numero ingresado se "parsea" para convertirlo a numero y sustrae los numeros de las posiciones impares
      if (i % 2 !== 0) {                                     // si la poscion es no es igual a cero
                                         //console.log("pos", 1);
                                        //console.log("val", resultadotarjeta[i]);
        digito *= 2;                                          
        //console.log("multiplicar", digito);
        if (digito > 9) {                                   // si digito en mayo a 9, suma 1 ---digito entre 10 y luego suma 1
          digito = 1 + (digito % 10);
          //console.log("mayor10", digito);
        }
      }
      sum += digito;            //  a las suma agregar una  posicion 

    }
    if (sum % 10 == 0) {                           //si la suma de todos los numeros entre 10 da 0 es valida la tarjeta
      retorno = true;
      return "Valida"
    }
    else {
      return "Invalida"
    }

  },
  maskify:(creditCardNumber) => {
  
    var escondido = "*";                          //se crea una variable que almacena el string
    //let numeroescondido = resultadotarjeta;
    var tarjetaEnmascarada = creditCardNumber.slice(-4);  // se crea una variable que tome el creditcard menos los ultimos 4
    if (creditCardNumber.length > 4) {                
    tarjetaEnmascarada = escondido.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4)
    }

    return tarjetaEnmascarada;
      }
  
    }

export default validator;