// Exercícios com estruturas condicionais

// Verificação de idade
const age = 17;

if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);

// DESAFIO:
// a. Crie um sistema de classificação de notas:
//    - 0-59: F
//    - 60-69: D
//    - 70-79: C
//    - 80-89: B
//    - 90-100: A
// b. Verifique se um número é par ou ímpar
// c. Crie uma verificação que diga se uma pessoa pode dirigir
//    (precisa ser maior de idade E ter habilitação)

// Soluções do desafio
// a. Sistema de classificação de notas
const grade = 85;
let letterGrade;

if (grade >= 90) {
    letterGrade = "A";
} else if (grade >= 80) {
    letterGrade = "B";
} else if (grade >= 70) {
    letterGrade = "C";
} else if (grade >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log(`Nota numérica: ${grade}, Conceito: ${letterGrade}`);

// b. Verificação de par ou ímpar
const number = 7;
if (number % 2 === 0) {
    console.log(`${number} é par`);
} else {
    console.log(`${number} é ímpar`);
}

// c. Verificação para dirigir
const personAge = 19;
const hasLicense = true;

if (personAge >= 18 && hasLicense) {
    console.log("Pode dirigir");
} else if (personAge >= 18 && !hasLicense) {
    console.log("Maior de idade, mas precisa de habilitação");
} else {
    console.log("Não pode dirigir, é menor de idade");
}

