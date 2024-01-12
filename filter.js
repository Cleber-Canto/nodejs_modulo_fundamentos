// Array de objetos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 30 },
    { id: 2, nome: "Calça", preco: 50 },
    { id: 3, nome: "Tênis", preco: 80 },
    { id: 4, nome: "Boné", preco: 20 },
];

// Função para filtrar produtos com preço menor que 50
function filtrarProdutosComPrecoMenorQue50() {
    return produtos.filter(produto => produto.preco < 50);
}

// Filtrando produtos
const produtosFiltrados = filtrarProdutosComPrecoMenorQue50();

// Exibindo o resultado
if (produtosFiltrados.length > 0) {
    console.log("Produtos com preço menor que 50:", produtosFiltrados);
} else {
    console.log("Nenhum produto encontrado com preço menor que 50");
}
