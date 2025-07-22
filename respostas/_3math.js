// Exercícios de operações matemáticas

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b); // a elevado a b

// Incremento e decremento
let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++); // Mostra 5, depois incrementa
console.log("Novo valor:", counter);       // Agora mostra 6
console.log("Pré-incremento:", ++counter); // Incrementa primeiro, depois mostra 7
console.log("Valor final:", counter);      // Mostra 7

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

// DESAFIO:
// a. Calcule a média de 3 números: 15, 25 e 38
// b. Converta a string "123.45" em um número
// c. Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo

// Soluções do desafio
// a. Cálculo da média
const num1 = 15;
const num2 = 25;
const num3 = 38;

const average = (num1 + num2 + num3) / 3;
console.log("Média dos três números:", average);

// b. Conversão da string "123.45" em um número
const decimalString = "123.45";
const decimalNumber = parseFloat(decimalString);
console.log("String convertida para número decimal:", decimalNumber, typeof decimalNumber);

// c. Arredondamento do resultado de 9.7 dividido por 2
const division = 9.7 / 2;
console.log("Resultado da divisão:", division);
console.log("Arredondado:", Math.round(division));
