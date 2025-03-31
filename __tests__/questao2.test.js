import DuasPilhas from "../src/Lista 01/questao2";
let pilha;

beforeEach(() => {
   pilha = new DuasPilhas(10);
})

test ("Os elementos devem ser inseridos na pilha A e B corretamente", () => {
   pilha.empilhaA(1);
   pilha.empilhaA(2);
   pilha.empilhaB(8);
   pilha.empilhaB(9);
    expect(pilha.array[9]).toBe(8);
    expect(pilha.array[8]).toBe(9);
    expect(pilha.array[0]).toBe(1);
    expect(pilha.array[1]).toBe(2);

})