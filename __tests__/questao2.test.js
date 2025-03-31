import DuasPilhas from "../src/Lista 01/questao2";
let pilha;

beforeEach(() => {
   pilha = new DuasPilhas(5);
})

test ("Os elementos devem ser inseridos na pilha A e B corretamente", () => {
   pilha.empilhaA(1);
   pilha.empilhaA(2);
   pilha.empilhaB(8);
   pilha.empilhaB(9);
    expect(pilha.array[4]).toBe(8);
    expect(pilha.array[3]).toBe(9);
    expect(pilha.array[0]).toBe(1);
    expect(pilha.array[1]).toBe(2);

})

test("Se a pilha acabou de ser criada, ela deve esta vazia", () =>{
    expect(pilha.EvaziaA()).toBe(true);
})

test("Se eu adicionar 5 elementos a pilha estará cheia", () => {
    pilha.empilhaA(1);
    pilha.empilhaA(2);
    pilha.empilhaB(8);
    pilha.empilhaB(9);
    pilha.empilhaB(5);
    expect(pilha.isFull()).toBe(true);
})

test("Se eu remover um elemento, quem estará no topo?", () => {
    pilha.empilhaA(2);
    pilha.empilhaA(3);
    pilha.desempilhaA();
    expect(pilha.desempilhaA()).toBe(2);
})