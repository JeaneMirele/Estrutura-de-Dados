import PilhaComFila from "../../src/Lista 02/q1";

let p;
beforeEach(()=>{
    p = new PilhaComFila(3);
})

test("Se eu adicionar dados na PilhaComFila e remove-los, deve retornar o último elemento inserido", () =>{
    p.push(5);
    p.push(4);
    p.push(7);

    expect(p.pop()).toBe(7);
})

test("Se eu tentar remover de uma pilha vazia, deve retornar erro", () => {
    expect(() => p.pop()).toThrow("Stack Underflow");
})

