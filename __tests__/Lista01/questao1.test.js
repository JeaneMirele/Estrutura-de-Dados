import { inverte } from "../../src/Lista 01/questao1";

test("Se uma palavra for passada, ela retorna invertida", () =>{

    expect(inverte("Abacaxi")).toBe("ixacabA");
})