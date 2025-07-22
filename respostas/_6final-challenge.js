// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// DESAFIO:
// a. Para cada aluno, calcule a média das notas
// b. Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)
// c. Conte quantos alunos foram aprovados e quantos foram reprovados
// d. Encontre o aluno com a maior média
// e. Calcule a média geral da turma

// Use console.log() para mostrar todos os resultados com mensagens claras

// Solução do desafio final
console.log("Relatório de Desempenho dos Alunos\\n");

let approvedCount = 0;
let failedCount = 0;
let totalClassAverage = 0;
let bestStudent = null;
let highestAverage = 0;

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    // a. Calculando a média do aluno
    let sum = 0;
    for (let j = 0; j < student.grades.length; j++) {
        sum += student.grades[j];
    }
    const average = sum / student.grades.length;

    // b. Determinando status de aprovação
    const status = average >= 70 ? "APROVADO" : "REPROVADO";

    // c. Contando aprovados e reprovados
    if (status === "APROVADO") {
        approvedCount++;
    } else {
        failedCount++;
    }

    // d. Verificando se é o melhor aluno
    if (average > highestAverage) {
        highestAverage = average;
        bestStudent = student.name;
    }

    // e. Adicionando à média da turma
    totalClassAverage += average;

    // Imprimindo relatório individual
    console.log(`Aluno: ${student.name} (${student.age} anos)`);
    console.log(`Notas: ${student.grades.join(", ")}`);
    console.log(`Média: ${average.toFixed(2)}`);
    console.log(`Status: ${status}\\n`);
}

// Calculando a média geral da turma
totalClassAverage /= students.length;

// Imprimindo estatísticas gerais
console.log("ESTATÍSTICAS DA TURMA");
console.log(`Total de alunos: ${students.length}`);
console.log(`Alunos aprovados: ${approvedCount}`);
console.log(`Alunos reprovados: ${failedCount}`);
console.log(`Média geral da turma: ${totalClassAverage.toFixed(2)}`);
console.log(`Melhor aluno: ${bestStudent} com média ${highestAverage.toFixed(2)}`);
