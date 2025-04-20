/*Implemente uma pilha de tamanho dinâmico usando uma lista simplesmente
encadeada.*/
import Lista from "./listaEnc";

class PilhaComLista{

    constructor(){
        this.lista = new Lista();
    }

    push(dado){ 
        this.lista.append(dado);
    }

    pop(){
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
        }
        return this.lista.removeLast();
    }

    top(){
        if (this.isEmpty()) {
            throw new Error("Pilha vazia");
        }
        let no_atual = this.lista.head;

        while(no_atual.proximo !== null){
            no_atual = no_atual.proximo;
        }
        return no_atual.valor;
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    length(){
        return this.lista.length();
    }

    clear(){
        this.lista.head = null;
    }

}
export default PilhaComLista;