import { intercala } from "../../src/Lista 02/q4";
import Fila from "../../src/Lista 02/Fila";

let f;
let f2;
beforeEach(() => {
    f = new Fila(3);
    f2 = new Fila (3)
})

test("Se eu passar duas filas, a função deverá retornar uma fila intercalada", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(6);
   f2.enqueue(5);
   f2.enqueue(9);
   f2.enqueue(3);

   const resultado = intercala(f, f2);

   const valores = [];
   while (!resultado.isEmpty()) {
       valores.push(resultado.dequeue());
   }

   expect(valores).toEqual([1, 5, 2, 9, 6, 3]);
});