import PilhaComLista from "../../src/Lista 03/q1";

let p;

beforeEach(()=>{
    p = new PilhaComLista();
})

test("Se eu adicionar valores e remover um valor da pilha, deve retornar o último adicionado", () => {
    p.push(5);
    p.push(4);
    p.push(3);
    p.push(2);
    expect(p.pop()).toBe(2);
})

test("Mostrar o top", () => {
    p.push(5);
    p.push(4);
    p.push(3);
    p.push(1);
    expect(p.top()).toBe(1);
})

test("Tamanho da pilha", ()=> {
    p.push(5);
    p.push(4);
    p.push(3);
    p.push(2);
    expect(p.length()).toBe(4);
})