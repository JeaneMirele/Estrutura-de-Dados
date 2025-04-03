import Pilha from "./Pilha.js";

export function bemFormado(texto){
   
        let p = new Pilha(texto.length);
      
        for (let i = 0; i < texto.length; i++) {
          let char = texto[i];
          
          if (char === '(' || char === '[') {
            p.push(char);

          }
            
          else if (char === ')' || char === ']') {
            if (p.isEmpty()) {
              return "Está mal formadov"; 
            }
      
            let topo = p.top();
      
           
            if ((char === ')' && topo === '(') || (char === ']' && topo === '[')) {
              p.pop(); 
          }
        }
      
      }
        return p.isEmpty() ? "Está bem formada" : "Está mal formada";
      
    }
      