// POP - Remover o último item
// const ultimoItem = nomes.pop();
// console.log(ultimoItem);
// SHIFT - Remover o primeiro item
// UNSHIFT - Adicionar no incio do array 
// INDEXOF - Encontre o index do item 
// MAP 

// POP - Remover o último item
function removerUltimoItem(array) {
  const ultimoItem = array.pop();
  return ultimoItem;
}

// SHIFT - Remover o primeiro item
function removerPrimeiroItem(array) {
  const primeiroItem = array.shift();
  return primeiroItem;
}

// UNSHIFT - Adicionar no início do array
function adicionarNoInicio(array, elemento) {
  array.unshift(elemento);
  return array.length; // Retorna o novo comprimento do array após a operação
}

// INDEXOF - Encontrar o índice do item
function encontrarIndex(array, elemento) {
  return array.indexOf(elemento);
}

// MAP - Aplicar uma função a cada elemento do array
function aplicarMap(array, funcao) {
  return array.map(funcao);
}

// Exemplo de uso:
const nomes = ['João', 'Maria', 'José'];

console.log(removerUltimoItem(nomes)); // Remove 'José' e retorna 'José'
console.log(removerPrimeiroItem(nomes)); // Remove 'João' e retorna 'João'
console.log(adicionarNoInicio(nomes, 'Carlos')); // Adiciona 'Carlos' no início e retorna o novo comprimento
console.log(encontrarIndex(nomes, 'Maria')); // Encontra o índice de 'Maria' no array

// Função para transformar todos os nomes em maiúsculas usando MAP
const nomesMaiusculos = aplicarMap(nomes, (nome) => nome.toUpperCase());
console.log(nomesMaiusculos); // Output: ['CARLOS', 'MARIA']

console.log(nomes); // Output final do array: ['Carlos', 'Maria']
