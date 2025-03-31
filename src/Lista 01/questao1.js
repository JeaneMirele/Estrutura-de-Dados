function inverte(string){
    let pilha = [];

    for(letra of string){
       pilha.push(letra);
    }
  
    let invertida = "";

   while(pilha.length > 0){
        invertida += pilha.pop();
    }
 
    return invertida;
}

let resultado = inverte("Abacaxi");
console.log("Palavra invertida: ", resultado);