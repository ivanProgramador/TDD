/*
TESTES

Antes de um software ou funcionalidade subrir para a pordução é necessario 
executar a etapa de testes onde são detectados possiveis problemas na aplicação 
,evitando que esses cheguem ao cliente final.

Testes manuais como o mome já diz e quando o desenvolvedor faz o teste da funcionalidade,
manualmente, em sistemas menores esse tipo de teste é normal o problema é quando estamos 
lidando com sistemas interprise capazes de fazer a união entre até 15 tabelas para montar
um registro, nesse caso o TDD precisa ser usado.

Teste automatizados são funções ou softwares escritos pelos desenvolvedores para testar 
aplicações.Em softwares de grande porte é arriscado demais executar testes manuais porque 
o desenvolvedor por esquecer de testar um campo ou um funcionalidade espepecifica que pode 
acarretar problemas criticos na integridade da base de dados.

Testes unitarios 
E um tipo de teste que serve para testar uma função especifica e somente ela  

Teste integration 
É um tipo de teste que testa uma função composta por outras funções, eo mais usado
atualmente. 

CDD CODE DRIVEN DEVELOPMENT (primeiro codigo depois teste, desenvolvimento normal)

Vantagens do uso de TDD

Economia de tempo 

  Quando existem códigos de teste, não é necessário perder tempo testando de forma manual,
  em alguns casos os codigos de teste poddem ser resproveitados para testar novas funcionalidades.

Documentação

  O Tdd me alguns casos pode funcionar como o gabarito do seu projeto, os codigos de teste sabem 
  como toda a estrutura qua será testada funciona podendo separar ela em varios componentes ou 
  funções. Então basuicamente enquanto se desenvolve codigo de testes sua aplicação está sendo 
  mapeada, isso ajuda a nmovos menbros da equipe entender a aplicação pelo contexto.

Quando não usar o TDD

  - quando o projeto precisa ser entregue muito rápido e for um projeto pequeno, porque além de aumentar o tempo
    de produção em caso de projeto freelancer isso pode dar prejuizo, TDD pode ser usado em porjetos e medio e grande 
    porte porque nesse tipo de projeto todas as funcionalidades devem ser testadas de forma auatromatica para econmizar tempo e 
    pessoal.

  - quando a aplicação já existir e quando ela não tem TDD fazer o TDD do zero iria exigir que toda a equipe
    desse uma pasusa no porgresso do porjheto para que os codigos de teste pudessem rasterar as funcionalidades e testa-las.
    Essa atitude em um projeto que já existe poderia causar um atraso na produção.

    Pratricando TDD
  
    Quando o Jest é executado ele vai buscar por um arquivo que tem a apalavra test no nome aqui eu coloquei calculadora.test.js
    esse arquivo normalemente é chamado de switch de testes.

    1 - eu importo o arquivo que tem as funções que eu vou testar
    2 - eu faço a função test() que recebe 2 parametros o primeiro é um strinbg onde nos dizemos qoue esta sendo esperado 
        desse teste eo segundo e a função que vai ser executada e testada.

    3 - a função expect recebe o resultado do teste e compara para ver se é igual a 10 se não fo o teste falhou
    
    test("Deve retornar o valor 10 ao somar 5 + 5",()=>{

    let resultado = app.soma(5,5);
    expect(resultado).toEqual(10);
    });


    Agrupando testes, no exemplo abaixo eu coloquei as duas funções no grupo de funções basicas 
    separar as funções em grupos ajuda quando existem muitas funções para testar no display do jest
    vai aparecer a descrição delas e o resultado. Assim é possivel saber que tipo de função foi testada 
    e a qual grupo a função pertence. 

    describe("funções basicas",()=>{

    test("Deve retornar o valor 10 ao somar 5 + 5",()=>{

        let resultado = app.soma(5,5);
        expect(resultado).toEqual(10);
    });

      test("Deve retornar 10 ao multiplicar 2 por 5",()=>{

          let resultado = app.mult(2,5);
          expect(resultado).toEqual(10);
          
      })

    })



    
    

  


   





  

                    













*/