import Fila from "./Fila";

export function reverterFila(fila) {
    if (fila.isEmpty()) return; 

    let elemento = fila.dequeue(); 
    reverterFila(fila);         
    fila.enqueue(elemento);       
}
export default reverterFila;