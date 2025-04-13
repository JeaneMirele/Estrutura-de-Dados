import Pilha from "../Lista 01/Pilha";

class FilaComPilha{

    constructor(size = 5){
        this.size = size;
        this.pilha = new Pilha(size);
        this.pilha2 = new Pilha(size);
    }

    enqueue(dado){
        if(this.isFull()) throw new Error ("Queue Overflow");
        this.pilha.push(dado);
    }

    dequeue(){
        if(this.isEmpty()) throw new Error ("Queue Underflow");
        
        while(this.pilha.length() > 1){
            this.pilha2.push(this.pilha.pop());
        }

        let inicio = this.pilha.pop();

        let pilhaAux = this.pilha;
        this.pilha = this.pilha2;
        this.pilha2 = pilhaAux;
        
        return inicio;
    }

    isEmpty() {
        return this.pilha.length() === 0;
    }

    isFull() {
        return this.pilha.length() === this.size;
    }

    length() {
        return this.pilha.length();
    }

    clear() {
        this.pilha.clear();
        this.pilha2.clear();
    }

    toString() {
        return this.pilha.toString();
    }
}

export default FilaComPilha;
