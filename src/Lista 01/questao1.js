export function inverte(string){
    const pilha = [];

    for(let letra of string){
       pilha.push(letra);
    }
  
    let invertida = "";

   while(pilha.length > 0){
        invertida += pilha.pop();
    }
 
    return invertida;
}

