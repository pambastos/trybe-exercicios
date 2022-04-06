// Array = lista.
//  Para armazenar informações.
//  Índice = posições do Array.
//  Sempre inicia no 0.
// .lengt - 1 = indica o ultimo elemento .

// 1 - .length = Para saber o tamanho do Array.
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
// tasksList.length;

// 2- .push = Para adicionar algo na ultima posição do Array.
// tasksList.push('Fazer exercícios da Trybe');

// 3 - .unshift = Para adicionar algo na primeira posição do Array.
// tasksList.unshift();

// 4- .pop = Para remover o último item do Array.apply
// tasksList.pop();

// 5- .shift = Para remover o primeiro item do Array.
// tasksList.shift();

// 6- .indexof = Para saber o índice de um elemento .
// tasksList.indexOf('Reunião');

// EXERCÍCIOS

// 1- Obtenha o valor "Serviços" do array menu :
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// 2-Procure o índice do valor "Portfólio" do array menu :
// let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// 3-Adicione o valor "Contato" no final do array menu :
// let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push("contato");

// console.log(menu);

// For = Estrutura de repetição.
// Usada para percorrer .

// Estrutura padrão :
// for (let i = 0; i < cars.length; i += 1)

// EXERCÍCIOS
// 1-Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//  for (let i = 0; i < groceryList.length; i += 1) {
//      console.log(groceryList[i]);
//  }

//  for of
//  exemplos :

//   1-
//  let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }
// resultado:
//1
//2
//3
//4
//5

// 2-
// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// Com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// 11
// 21
// 31

// EXERCÍCIO

// 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log() :

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let nomes of names){
//     console.log(nomes);
// }

// EXERCÍCIOS

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let numeros of numbers){
//     console.log(numeros);
// }

// 2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultado = resultado +  numbers[index];
//   }

//   console.log(resultado);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
// let resultado = 0;
// for (let numero of numbers) {
//     resultado += numero
// };

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultado = resultado +  numbers[index];
//   }

//   let media = 0;
//   media = resultado / numbers.length

//   console.log(media);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   resultado = resultado + numbers[index];
// }

// let media = 0;
// media = resultado / numbers.length;

// if (media > 20) {
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumero) {
//       maiorNumero = numbers[index];
//     }
//   }

//   console.log(maiorNumero);

//   HISTORINHA :

//   SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 5 for maior do que 5 = falso, PRÓXIMO!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 9 for maior do que 5  = verdadeiro , ATUALIZE O VALOR DE MAIORNUMERO PARA 9!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 3 for maior do que 9 = falso, PRÓXIMO!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//   se 19 for maior do que 9 = verdadeiro, ATUALIZE O VALOR DE MAIORNUMERO PARA 19!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 70 for maior do que 19 = verdadeiro, ATUALIZE O VALOR DE MAIOR NUMERO PARA 70!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 8 for maior do que 70 = falso, PRÓXIMO!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 100 for maior do que 70 = verdadeiro, ATUALIZE O VALOR DE MAIORNUMERO PARA 100!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 2 for maior do que 100 = falso, PRÓXIMO!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 35 for maior do que 100 = falso, PRÓXIMO!

//  SE o numero selecionado (numbers[index]) for maior do que o número campeão (maiorNumero) executa o bloco de código, se não, próximo.
//  se 27 for maior do que 100 = falso, PRÓXIMO!

//  ******** fim do array*********
//  maiorNunero = 100;

// 6 -Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let contador = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//   if (numbers[i] % 2 !== 0) {
//     contador = contador + 1;
//   }
// }
//   if (contador == 0) {
//     console.log("nenhum valor ímpar encontrado");
//   } else {
//     console.log(contador);
//   }

// 7 -Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
      menorNumero = numbers[index];
    }
  }

  console.log(menorNumero);

//   8 -Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// let array = [];
// for (let numero = 1; numero <= 25; numero += 1) {
//     array.push(numero)
// }
// console.log(array);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
for ( let numero of array) {
    console.log( numero / 2)
}