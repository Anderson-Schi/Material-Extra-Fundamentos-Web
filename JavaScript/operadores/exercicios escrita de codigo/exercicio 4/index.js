// 4) Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
const num1 = prompt("Digite um numero ");
const rNum1 = Number(num1);

const num2 = prompt("Digite outro numero ");
const rNum2 = Number(num2);

console.log(`O primeiro numero e maior que o segundo? ${rNum1 > rNum2}`);
console.log(`O primeiro numero e igual ao segundo? ${rNum1 === rNum2}`);
console.log(`O primeiro numero e divisivel pelo segundo? ${(rNum1%rNum2) === 0}`);
console.log(`O segundo numero e divisivel pelo primeiro? ${(rNum2%rNum1) === 0}`);
