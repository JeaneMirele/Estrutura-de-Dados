import FilaComPilha from "../../src/Lista 02/q2";

let f;
beforeEach(()=>{
    f = new FilaComPilha(4);
})

test("Se eu adicionar dados a fila, e remover um, precisa retornar o primeiro valor inserido", () => {
    f.enqueue(5);
    f.enqueue(8);
    f.enqueue(10);
    f.enqueue(9);

    expect(f.dequeue()).toBe(5);
})

test("Se eu adicionar um dado a uma fila cheia, deve retornar um erro de Queue Overflow", () => {
    f.enqueue(5);
    f.enqueue(8);
    f.enqueue(10);
    f.enqueue(9);

    expect(() => f.enqueue(6)).toThrow("Queue Overflow");
})