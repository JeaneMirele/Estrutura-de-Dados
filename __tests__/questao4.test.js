import { conversorDecBin } from "../src/Lista 01/questao4";


test("Se eu passar um número, a função deve retornar seu bin", () => {
    
    expect(conversorDecBin(4)).toBe("100");
    expect(conversorDecBin(5)).toBe("101");
})