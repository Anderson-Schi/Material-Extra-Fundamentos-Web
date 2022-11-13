// 1) Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

// Graus Fahrenheit(°F) para Kelvin(K)
    // (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

//Graus Celsius(°C) para Graus Fahrenheit (°C)
    // GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

let fahrenheit;
let celcius;
let Kelvin

//let fahToKelv = (fahrenheit - 32)*(5/9) + 273.15;
 
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
fahrenheit = 77;
const fahToKelv = (fahrenheit - 32)*(5/9) + 273.15;
console.log(`Convertendo 77°F para Kelvin: ${fahToKelv}K`);
