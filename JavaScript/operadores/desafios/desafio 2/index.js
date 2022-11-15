// 2) Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

let hora;
let quilowatts;
let desconto;
const quiloWattsHora = 0.05; 

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
/* quilowatts = 280;
const valorEnergia = quilowatts/quiloWattsHora;
console.log(`O valor a ser pago por consumir ${quilowatts} quilowatt-hora vai ser de R$${valorEnergia.toFixed(2)}`); */ 

// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
quilowatts = 280;
desconto = 0.85;
const valorEnergia = (quilowatts/quiloWattsHora) * desconto;
console.log(`O valor a ser pago por consumir ${quilowatts} quilowatt-hora vai ser de R$${valorEnergia.toFixed(2)} com 15% de desconto `);

