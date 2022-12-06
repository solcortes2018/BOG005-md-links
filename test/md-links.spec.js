const { validate } = require('uuid');
const { mdLinks } = require('../src/index.js');
const { mockForMDLinksFalse,mockForMDLinksTrue } = require("../src/__mocks__/mockFunctions.js");


jest.mock('axios');

describe('Pruebas de la función MDLinks', () => {

  it('Procesar archivo sin validación', () => {
    return mdLinks("carpetaDePruebas")
      .then(res => expect(res).toEqual(mockForMDLinksFalse))
  });

  it('Procesar archivo + --validate', () => {
    return mdLinks("CarpetadePruebas", { validate : true})
      .then(res => expect(res).toEqual(mockForMDLinksTrue))

  })
})