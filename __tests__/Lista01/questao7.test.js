import { RemoveDuplicados } from "../../src/Lista 01/questao7";


test("Se eu enviar uma pilha com números duplicados, a função retorna somente os elementos não duplicados?", () =>{

   let p = [1, 2, 5, 3, 4, 3, 2, 7];
    expect(RemoveDuplicados(p)).toEqual([1,5,4,3,2,7]);

})


