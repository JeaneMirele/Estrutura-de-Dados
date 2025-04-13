import FilaCaminhoneiros from "../../src/Lista 02/q3";

let fc;

beforeEach(() => {
    fc = new FilaCaminhoneiros();
})

test("Se o carregamento do dia for atingido, e chegar um caminhão, o sistema deve retornar a mensagem", () => {
    fc.chegadaCaminhao(1);
    fc.chegadaCaminhao(2);
    fc.chegadaCaminhao(3);
    fc.chegadaCaminhao(4);
    fc.chegadaCaminhao(5);
    fc.chegadaCaminhao(6);
    fc.chegadaCaminhao(7);
    fc.chegadaCaminhao(8);
    fc.chegadaCaminhao(9);
    fc.chegadaCaminhao(10);

    expect(() => fc.chegadaCaminhao(11)).toThrow("Limite diário de carregamentos atingido");
})



