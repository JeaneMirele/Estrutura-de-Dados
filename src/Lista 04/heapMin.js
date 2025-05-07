import { No } from "./heapMax";

class HeapMin{
    constructor(){
        this.dados = [];
        this.size = 0;
        this.dados[0]= new No(null, Number.NEGATIVE_INFINITY);
    }

insert(elemento, prioridade){
    this.size++;
    this.dados[this.size] = new No(elemento, prioridade);
    i = this.size;
    p = Math.floor (i/2);

    while(this.dados[i].prioridade < this.dados[p].prioridade){
        [this.dados[p], this.dados[i]] = [this.dados[i], this.dados[p]];
        i = p;
        p = Math.floor (i/2);
    }
}

remove(){
    let min = this.dados[1];
    this.dados[1] = this.dados[this.size];
    this.size--;
    
    let atual = 1;
    while(true){
        let filhoE = 2*atual;
        let filhoD = filhoE + 1;
        let menor = atual;
        if(filhoD <= this.size && this.dados[filhoD].prioridade < this.dados[menor].prioridade){
            menor = filhoD;
        }

        if(filhoE <= this.size && this.dados[filhoE].prioridade < this.dados[menor].prioridade){
            menor = filhoE;
        }
        
        if(menor !== atual){
            [this.dados[atual], this.dados[menor]]= [this.dados[menor],this.dados[atual]];
            atual = menor;
        }else{
            break;
        }
       
    }
    return min;
}

}