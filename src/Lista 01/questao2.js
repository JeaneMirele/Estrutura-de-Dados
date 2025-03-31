class DuasPilhas{
    constructor(size= 10){
        this.array = new Array(size);
        this.topoA = 0;
        this.topoB = size-1;
    }

    empilhaA(elemento){
        if(this.isFull()){
            throw new Error ("Stack Overflow");
        }
            this.array[this.topoA] = elemento;
            this.topoA++;
    }

       
    empilhaB(elemento){
        if(this.isFull()){
            throw new Error ("Stack Overflow");
        }
        this.array[this.topoB] = elemento;
        this.topoB--;
    }

    EvaziaA(){
        return this.topoA === 0;
    }

    EvaziaB(){
        return this.topoB == size-1;
    }
    desempilhaA(){
        if(this.EvaziaA()){
            throw new Error ("Stack Underflow, pilha A");
        }
        this.topoA--;
        return this.array[this.topoA];
    }
    desempilhaB(){
        if(this.EvaziaB()){
            throw new Error ("Stack Underflow, pilha B");
        }
            this.topoB++;
            return this.array[this.topoB];
        }

        isFull(){
            return this.topoA > this.topoB;
        }

       
}
export default DuasPilhas;