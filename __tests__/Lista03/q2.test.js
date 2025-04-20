import FilaComLista from "../../src/Lista 03/q2";

let fila;
beforeEach(() => {
    fila = new FilaComLista();
  });

  test('fila deve iniciar vazia', () => {
    expect(fila.isEmpty()).toBe(true);
    expect(fila.length()).toBe(0);
  });

  test('enqueue adiciona elementos na fila', () => {
    fila.enqueue('A');
    fila.enqueue('B');
    expect(fila.isEmpty()).toBe(false);
    expect(fila.length()).toBe(2);
    expect(fila.front()).toBe('A');
  });

  test('dequeue remove o primeiro elemento', () => {
    fila.enqueue('X');
    fila.enqueue('Y');
    expect(fila.dequeue()).toBe('X');
    expect(fila.front()).toBe('Y');
    expect(fila.length()).toBe(1);
  });

  test('front retorna o elemento da frente sem remover', () => {
    fila.enqueue('Z');
    expect(fila.front()).toBe('Z');
    expect(fila.length()).toBe(1);
  });

  test('clear esvazia a fila', () => {
    fila.enqueue('1');
    fila.enqueue('2');
    fila.clear();
    expect(fila.isEmpty()).toBe(true);
    expect(fila.length()).toBe(0);
  });

  test('dequeue em fila vazia lança erro', () => {
    expect(() => fila.dequeue()).toThrow("Queue Underflow");
  });