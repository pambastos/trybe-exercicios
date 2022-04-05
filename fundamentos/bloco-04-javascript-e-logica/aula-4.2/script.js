// Array = lista.
//  Para armazenar informações.
//  Índice = posições do Array.
//  Sempre inicia no 0.
// .lengt - 1 = indica o ultimo elemento .


// 1 - .length = Para saber o tamanho do Array.
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.length;

// 2- .push = Para adicionar algo na ultima posição do Array. 
tasksList.push('Fazer exercícios da Trybe');


// 3 - .unshift = Para adicionar algo na primeira posição do Array. 
tasksList.unshift();


// 4- .pop = Para remover o último item do Array.apply
tasksList.pop(); 


// 5- .shift = Para remover o primeiro item do Array.
tasksList.shift();


// 6- .indexof = Para saber o índice de um elemento .
tasksList.indexOf('Reunião');


// EXERCÍCIOS

// 1- Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// 2-Procure o índice do valor "Portfólio" do array menu :
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// 3-Adicione o valor "Contato" no final do array menu :
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("contato");

console.log(menu);


// For = Estrutura de repetição.
// Usada para percorrer .

// Estrutura padrão : 
// for (let i = 0; i < cars.length; i += 1) 

// EXERCÍCIOS 
// 1-Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
 for (let i = 0; i < groceryList.length; i += 1) {
     console.log(groceryList[i]);
 }



 FOR of 
 exemplos :

//   1- 
 let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 
//1
//2
//3
//4
//5



// 2-
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


// Com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

EXERCÍCIO 

// 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomes of names){
    console.log(nomes);
}


EXERCÍCIOS

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let numeros of numbers){
    console.log(numeros);
}


