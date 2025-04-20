import No from "./No";

class Lista{
    constructor(){
        this.head = new No();
        this.tamanho = 0;
    }

    add(dado){
        let novoNo = new No(dado);
        novoNo.proximo = this.head.proximo;
        this.head.proximo = novoNo;
        this.tamanho++;
    }

    append(dado){
        let novoNo = new No(dado);
        if(this.isEmpty()){
            this.head.proximo = novoNo;
        }else{
        let atual = this.head;
        while(atual.proximo !== null){
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
        }
    }

    removeFirst(){
        if(this.isEmpty()){
           return;
        }else{
        let remove = this.head;
        this.head = this.head.proximo; // faz a cabeça receber o próximo nó, ou seja, ela terá o mesmo valor e ponteiro do nó a que ela apontava;
        return remove.valor;
        }
    }

    removeLast() {
        if (this.isEmpty()) {
          return;
        }
      
        let anterior = this.head;
        let atual = this.head.proximo;
      
        while (atual.proximo !== null) {
          anterior = atual;
          this.tamanho--;
          atual = atual.proximo;
        }
      
        anterior.proximo = null;
        this.tamanho--;
        return atual.valor;
      }

      removeAt(index) {
        if (index < 0 || index >= this.length()) return "Índice inválido!";
      
        let removido;
      
        if (index === 0) {
          removido = this.head.proximo;
          this.head.proximo = removido.proximo;
        } else {
          let anterior = this.head;
          for (let i = 0; i < index; i++) {
            anterior = anterior.proximo;
          }
      
          removido = anterior.proximo;
          anterior.proximo = removido.proximo;
        }
      
        this.tamanho--;
        return removido.valor;
      }

      addAt(index, dado) {
        if (index < 0 || index > this.length()) return "Índice inválido!";
      
        const novoNo = new No(dado);
      
        let atual = this.head;
        for (let i = 0; i < index; i++) {
          atual = atual.proximo;
        }
      
        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
      
        this.tamanho++;
      }
      

    search(valorBuscado){ 
        let atual = this.head;
        while (atual) {
          if (atual.valor === valorBuscado) {
            return atual.valor; 
          }
          atual = atual.proximo;
        }
        return false;
    }

    isEmpty(){
        return this.head.proximo === null;
    }

    length(){
        return this.tamanho;
    }   
          
}

export default Lista;