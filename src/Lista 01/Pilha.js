export default class Pilha{

    constructor(size = 5){
        this.dados = [];
        this.size = size;
        this.topo = 0;
        
    }

    push(elemento){
        if(this.isFull()){
            throw new Error ("Stack Overflow");
        }
        this.dados[this.topo] = elemento;
        this.topo++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error ("Stack Underflow");
        }

        let pop = this.dados[this.topo-1];
        this.topo--;
        return pop;
      
    }

    isFull(){
        return this.size === this.length();
           
    }

    isEmpty(){
        return this.length() === 0;
    }
    
    length(){
        return this.topo;
    }

    clear(){
        return this.topo === 0;
    }
}