class Queue{
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

        if(this.inicio === size){
            this.inicio = 0;
        }
        this.inicio++;

    }

    front(){
        if(!this.isEmpty())
        return this.dados[this.inicio];
    }

    isEmpty(){
     return this.inicio === this.fim;
    }

    isFull(){
        return this.lenght() === this.size;

    }

    clear(){
        this.inicio = 0;
        this.fim = 0;

    }
    lenght(){
        if(this.isEmpty()) return 0;
        if(this.inicio < this.fim) return this.fim - this.inicio;
        return (this.size + 1 - this.inicio) + this.fim;
        }
    

    toString(){
        if(this.isEmpty()) return "Fila vazia";

        let resultado = [];
        for (let i=0; i < this.lenght(); i++){
            let index = (this.inicio + i) % this.size;
            resultado.push(this.fila[index]);
        }
        return resultado.join(" ");
        }
    }
