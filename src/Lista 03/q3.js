/*Implemente uma lista simples utilizando um array de nós (nodes) para guardar as
informações.*/

import No from "./No";
class ListaComArray{
    constructor(){
        this.nodes = new Array(size);
        this.inicio = null; 
        this.fim = 0;        
        this.size = size;
    }
    
    add(dado) {
        if (this.isFull()) {
            console.log("Overflow");
            return;
        }

        const novoNo = new No(dado);
        this.nodes[this.fim] = novoNo;

        if (this.inicio === null) {
            this.inicio = this.fim;
        } else {
            let atual = this.inicio;
            while (this.nodes[atual].proximo !== null) {
                atual = this.nodes[atual].proximo;
            }
            this.nodes[atual].proximo = this.fim;
        }

        this.fim++;
    }

    addFirst(dado) {
        if (this.isFull()) {
            console.log("Overflow");
            return;
        }

        const novoNo = new No(dado);
        this.nodes[this.fim] = novoNo;
        novoNo.proximo = this.inicio;
        this.inicio = this.fim;
        this.fim++;
    }

  
    removeFirst() {
        if (this.isEmpty()) {
            console.log("Lista vazia!");
            return;
        }

        const removido = this.nodes[this.inicio].dado;
        this.inicio = this.nodes[this.inicio].proximo;
        console.log(`Removido do início: ${removido}`);
    }


    removeLast() {
        if (this.isEmpty()) {
            console.log("Lista vazia!");
            return;
        }

        let atual = this.inicio;
        let anterior = null;

        while (this.nodes[atual].proximo !== null) {
            anterior = atual;
            atual = this.nodes[atual].proximo;
        }

        const removido = this.nodes[atual].dado;

        if (anterior === null) {
            this.inicio = null;
        } else {
            this.nodes[anterior].proximo = null;
        }

        console.log(`Removido do fim: ${removido}`);
    }

    isFull() {
        return this.fim >= this.size;
    }

    isEmpty() {
        return this.inicio === null;
    }


}