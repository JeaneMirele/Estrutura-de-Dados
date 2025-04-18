/*Uma fila duplamente terminada (abreviada como Deque, do inglês double ended
    queue) é um tipo de dado abstrato que generaliza uma fila, para a qual os elementos podem ser
    adicionados ou removidos da frente (cabeça) ou de trás (cauda). Sobre o Deque realize as
    seguintes implementações utilizando a linguagem de programação Javascript.
    i. Implemente a função para instanciar e inicializar um Deque. (0,5)
    ii. Implemente a função de inserir no início de um Deque. (0,5)
    iii. Implemente a função de remover do início de um Deque. (0,5)
    iv. Implemente a função de inserir no fim de um Deque. (0,5)
    v. Implemente a função de remover do fim de um Deque. (0,5)*/


    class Deque {
        constructor(capacidade = 100) {
          this.deque = new Array(capacidade); 
          this.capacidade = capacidade;
          this.inicio = Math.floor(capacidade / 2); 
          this.fim = this.inicio;
        }
      
  
        inserirInicio(valor) {
          if (this.inicio === 0) {
            console.log("Deque cheio no início");
            return;
          }
          this.inicio--;
          this.deque[this.inicio] = valor;
        }
      
      
        inserirFim(valor) {
          if (this.fim === this.capacidade) {
            console.log("Deque cheio no fim");
            return;
          }
          this.deque[this.fim] = valor;
          this.fim++;
        }
      

        removerInicio() {
          if (this.isEmpty()) {
            console.log("Deque vazio");
            return null;
          }
          const valor = this.deque[this.inicio];
          this.inicio++;
          return valor;
        }
      
 
        removerFim() {
          if (this.isEmpty()) {
            console.log("Deque vazio");
            return null;
          }
          this.fim--;
          return this.deque[this.fim];
        }
      

        isEmpty() {
          return this.inicio === this.fim;
        }
      
 
        imprimir() {
          let resultado = "";
          for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.deque[i] + " ";
          }
          console.log(resultado.trim());
        }
      }
      export default Deque;