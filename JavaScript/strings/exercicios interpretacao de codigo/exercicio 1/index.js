// 1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let string
console.log('a. ', string)// imprime a. undefined

string = null
console.log('b. ', string)// imprime b. null

string = "paralelepípedo"
console.log('c. ', string.length)// imprime c. 14

let i = 0
console.log('d. ', string[i])// imprime d. 0


const valor = string[i+6]
console.log('e. ', valor)// imprime e. l (setimo indice do array letra "L")

i = 13
console.log('f. ', string[i])// imprime f. 0 (decimo terceiro indince do array letra "0")

i = 14
console.log('g. ', string[i])// imprime g. undefined (nao tem o decimo quarto item no array)