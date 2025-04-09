/*A Notação Polonesa Reversa (RPN, do inglês Reverse Polish Notation) é uma
notação matemática onde cada operador segue todos os seus operandos. Por exemplo, para
somar três e quatro, alguém escreveria "3 4 +" em vez de "3 + 4". Se houver múltiplas operações,
o operador é dado imediatamente após seu segundo operando; então a expressão "3 - 4 + 5"
seria escrita como "3 4 - 5 +", primeiro subtraindo 4 de 3 e depois adicionando 5 a isso.
Desenvolva um método que transforme a expressão algébrica com parênteses em uma forma
RPN. Você pode supor que para os casos de teste abaixo apenas letras simples serão usadas e
colchetes [] não serão utilizados. A ordem de precedência de operadores é muito importante e
não deve ser ignorada.
1
2
4
3
Pilha A
Pilha B
Topo A
Topo B
Entrada Saída
(a+(b*c)) abc*+
((a+b)*(z+x)) ab+zx+*
((a+t)*((b+(a+c))^(c+d))) at+bac++cd+^*
a+b*c-d abc*+d-
(a+b)+c/d ab+cd/+
a*b-(c-d)+e ab*cd-e+*/
import Pilha from "./Pilha";

export function RPNform(expressao){
    const precedencia = { "^" : 3, "/": 2, "*" : 2, "+" : 1, "-" : 1 };

    const pilha = new Pilha();
    let saida = "";

  for (const token of expressao) {
    if (token === " ") continue;

    if (/[a-zA-Z0-9]/.test(token)) {
      saida += token;

    } else if (token === "(") {
      pilha.push(token);

    } else if (token === ")") {
      while (!pilha.isEmpty() && pilha.top() !== "(") {
        saida += pilha.pop();
      }
      pilha.pop(); 

    } else {
      
      while (
        !pilha.isEmpty() &&
        pilha.top() !== "(" &&
        precedencia[pilha.top()] >= precedencia[token]
      ) {
        saida += pilha.pop();
      }
      pilha.push(token);
    }
  }

  while (!pilha.isEmpty()) {
    saida += pilha.pop();
  }

  return saida;
};

