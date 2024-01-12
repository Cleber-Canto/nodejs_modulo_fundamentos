// Função que retorna uma Promise com um setTimeout
function aguardarTimeout(tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Mensagem após ${tempo / 1000} segundos`);
      }, tempo);
    });
  }
  
  // Utilizando async/await dentro de uma função assíncrona
  async function main() {
    console.log("Iniciando execução assíncrona");
  
    try {
      // Utilizando await para aguardar a conclusão da Promise
      const primeiraMensagem = await aguardarTimeout(1000);
      console.log({ primeiraMensagem });
  
      // Adicionando mais informações e aguardando outro período
      const segundaMensagem = await aguardarTimeout(2000);
      console.log({ segundaMensagem });
  
      // Adicionando ainda mais informações e aguardando outro período
      const terceiraMensagem = await aguardarTimeout(3000);
      console.log({ terceiraMensagem });
  
      console.log("Execução assíncrona concluída com sucesso");
    } catch (error) {
      console.error("Erro ao aguardar o setTimeout:", error);
    }
  }
  
  // Chamada da função assíncrona
  main();
  