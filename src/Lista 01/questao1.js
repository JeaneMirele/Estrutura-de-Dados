export function inverte(string){
    let pilha = [];

    for(let letra of string){
       pilha.push(letra);
    }
  
    let invertida = "";

   while(pilha.length > 0){
        invertida += pilha.pop();
    }
 
    return invertida;
}

