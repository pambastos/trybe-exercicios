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

