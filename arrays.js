// o que é um array 
// Index = 0
// splice 

// Criando um array
const frutas = ["Maçã", "Banana", "Morango"];

// Exibindo o array
console.log("Array de frutas:", frutas);

// Acessando elementos do array
console.log("Primeira fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);

// Adicionando um elemento ao final do array
frutas.push("Abacaxi");
console.log("Array após adicionar Abacaxi:", frutas);

// Removendo o último elemento do array
const ultimaFrutaRemovida = frutas.pop();
console.log("Array após remover o último elemento:", frutas);
console.log("Última fruta removida:", ultimaFrutaRemovida);

// Verificando o tamanho do array
console.log("Tamanho do array:", frutas.length);

// Iterando sobre os elementos do array
console.log("Iteração sobre os elementos:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}
