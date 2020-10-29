// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
     expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar "Valida" para "4083952015263"', () => {
    expect(validator.isValid("4083952015263")).toBe("Valida"); // escribe aquí tu test
    });

   it('debería retornar "Valida" para "79927398713"', () => {
   expect(validator.isValid("79927398713")).toBe("Valida");  // escribe aquí tu test
    });

    it('debería retornar "Invalida" para "1234567890"', () => {
    expect(validator.isValid("1234567890")).toBe("Invalida"); // escribe aquí tu test
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "************5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("************5616");  // escribe aquí tu test
    });                           

   it('Debería retornar "1" para "1"', () => {
    expect(validator.maskify("1")).toBe("1");//escribe aquí tu test
   });

   it('Debería retornar "******orld" para "helloworld"', () => {
    expect(validator.maskify("helloworld")).toBe("******orld"); //escribe aquí tu test
   });
  });
});
