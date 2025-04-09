import { RPNform } from "../../src/Lista 01/questao6"; 

describe("Conversão de expressão", () => {
  test("Converte 'a + b * c' corretamente", () => {
    expect(RPNform("a + b * c")).toBe("abc*+");
  });

  test("Converte '(a + b) * (z + x)' corretamente", () => {
    expect(RPNform("(a + b) * (z + x)")).toBe("ab+zx+*");
  });

  test("Converte '(a + t) * ((b + (a + c)) ^ (c + d))' corretamente", () => {
    expect(RPNform("(a + t) * ((b + (a + c)) ^ (c + d))")).toBe("at+bac++cd+^*");
  });

  test("Converte 'a + b * c - d' corretamente", () => {
    expect(RPNform("a + b * c - d")).toBe("abc*+d-");
  });

  test("Converte '(a + b) + c / d' corretamente", () => {
    expect(RPNform("(a + b) + c / d")).toBe("ab+cd/+");
  });

  test("Converte 'a * b - (c - d) + e' corretamente", () => {
    expect(RPNform("a * b - (c - d) + e")).toBe("ab*cd--e+");
  });
});
