const carrinhoDeCompras = [
    { produto: "Mouse", preco: 600.0, quantidade: 2 },
    { produto: "Teclado", preco: 120.0, quantidade: 1 },
    { produto: "Monitor", preco: 800.0, quantidade: 1 },
    { produto: "Fone de Ouvido", preco: 150.0, quantidade: 3 },
  ];
  
  // Utilizando o reduce para calcular informações sobre os produtos
  const resultado = carrinhoDeCompras.reduce(
    (acumulador, item) => {
      acumulador.totalPreco += item.preco * item.quantidade;
      acumulador.produtos.push({
        nome: item.produto,
        precoUnitario: item.preco,
        quantidade: item.quantidade,
      });
      return acumulador;
    },
    { totalPreco: 0, produtos: [] }
  );
  
  console.log("Total de Preço: R$", resultado.totalPreco.toFixed(2));
  console.log("Detalhes dos Produtos:");
  
  resultado.produtos.forEach((produto) => {
    console.log(
      `${produto.quantidade}x ${produto.nome} - R$ ${(
        produto.precoUnitario * produto.quantidade
      ).toFixed(2)}`
    );
  });
  