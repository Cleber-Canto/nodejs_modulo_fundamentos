/**
 * IF
 * ELSE
 * ELSE IF
 * SWITCH
 */

/**
 * IF 
 * SE O CURSO DA DANI FOR BOM, DE UMA NOTA BOA
 */


// IF - Else -Else if

const usuarioIdade = 18;

// Se usuarioIdade for maior que 18, mostre a mensagem "maior que 18"
if (usuarioIdade > 20) {
    console.log("Usuário maior que 18 anos");
} 
// Se usuarioIdade for igual a 18, mostre a mensagem "igual a 18"
else if (usuarioIdade === 18) {
    console.log("Usuário igual a 18 anos");
} 
// Caso contrário, o usuário é menor que 18, então mostre a mensagem "menor que 18"
else {
    console.log("Usuário menor que 18 anos");
}


// Switch - Case

/*const mes = 1;

switch(mes) {
    case 1:
        console.log("O , mês é janeiro");
        break;
    case 2:
        console.log("O mês é feveriero");
        break;
    case 3:
        console.log("O mês e março");
        break;
    default:
        console.log("O mês é qualquer um outro!"); 
        break;    
}
*/

const mes = 1;

const nomeDosMeses = {
    1: "janeiro",
    2: "fevereiro",
    3: "março",
    // Adicione outros meses conforme necessário
};

const nomeDoMes = nomeDosMeses[mes];

if (nomeDoMes) {
    console.log(`O mês é ${nomeDoMes}`);
} else {
    console.log("O mês é qualquer um outro!");
}
