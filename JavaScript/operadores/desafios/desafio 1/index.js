// 1) Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

// Fahrenheit para Celsius
// (32 °F − 32) × 5/9 = 0 °C

// Kelvin para Celsius
// 0 K − 273,15 = -273,1 °C

// Kelvin para Fahrenheit
// (0 K − 273,15) × 9/5 + 32 = -459,7 °F

let fahrenheit;
let celsius;
let Kelvin;


const celToFahr = () => {
    return celsius*(9/5) + 32;
};//Graus Celsius(°C) para Graus Fahrenheit (°C)
// GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

const fahToKelv = () => {
    return (fahrenheit - 32)*(5/9) + 273.15;
}//Fahrenheit para Kelvin
// (32 °F − 32) × 5/9 + 273,15 = 273,15 K

const celToKel = () =>{
    return celsius + 273.15
};// Graus celsius para Kelvin
//0 °C + 273,15 = 273,15 K

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
fahrenheit = 77;
console.log(`Convertendo 77°F para Kelvin: ${fahToKelv()}K`);

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
celsius = 80;
//let celToFahr = celsius*(9/5) + 32;
console.log(`Convertendo 80°C para Fahrenheit: ${celToFahr()}°F `);

// c)Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
celsius = 30;
console.log(`Convertendo 30°C para Fahrenheit: ${celToFahr()}°F `);
console.log(`Convertendo 30°C para Kelvin: ${celToKel()}K `);

// d) ltere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
celsius = Number(prompt("Digite o valor de °C para converter"));
console.log(`Convertendo ${celsius}°C para Fahrenheit: ${celToFahr()}°F `);
console.log(`Convertendo ${celsius}°C para Kelvin: ${celToKel()}K `);
