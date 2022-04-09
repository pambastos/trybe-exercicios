// Aprendendo sobre template literals ( forma mais moderna de concatenação de strings) (shift + crase + espaço)

// let cliente = "Manolo";
// let valorASerPago = 100;

// const email = `Olá ${cliente}
// O valor da sua conta é de r$ ${valorASerPago}!
// Se não pagar, vai ficar com o nome sujo!
// vlw`;
// console.log(email);

// let nome = "Pâm Walsh";
// let idade = 27;
// console.log(`${nome} tem ${idade} anos de inferno!!!`);

// Aprendendo sobre operador ternário
// Precisa começar com uma condição, algo que retorne VERDADEIRO OU FALSO.
// ?
// execução
// : segunda execução

// ex :

// let numero = 13;
// let resultado = 0;
// if(numero %2 === 0){
//  resultado = "Número par"
// }
// else {
//     resultado = "Número ímpar"
// }
// console.log(resultado);

// utilizando o operador ternário :

// let numero = 13;
// let resultado = 0;
// numero % 2 === 0 ? resultado = "Número par" : resultado = "Número ímpar";
// console.log(resultado);

// Quando usar?
// Quando tivermos um if else comum, como o do exemplo.

// Arrow functions

// função tradicional :
// function divisaoTradicional (n1, n2){
// return n1 / n2;
// }
// console.log(divisaoTradicional(10,2));

// FUNÇÃO NÃO NOMEADA :
// const divisaoSemNome = function (n1, n2){
//     return n1 / n2
// }
// console.log(divisaoSemNome(10,2));

// ARROW FUNCTION :
// const divisao = (n1 , n2) => {
//     return n1 / n2;
// }
// console.log(divisao(10,2));

// CASO A FUNÇÃO TENHA APENAS UMA LINHA E RETORNE O RESULTADO DESSA LINHA, ELA PODE SER ESCRITA ASSIM:
// const divisao = (n1, n2) => n1 / n2;
// console.log(divisao(10,2));

// const nomeCompleto = (nome, sobrenome) => `Nome completo: ${nome} ${sobrenome}`;
// console.log(nomeCompleto("Pâm", "Walsh"));

// Onde usamos arrow function?

// No addEventListener :

// window.onload = () => {
// let button = document.getElementById('button');
// button.addEventListener('click' , () => {
//     alert('HAHAHA você não disse a palavra mágica!')
// });
// };







