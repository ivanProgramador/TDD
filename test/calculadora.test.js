let app = require("../app"); 

test("Deve retornar o valor 10 ao somar 5 + 5",()=>{

    let resultado = app.soma(5,5);
    expect(resultado).toEqual(10);
})