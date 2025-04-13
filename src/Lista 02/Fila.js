class Fila{
    constructor(size = 5){
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.size = size;
    }


    enqueue(dado){
        if(this.isFull()) throw new Error ("Queue overflow");

        this.dados[this.fim] = dado;
        if(this.fim === this.size){
            this.fim = 0;
        }else{
            this.fim++;
        }
    }

    dequeue(){
        if(this.isEmpty()) throw new Error ("Queue underflow");

        let resultado = this.front();
        if(this.inicio === this.size){
            this.inicio = 0;
        }
        this.inicio++;
        return resultado;
    }

    front(){
        if(!this.isEmpty())
        return this.dados[this.inicio];
    }

    isEmpty(){
     return this.inicio === this.fim;
    }

    isFull(){
        return this.length() === this.size;

    }

    clear(){
        this.inicio = 0;
        this.fim = 0;

    }
    length(){
        if(this.isEmpty()) return 0;
        if(this.inicio < this.fim) return this.fim - this.inicio;
        return (this.size + 1 - this.inicio) + this.fim;
        }
    

    toString(){
        if(this.isEmpty()) return "Fila vazia";

        let resultado = [];
        for (let i=0; i < this.length(); i++){
            let index = (this.inicio + i) % this.size;
            resultado.push(this.dados[index]);
        }
        return resultado.join(" ");
        }
    }
export default Fila;