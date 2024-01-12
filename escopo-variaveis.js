// Escopo var
function imprimeNomeVar() {
    if (true) {
        var nome = "Cleber";
    }
    console.log(nome);
}

imprimeNomeVar();

// Escopo let
function imprimeNomeLet() {
    if (true) {
        let nome = "Cleber";  // Corrigi um espaço extra aqui
        console.log(nome);
    }

    for (let numero = 0; numero < 5; numero++) {
        console.log(numero);
    }
}

imprimeNomeLet();

// Escopo const 

function imprimeNomeConst() {
    const nome = "Cleber";

    // A linha abaixo resultará em um erro, pois tentamos reatribuir uma constante.
    // nome = "OutroNome";

    console.log(nome);
}

imprimeNomeConst();
