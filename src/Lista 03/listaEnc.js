import No from "./No";

class Lista{
    constructor(){
        this.head = new No();
    }

    add(dado){
        let novoNo = new No(dado);
        novoNo.proximo = head.proximo;
        head.proximo = novoNo;
    }

    append(dado){
        if(!this.isEmpty()){
            
        }

    }
}