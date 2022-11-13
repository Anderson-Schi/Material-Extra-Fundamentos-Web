//1 Faça um programa que:

// a) Pergunte a idade do usuario:
const idade = prompt("informe sua idade ");
const rIdade = Number(idade);

// b) Pergunte a idade do seu melhor amigo(a)
const idadeBb = prompt("Informe a idade do seu melhor amigo ou amiga");
const rIdadebB = Number(idadeBb);

// c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
console.log(`Sua idade e maior do que seu melhor amigo(a)? ${rIdade >= rIdadebB}`);

// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)
const diferenca = (rIdade - rIdadebB) * -1
console.log(`A diferenca de idade entre voces e de ${diferenca} anos`);


