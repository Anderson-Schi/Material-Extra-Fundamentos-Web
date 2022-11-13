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
 //let nome = "";

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
//let idade ;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
//console.log(typeof nome ,typeof idade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    //R: O tipo "string" foi impresso no console pois as variaveis mesmo que vazias porem com "" sao lida como string seja ela CONST ou LET, no caso da variavel IDADE por ser uma LET foi impresso o valor como UNDEFINED por nao ter nem um valor atribuido.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

//nome = prompt("Digite seu nome: ");
//idade = prompt("Informe sua idade: ");

//console.log(typeof nome ,typeof idade);

// f)Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// R: o ainda sim foi impresso as duas variaveis como string, porem se a variavel IDADE fosse usado a propriedade NUMBER o tipo seria mudade para number.

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

//console.log(`Ola ${nome}, voce tem ${idade} anos.`);

// 2) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
// a) Crie três novas variáveis, contendo as respostas
/* const p1 = prompt("Voce esta usando roupa azul hoje ?");
const r1 = "Voce esta usando roupa azul hoje ? " + p1;
const p2 = prompt("Esta chovendo hoje ?");
const r2 = "Esta chovendo hoje ? " + p2;
const p3 = prompt("Esta de folga hoje ?");
const r3 = "Esta de folga hoje ? " +p3; */

// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
//console.log(`${p1, r1}, \n${p2, r2}, \n${p3, r3}`);

// 3) Suponha que temos duas variáveis cao e gato, cada uma com um valor inicial
/*  let cao = "Mingau"
    let gato = "Bidu" */

/* Agora, queremos trocar os valores delas, de forma que `cao` passe a ter o valor de `gato` e `gato` passe a ter o valor de `cao.` 
Ou seja, no caso desse exemplo acima, `cao` passaria a ser `“Bidu”` e `gato` passaria a ser `Mingau.` */

/* let cao = "Mingau";
let gato = "Bidu";
let logica */ 

// Aqui faremos uma lógica para trocar os valores
/* logica = cao;
cao = gato */

/* console.log(`O novo valor de cao: ${cao}`);
console.log(`O novo valor de gato: ${logica} `); */

// 4)Escreva um programa que pergunte ao usuário se ele gostaria de ser redirecionado para a página da Labenu. Use para isso um confirm e imprima a variável no console. Observe qual o valor recebido pela variável  quando apertamos o botão de ok e o de cancelar
//const resposta = confirm("Voce gostaria de ser redirecionado para a pagina da Labenu? ");
//console.log(resposta);
//console.log(typeof(resposta));
// 5)Agora avise o usuário que ele está no site da Labenu usando um alert. A mensagem deverá estar guardada em uma variável e esta variável deverá ser colocada dentro do alert
//const naPagina = "Voce esta na pagina da Labenu";
//console.log(alert(naPagina));

// 6)agora crie mais três variáveis, uma para nomeDoUsuario,uma para ideiaDoDia e outra para dataAtual . Considerando que é um aplicativo que será usado sempre pela mesma pessoa,  pense em quais dados serão constantemente atualizados e quais permanecerão os mesmos na hora de declarar as variáveis
/* const nomeDoUsuario = "Anderson";
let ideiaDoDia = "Terminar a Lista de exercicios JS";

let data = new Date();
let day = data.getDate();
let month = data.getMonth() + 1;
let year = data.getFullYear();
let dataAtual = `${day} / ${month} / ${year}`; */

// 7) /* Imprima no console a frase : Olá  nomeDoUsuario a sua ideia para o dia dataAtual é ideiaDoDia.
/* Depois mude as variáveis dataAtual e ideiaDoDia e imprima outra vez a mesma frase com novas variáveis
console.log(); */
 //console.log(`Ola ${nomeDoUsuario} a sua ideia para o dia ${day} e ${ideiaDoDia} `)

// Desafio
// 1) Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
    // 1. O primeiro número somado ao segundo número resulta em: x.
    // O primeiro número multiplicado pelo segundo número resulta em: y.
const n1 = prompt("Digite um numero: ");
const n2 = prompt("Digite outro numero: ");


console.log("A soma dos dois numero = ", Number(n1) + Number(n2));
console.log("A Multiplicao entre os dois numeros = ", Number(n1) * Number(n2));



