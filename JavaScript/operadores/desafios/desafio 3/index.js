// 3) Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// 20lb equivalem a X kg

// m(kg) = m(lb) × 0.45359237

/* let kg;
let lb;
let oz; */

const libToKg = (lb,constante) => {
    //lb = 20;
    constante = 0.45359237
    return lb * constante
};
console.log(`\n20lb equivalem a ${libToKg(20).toFixed(3)}kg\n`)

// b)Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// 10.5oz equivalem a X kg

// m(kg) = m(oz) × 0.02834952
const ozToKg = (oz,constante) => {
   //oz = 10.5;
    constante = 0.02834952;
    return oz * constante;
};
console.log(`10.5oz equivalem a ${ozToKg(10.5).toFixed(3)}kg\n`);

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// 100mi equivalem a X m

// d(m) = d(mi) × 1609.344
const miToM = (mi,constante) => {
    constante = 1609.344;
    return mi * constante;
};
console.log(`100mi equivalem a ${miToM(100).toFixed(1)}m\n`);

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// 50ft equivalem a X m

// d(m) = d(ft) × 0.3048
const ftToM = (ft,constante) => {
    constante = 0.3048;
    return ft * constante
};
console.log(`50ft equivalem a ${ftToM(50).toFixed(2)}m\n`);





