let nome = "Cleber";

// Utilizando template literals para interpolação de strings
nome = `${nome} Canto`;

// Utilizando constante para a idade
const idade = 38;

// Utilizando const para o objeto usuário e template literals para a propriedade 'name'
const usuario = {
    name: "Cleber",
    idade, // Se a propriedade tem o mesmo nome da variável, pode ser simplificado
};

// Evitando alterações na propriedade 'idade' do objeto
// Isso evita mudanças acidentais no objeto constante
Object.freeze(usuario);

// Tentativa de alteração da propriedade 'idade'
// Isso gerará um erro em tempo de execução (em strict mode) ou falhará silenciosamente (em non-strict mode)
// usuario.idade = 39; 

console.log(usuario);
