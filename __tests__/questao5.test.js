import { bemFormado } from "../src/Lista 01/questao5";
import Pilha from "../src/Lista 01/Pilha";

let texto;

beforeEach(() =>{
    texto = "[()";

})

test("Verificando se a string está bem ou mal formada", () => {
    expect(bemFormado(texto)).toBe("Está mal formada");
})

