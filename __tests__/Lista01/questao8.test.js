import PilhaDePratos from "../../src/Lista 01/questao8";


test("Se eu passar a capacidade, a pilha será criada?", () =>{
    const p = new PilhaDePratos(2);
    p.empilha(2);
    p.empilha(3);
    p.empilha(4);

    expect(p.desempilha()).toBe(4);

   
})