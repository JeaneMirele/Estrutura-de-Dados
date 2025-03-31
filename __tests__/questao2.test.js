import DuasPilhas from "../questao2";
let pilha;

beforeEach(() => {
   pilha = new DuasPilhas(10);
})

test ("Os elementos devem ser inseridos na pilha A e B corretamente", () => {
   pilha.push1(1);
   pilha.push1(2);
   pilha.push2(8);
   pilha.push2(9);
    expect(pilha.array[9]).toBe(9);
    expect(pilha.array[8]).toBe(8);
    expect(pilha.array[0]).toBe(1);
    expect(pilha.array[1]).toBe(2);

})