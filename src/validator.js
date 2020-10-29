
 const validator = {    
   isValid: (creditCardNumber) => {
    let suma = 0;    // iniciar la variable en 0
    // eslint-disable-next-line no-unused-vars
    //let numeroDeTarjeta= parseInt(creditCardNumber);
    for (let i = 0; i < creditCardNumber.length; ++i) {  // recorre el arreglo
      let numero= parseInt(creditCardNumber.charAt(i));   // parsea los numero de las tarjeta  de texto a numero y  evuelve el carácter situado en la posición 'index' pasada por parámetro. La primera posición es la 0.
        if (i % 2 !== 0) {    // si la posicion par es diferente a 0
        let multiplica = numero *2; //multiplica el numero por 2 
        if(multiplica > 9) {    // si el numero es mayor a 9
          let multiplicaCadena = multiplica.toString();  // convierte el numero a String//
         multiplica = parseInt(multiplicaCadena.charAt(0))+ parseInt(multiplicaCadena.charAt(1)); //parsea el numero y extrae un numero pa despues sumarlo
         suma = suma + multiplica;
        }        
      }
      }

    if (suma % 10 !==0) {
      return true, "Valida"
      //"Valida"
    }
    
    else {
      return false, "Invalida"
      // "Invalida"
    }
  
  },
  
    maskify:(creditCardNumber) => {
  
    var escondido = "*";                          //se crea una variable que almacena el string
    var tarjetaEnmascarada = creditCardNumber.slice(-4);  // se crea una variable que tome el creditcard menos los ultimos 4
    if (creditCardNumber.length > 4) {                
    tarjetaEnmascarada = escondido.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4)
    }

    return tarjetaEnmascarada;
      }
  
    }

export default validator;