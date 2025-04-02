export default class Pilha{

    constructor(size){
        this.dados = [];
        this.size = size;
    }

    push(elemento){
        this.dados.push(elemento);
    }

    pop(){
      return this.dados.pop();
      
    }

    isEmpty(){
        return this.dados.length === 0;
    }
}

export function conversorDecBin(num){
    let pilha = new Pilha();

    if (num === 0) {
        return "0"; 
    }

    while(num > 0){
        let resto = num%2;
        pilha.push(resto);
        num = Math.floor(num / 2); 
    }
    let binario = "";
    while(!pilha.isEmpty()){
    binario += pilha.pop();
    }
    
    return binario;
}