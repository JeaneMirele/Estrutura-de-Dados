/*Dada uma pilha contendo números inteiros, implemente uma função que remova
todos os elementos duplicados, mantendo apenas a primeira ocorrência de cada número (mais
próxima do topo). A solução deve preservar a ordem relativa dos elementos originais.
Entrada:
Uma lista de números representando a pilha (o último elemento da lista representa o topo).
Saída:
Uma lista representando a pilha resultante após a remoção de duplicatas.
Exemplo:
Entrada: [3, 7, 3, 2, 7, 1, 4, 2]
Saída: [3, 7, 2, 1, 4]
*/
export function RemoveDuplicados(pilha){
    const aux = [];
    const aux2 = [];

    for( let i=pilha.length-1; i>=0; i--){
        let elemento = pilha[i];
        let encontrado = false;

        while(aux.length > 0){
            let topo = aux.pop();        
            aux2.push(topo);

            if(topo === elemento){
                encontrado = true;
            }
        }

        while (aux2.length > 0) {
            aux.push(aux2.pop());
        }

        if(!encontrado){
            aux.push(elemento);
        }    
    }

    const resultado = [];
    while (aux.length > 0) {
        resultado.push(aux.pop());
    }

    return resultado;

  }
    
