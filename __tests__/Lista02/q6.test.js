import Fila from '../../src/Lista 02/Fila';
import { reverterFila } from '../../src/Lista 02/q6';

test('deve reverter a fila corretamente', () => {
    const fila = new Fila(10);
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);

    reverterFila(fila);

    expect(fila.front()).toBe(3);
});