// Array de objetos
const alunos = [
    { id: 1, nome: "Maria", idade: 20 },
    { id: 2, nome: "João", idade: 22 },
    { id: 3, nome: "Ana", idade: 25 },
];

// Função para encontrar um aluno pelo ID
function encontrarAlunoPorId(id) {
    return alunos.find(aluno => aluno.id === id);
}

// Buscando um aluno pelo ID
const alunoEncontrado = encontrarAlunoPorId(2);

// Exibindo o resultado
if (alunoEncontrado) {
    console.log("Aluno encontrado:", alunoEncontrado);
} else {
    console.log("Aluno não encontrado");
}
