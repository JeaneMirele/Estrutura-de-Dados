/*Implemente uma fila de tamanho dinâmico usando uma lista simplesmente
encadeada.*/
import Lista from "./listaEnc";

class FilaComLista{
    constructor(){ 
        this.lista = new Lista();
    }

    enqueue(dado){
        this.lista.append(dado);
    }
    dequeue(){
        if(this.lista.isEmpty()) throw new Error("Queue Underflow");
        return this.lista.removeFirst();
    }

    front(){
        if(!this.isEmpty()) return this.lista.head.proximo.valor;
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    length(){
        return this.lista.length();
    }

    clear(){
        this.lista.clear();  
    }
 
}

export default FilaComLista;
