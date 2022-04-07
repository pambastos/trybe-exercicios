
// OBJETOS: 



// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };



//   let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//   };

//   diasDaSemana.1; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

//   let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };

//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank

//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000

//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

//   let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };

//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com

//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];

//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10

//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey




// EXERCÍCIOS
// 1- 

// let name = "Marta";
// let lastName = "Silva";
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//   nome: "Marta",
//   ultimoNome: "Silva",
//   idade: 34,
//   Medalhas: { golden: 2, silver: 3 },
// };



// 2- 

// console.log(
//     "A jogadora" +
//       " " +
//       player.nome +
//       " " +
//       player.ultimoNome +
//       " " +
//       "tem" +
//       " " +
//       player.idade +
//       " " +
//       "anos de idade."
//   );



// 3- 
// [2006, 2007, 2008, 2009, 2010, 2018];


// let player = {
//     nome: "Marta",
//     ultimoNome: "Silva",
//     idade: 34,
//     Medalhas: { golden: 2, silver: 3 },
//   };

// player.melhorDoMundo = [2006, 2007, 2008, 2009, 2010, 2018];




// 4 -


// console.log('A jogadora' + ' ' + player.nome + ' ' + player.ultimoNome + ' ' + 'foi eleita e melhor do mundo por ' + ' ' +  player.melhorDoMundo.length + ' ' + 'vezes.' )







// 5-

// let player = {
//     nome: "Marta",
//     ultimoNome: "Silva",
//     idade: 34,
//     Medalhas: { golden: 2, silver: 3 },
//   };

// player.melhorDoMundo = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('a jogadora possui' + ' ' + player.Medalhas.golden + ' ' +  'medalhas de ouro e' + ' ' + player.Medalhas.silver + ' ' +  'medalhas de prata.');



// FOR IN
// O forin nos retorna o seu ÍNDICE: 

// let cars = ['Saab', 'Volvo', 'BMW'];
// for (let index in cars) {
//   console.log(cars[index]);
// };
// Saab
// Volvo
// BMW



// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };
// for (let chave in car) {
//   console.log(chave, car[chave]);
// }
// type Fiat
// model 500
// color white



// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let index in food) {
//   console.log(index);
// };
//resultado: 0, 1, 2;



// FOR OF
// O forof nos retorna o seu VALOR.

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;

// EXERCÍCIOS: 
// 1- 
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };
// for(let chave in names){
//   console.log('Olá', names[chave])
// }
// Olá João
// Olá Maria
// Olá Jorge


// 2- 
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };
// for (let chave in car){
//   console.log(chave, car[chave])
// }


// FUNÇÕES 
//  Estrutura:

//  function name(params) {
//    return
//  };
//  console.log()


// EXERCÍCIOS 
// 1- 
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// for(let index in info){
//   console.log('Bem vinda,' + info.personagem)
// }

// // 2 - 
// info.reccorente = 'sim';
// console.log(info);

// // 3- 
// for(let chave in info){
//   console.log(chave)
// }

// // 4- 
// for(let chave in info){
//   console.log(info[chave])
// }

// // 5- 




// // 6-
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + "se chama" + leitor.livrosFavoritos[0].titulo);

// // 7- 
// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// });
// console.log(leitor)

// // 8- 
// console.log(leitor.nome + "tem" + leitor.livrosFavoritos.length + 'livros favoritos')



// // FUNÇÕES 
// function verificaSeEpalindromo (string) {
 

// }