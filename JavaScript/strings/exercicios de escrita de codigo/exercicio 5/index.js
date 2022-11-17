// 5) A mail.com  foi comprada pela labenu.com faça com que uma nova variável armazene o novo email do usuário substituindo o antigo endereço por labenu.com
const email = prompt("Informe seu email");
const novoEmail = email.replace("mail.com", "labenu.com");

console.log(`Bem-vindo a Labenu, seu nome endereco de email sera: ${novoEmail}`);
