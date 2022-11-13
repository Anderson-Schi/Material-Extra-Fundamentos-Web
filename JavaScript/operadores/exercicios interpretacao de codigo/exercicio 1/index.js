// 1) Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // o resultado impresso no console sera a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // o resultado impresso no console sera b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // o resultado impresso no console sera c. true

console.log("d. ", typeof resultado) // o resultado impresso no console sera d. boolean