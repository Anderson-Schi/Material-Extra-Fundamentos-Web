// 3) Verifique se o email do usuário inclui @
const email = prompt("Informe seu email ");
const verificacao = email.includes("@");
console.log(`O email informado possui @ ? ${verificacao}`);