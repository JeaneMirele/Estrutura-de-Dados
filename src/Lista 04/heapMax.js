export class No{
    constructor(elemento, prioridade){
        this.elemento = elemento;
        this.prioridade = prioridade;
    }
}

class HeapMax{

    constructor(){
        this.size = 0;
        this.dados = [];
        this.dados[0] = new No(null, Number.POSITIVE_INFINITY);
    }

    insert(elemento, prioridade){
        
        this.size++;
        this.dados[this.size] = new No(elemento, prioridade);
        let i = this.size;
        let p= this.dados[Math.floor(i/2)];

        while(this.dados[p].prioridade < this.dados[i].prioridade){
           [this.dados[i], this.dados[p]] = [this.dados[p], this.dados[i]];
            i = p;
            p = Math.floor(i/2);
        }     
            
    }

    remove(){
        let max = this.dados[1];
        this.dados[1] = this.size;
        this.size--;

        let i = 1;
             while(true){
                let maior = i;
                const esquerda = 2 * i;
                const direita = 2 * i + 1;
        
                if (esquerda <= this.size && this.dados[esquerda] > this.dados[maior]) {
                    maior = esquerda;
                }
        
                if (direita <= this.size && this.dados[direita] > this.dados[maior]) {
                    maior = direita;
                }
            }
        
            return max;
        
    }
  
}




export default HeapMax;
