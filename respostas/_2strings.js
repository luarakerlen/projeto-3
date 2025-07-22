// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// DESAFIO: Faça estas operações
// a. Extraia o primeiro nome usando o método slice ou substring
// b. Verifique se o nome completo contém a letra 'a'
// c. Substitua "Silva" por outro sobrenome usando replace

// Soluções do desafio

// a. Extração do primeiro nome
console.log("Primeiro nome extraído:", fullName.slice(0, firstName.length));
// ou
console.log("Primeiro nome extraído:", fullName.substring(0, firstName.length));

// b. Verificação da presença da letra 'a'
console.log("Nome contém a letra 'a'?", fullName.includes('a'));
// ou
console.log("Nome contém a letra 'a'?", fullName.indexOf('a') !== -1);

// c. Substituição do sobrenome
const newLastName = fullName.replace("Silva", "Oliveira");
console.log("Novo nome completo:", newLastName);
