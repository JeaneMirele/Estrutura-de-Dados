import HeapMax from "../../src/Lista 04/heap";

let h;

beforeEach(()=>{
    h = new HeapMax();
})

test("Insert funciona?", () => {
    h.insert(15);
    h.insert(16);

    expect(h.dados.slice(1, h.size + 1)).toEqual([16, 15]);     
})

test("remove, funciona?", () => {
    
})