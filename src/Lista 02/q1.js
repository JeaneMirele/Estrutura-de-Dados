import Fila from "./Fila";

class PilhaComFila{
    constructor(size = 5){
        this.size = size;
        this.fila = new Fila(size);
        this.fila2 = new Fila(size);
    }

    push(dado){
        if(this.isFull()) throw new Error ("Stack Overflow");
        this.fila.enqueue(dado);
    }

    pop(){
        if(this.isEmpty()) throw new Error ("Stack Underflow");
       while(this.length() > 1){
            this.fila2.enqueue(this.fila.dequeue());
       }

    let ultimoE = this.fila.dequeue();
       const filaAux = this.fila;
       this.fila = this.fila2;
       this.fila2 = filaAux;
       
       return ultimoE;
    }

    isEmpty(){
       return this.length() === 0;
    }

    length(){
        return this.fila.length();
    }

    
    isFull() {
    return this.length() === this.size;
    }

    clear(){
        this.fila.clear();
    }

    toString() {
    return this.fila.toString();
    }
}
export default PilhaComFila;