// WHILE - Enquanto a condição for verdadeiro, faça alguma coisa 

// let dinheiro = 1000;

// while (dinheiro > 0) {
//    console.log("Eu posso gastar , tenho " + dinheiro + " reais ");
//    dinheiro = dinheiro - 100;
//}

// console.log("Acabou o seu dinheiro " + dinheiro);

// Do / while
/*do { 
    console.log("Eu posso gastar , tenho " + dinheiro + " reais ");
    dinheiro = dinheiro - 100;
}while (dinheiro > 0);
console.log("Acabou o seu dinheiro  " + dinheiro);
*/

let dinheiro = 500; // ou qualquer valor inicial desejado

if (dinheiro <= 0) {
    console.log("Você não tem dinheiro para gastar.");
} else {
    do {
        console.log(`Eu posso gastar, tenho ${dinheiro} reais.`);
        dinheiro -= 100;
    } while (dinheiro > 0);

    console.log("Acabou o seu dinheiro.");
}
