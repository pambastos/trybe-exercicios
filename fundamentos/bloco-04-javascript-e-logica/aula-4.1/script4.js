// Operadores Lógicos

// &&
const comida = "pão na chapa";
const bebida = "cafézinho";

if (bebida === "cafézinho" && comida === "pão na chapa") {
  console.log("Muito obrigado pela refeição :)");
} else {
  console.log("Acho que houve um engano com meu pedido");
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

//   (false, pois o && precisa que as duas condições sejam true)

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 16;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour < 4) {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

//   Or || ou

const weekDay = "quarta-feira";

if (
  weekDay === "segunda-feira" ||
  weekDay === "terça-feira" ||
  weekDay === "quarta-feira" ||
  weekDay === "quinta-feira" ||
  weekDay === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descando merecido UwU");
}

// EXERCICIO 1- 

const a = 10;
const b = 5;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));

// EXERCÍCIO 2- Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const a = 20;
const b = 21;

if (a > b) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("'b' é maior que 'a'");
}

// EXERCÍCIO 3- Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
  console.log("O maior número é: " + a + " (a)");
} else if (b > a && b > c) {
  console.log("O maior número é: " + b + " (b)");
} else {
  console.log("O maior número é: " + c + " (c)");
}

// EXERCÍCIO 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.

const number = 4;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}


// EXERCÍCIO 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaDosAngulos = anguloA + anguloB + anguloC;

let todosOsAngulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todosOsAngulosSaoPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}


// EXERCÍCIO 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};


// EXERCÍCIO 7 - Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}


// EXERCÍCIO 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .

const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

// EXERCÍCIO 9 - Escreva um programa que defina três números em constantes no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

const a = 1;
const b = 3;
const c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

// EXERCÍCIO 10- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto).


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};


// EXERCÍCIO 11- Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));

