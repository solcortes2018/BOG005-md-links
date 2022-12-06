const { optionsStats } = require("../src/stats.js");
const { mockForMDLinksFalse } = require("../src/__mocks__/mockFunctions.js");

describe("Option Stats en acción", () => { 
        test.todo('optionsStats retorna la estadística de los links encontrados'), () => {
            expect(optionsStats(mockForMDLinksFalse)).toEqual({ Total: 5, unique: 4 });}
})