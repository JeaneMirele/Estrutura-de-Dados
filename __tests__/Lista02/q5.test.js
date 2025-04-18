import Deque from "../../src/Lista 02/q5";

let d;
beforeEach(() => {
    d = new Deque(10);
})

test("Inserir e remover no inicio", () => {
    d.inserirInicio(5);
    d.inserirInicio(8);
  
    expect(d.removerInicio()).toBe(8);
})