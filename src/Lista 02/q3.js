/* Uma empresa trabalha na produção de concreto e
terceiriza o serviço de transporte do produto. Os caminhoneiros telefonam para a empresa e
registram seu interesse pelo trabalho. Todas as manhãs, os caminhoneiros estacionam no pátio
da empresa e aguardam sua vez. O atendimento segue o critério de ordem de chegada. Esse
processo é, atualmente, controlado pela secretária, que utiliza sua agenda para gerenciar os
motoristas diariamente. A empresa, que carrega, no máximo, 10 caminhões por dia, pretende
informatizar esse processo. Implemente um sistema que atenda às necessidades da empresa
considerando as possibilidades de chegada de um novo caminhoneiro, saída de um
caminhoneiro, verificar se existe caminhoneiro no aguardo, verifique se o número de
carregamentos do dia foi atingido, listar todos os caminhões no aguardo.
*/
import Fila from "./Fila";

class FilaCaminhoneiros{
    constructor(size = 10){
        this.size = size;
        this.fila = new Fila(size);
    }

   chegadaCaminhao(caminhao){
    if (this.carregamentoAtingido()) {
        throw new Error("Limite diário de carregamentos atingido.");
    }
        this.fila.enqueue(caminhao);
    }

    saidaCaminhao(){
        if (this.fila.isEmpty()) {
            throw new Error("Nenhum caminhoneiro na fila.");
        }
        this.fila.dequeue();
    }

    caminhoneiroAguardando(){
       return !this.fila.isEmpty();
    }

    carregamentoAtingido(){
        return this.fila.isFull();
    }

    caminhoesAguardando(){
        if(this.caminhoesAguardando())
       return this.fila.toString();
    }
}
export default FilaCaminhoneiros;