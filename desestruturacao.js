let nome = "Canto";

const pessoa = {
    nome: "Cleber",
    idade: 39,
    documento: "859632544788",
    Instagram: "Cleber",
};

// Destructuring para extrair a propriedade 'nome' do objeto 'pessoa'
const { nome: nomeDaPessoa } = pessoa;

// Exibindo as variáveis 'nome' e 'nomeDaPessoa' no console
console.log({ nome, nomeDaPessoa });

// Verificando se 'nome' é igual a 'nomeDaPessoa'
console.log(`O valor de 'nome' é igual a 'nomeDaPessoa': ${nome === nomeDaPessoa}`);
