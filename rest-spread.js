// Spread - Espalhar
const aluno = {
    nome: "Miguel",
    idade: 38,
    cursos: ["Node", "SQL", "Docker"],
    email: "cantosaraiva@gmail.com",
    endereco: "Rua Qualquer",
    telefone: "124844515151",
};

console.log("Aluno:", aluno);

// Atualizando o aluno usando spread
const alunoAtualizado = {
    ...aluno,
    idade: 40,
    cursos: [...aluno.cursos, "php"],
};

console.log("Aluno Atualizado:", alunoAtualizado);

// Rest - Extraindo nome e idade, e o resto vai para o objeto 'resto'
const { nome, idade, ...resto } = aluno;
console.log("Resto:", resto);
