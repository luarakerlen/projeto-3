// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("\\nLoop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("\\nPulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("\\nLista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}

// DESAFIO:
// a. Crie um loop que imprima a tabuada do 7 (de 1 a 10)
// b. Crie um array de números e calcule a soma deles usando um loop
// c. Crie um loop que identifique o menor valor em um array de números

// Soluções do desafio
// a. Tabuada do 7
console.log("\\nTabuada do 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// b. Soma de elementos de um array
const numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("\\nArray de números:", numbers);
console.log("Soma dos números:", sum);

// c. Encontrando o menor valor
const values = [28, 14, 33, 7, 42, 19];
let smallest = values[0]; // Assume que o primeiro é o menor

for (let i = 1; i < values.length; i++) {
    if (values[i] < smallest) {
        smallest = values[i];
    }
}

console.log("\\nArray de valores:", values);
console.log("Menor valor:", smallest);
