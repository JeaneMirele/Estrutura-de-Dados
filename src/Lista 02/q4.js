/*. Implemente uma função para intercalar filas, a função ao recebe as duas filas como
parâmetro e retorna uma fila com os elementos das duas filas intercalados.*/

import Fila from "./Fila";

export function intercala(fila1, fila2){
    
    let fila3 = new Fila(10);

    while(!fila1.isEmpty() || !fila2.isEmpty()){
        
        if(!fila1.isEmpty()){
            fila3.enqueue(fila1.dequeue());
        }

        if(!fila2.isEmpty()){
            fila3.enqueue(fila2.dequeue());
        }
    }

    return fila3;
}