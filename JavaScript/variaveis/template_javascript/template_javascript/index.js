// 1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/* let a = 10 ;
let b = 10 ;

console.log(b);

b = 5

console.log(a, b); */

// R: Sera impresso no console primeiramente 10 e posteriormente 10 e 5, ja que o valor de b foi modificado.

// 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

/* let a = 10;
let b = 20;

c = a
b = c
a = b

console.log(a, b ,c); */

//R: O programa ira imprimir 10 10 10 pois os valores foram redifinidos c = a = 10 / b = c = 10 / a = b = 10

// 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

// let p = prompt("Quantas horas voce trabalha por dia ?"); // Como a questao guarda informacao sobre horas trabalhadas por dia o nome da variavel poderia ser horasDia
// let t = prompt("Quanto voce recebe por dia ?"); // A variavel recebe informacao sobre um recebimento diario o nome da variavel poderia ser salarioPorDia
// alert(`Voce recebe ${t/p} por hora`);

// Exercicio escrita de codigo

// 1- Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
 let nome = "";

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade ;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
//console.log(typeof nome ,typeof idade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    //R: O tipo "string" foi impresso no console pois as variaveis mesmo que vazias porem com "" sao lida como string seja ela CONST ou LET, no caso da variavel IDADE por ser uma LET foi impresso o valor como UNDEFINED por nao ter nem um valor atribuido.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt("Digite seu nome: ");
idade = prompt("Informe sua idade: ");

console.log(typeof nome ,typeof idade);

// f)Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// R: o ainda sim foi impresso as duas variaveis como string, porem se a variavel IDADE fosse usado a propriedade NUMBER o tipo seria mudade para number.

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log(`Ola ${nome}, voce tem ${idade} anos.`);
