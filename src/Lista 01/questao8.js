/*Imagine que você tem um conjunto de pratos empilhados. No entanto, por
questões de organização, cada pilha só pode conter um número máximo capacidade de pratos.
Se uma pilha atingir essa capacidade, uma nova pilha é criada.
Implemente uma estrutura de dados PilhaDePratos que suporte as operações:
empilha(int x): Adiciona um prato à última pilha disponível ou cria uma nova pilha, se necessário.
desempilha(): Remove um prato da última pilha disponível e retorna seu valor. Se todas as pilhas
estiverem vazias, retorne None.
Entrada e Saída Esperadas:
PilhaDePratos(3) // Define a capacidade de cada pilha como 3
empilha(5)
empilha(10)
empilha(15)
empilha(20) // Nova pilha criada
desempilha() // Retorna 20
desempilha() // // Retorna 15 */


class PilhaDePratos{

    constructor(capacidade){
        this.capacidade = capacidade;
        this.pilhas = [[]];
    }

   

    empilha(x){
        let ultimaP = this.pilhas[this.pilhas.length -1];

       if(ultimaP.length === this.capacidade){
            this.pilhas.push([]);
            ultimaP = this.pilhas[this.pilhas.length -1];
       }
        
        ultimaP.push(x);
    }

    desempilha(){
        if(this.pilhas.every(pilha => pilha.length === 0)) return "None";
        
        let ultimaP = this.pilhas[this.pilhas.length -1];

            return ultimaP.pop();
    }

   
}
export default PilhaDePratos;