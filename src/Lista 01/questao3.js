import Pilha from "./Pilha";
export function troca(p){
   
    let p2 = new Pilha();

    let topoP1 = p.pop();

    while(p.length() > 1) {
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