// Buscar os dados do usuário
function buscarUsuario() {
    // Simulando dados do banco de dados
    const usuario = {
        id: 1,
        nome: "Miguel",
        idade: 40,
    };

    return usuario;
}

// Função para validar a idade do usuário
function validarIdade(usuario) {
    return usuario.idade >= 18;
}

// Função para exibir a mensagem sobre a idade do usuário
function exibirMensagemIdade(maiorDeIdade) {
    if (maiorDeIdade) {
        console.log("Usuário maior de idade");
    } else {
        console.log("Usuário menor de idade");
    }
}

// Fluxo principal
const usuario = buscarUsuario();
const maiorDeIdade = validarIdade(usuario);
exibirMensagemIdade(maiorDeIdade);
