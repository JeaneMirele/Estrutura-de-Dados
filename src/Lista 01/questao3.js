export default class Pilha{

    constructor(size = 5){
        this.dados = [];
        this.size = size;
    }

    push(elemento){
        this.dados.push(elemento);
    }

    pop(){
      return this.dados.pop();
      
    }

    isFull(){
        return this.size === this.dados.length;
           
    }

    isEmpty(){
        return this.dados.length === 0;
    }
    
}

export function troca(p){
   
    let p2 = new Pilha();

    let topoP1 = p.pop();

    while(p.dados.length > 1) {
       let elemento = p.pop();
        p2.push(elemento);
    }

    let base = p.pop();

    p.push(topoP1);
  
    while(!p2.isEmpty())
    p.push(p2.pop());

    p.push(base);
    console.log(p);
}