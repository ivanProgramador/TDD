let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131",()=>{

   //sempre que trabalhar com promisse use o return porque se não vai confundir o jest

   return request.get("/").then(res=> expect(res.statusCode).toEqual(200));

})

//Esse segundo teste serve para verificar se o tributo cor do usuario victor que vem
//da api é vermelho

test("A rota deve retonar a cor vermelha",()=>{

   //ele faz a requisição para rota com nome do usuario 
   return request.get("/cor/victor").then(res=> expect(res.body.cor).toEqual("Vermelho")); 
});