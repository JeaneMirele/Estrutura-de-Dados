import Pilha from "./Pilha";
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