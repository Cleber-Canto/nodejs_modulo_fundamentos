// O que é um Objeto ?
// new Object();

// Definindo as características de uma caneta azul usando objeto literal
const canetaAzul = {
    cor: "Azul",
    marca: "Bic",
    dimensao: "6cm"
};

// Exibindo as informações da caneta azul no console
console.log({ CanetaAzul: canetaAzul });

// Criando outra caneta preta usando new Object()
var canetaPreta = new Object();
canetaPreta.cor = "Preta";
canetaPreta.marca = "Bic";
canetaPreta.dimensao = "8cm";

// Exibindo as informações da caneta preta no console
console.log({ CanetaPreta: canetaPreta });

// Definindo uma função construtora Caneta
function Caneta(cor, marca, dimensao) {
    this.cor = cor;
    this.marca = marca;
    this.dimensao = dimensao;
}

// Criando uma nova caneta preta usando a função construtora
var novaCanetaPreta = new Caneta("Preta", "Bic", "6cm");

// Exibindo as informações da nova caneta preta no console
console.log({ novaCanetaPreta});

// Criar um objeto direto

var novaCanetaRosa = {
    cor: "Rosa",
    marca: "Bic",
    dimensao: "10cm",
};

console.log({ novaCanetaRosa });

// Object.create()

var PrototipoCaneta = {
    cor: "Marron",
    marca: "Bic",
    dimensao: "10cm",
    imprimir() {
        console.log(this.cor, this.marca,this.dimensao);
    },
};

console.log(PrototipoCaneta);
