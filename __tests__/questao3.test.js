import {troca } from "../src/Lista 01/questao3";
import Pilha from "../src/Lista 01/Pilha";

let p;
beforeEach(()=>{
    p = new Pilha(5);
})

test("Testando se a pilha terá seus elementos de topo e base trocados", () => {
    
    
    for(let i=0; i<p.size; i++){
        p.push(i);
    }

    troca(p);
    expect(p.dados).toStrictEqual([4,1,2,3,0]);
})