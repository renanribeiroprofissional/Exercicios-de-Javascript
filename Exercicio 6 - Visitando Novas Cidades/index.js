// Visitando Novas Cidades

// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

// nome turista

const turista = prompt("Olá turista. Informe o seu nome: ");

let visita = prompt("Você já visitou alguma cidade ? Sim/Não");

let cidades = "";

let quantidade = 0;

while (visita === "Sim") {
  let cidade = prompt("Qual o nome da cidade que você visitou ?");
  cidades += "- " + cidade + "\n";
  quantidade++;
  visita = prompt("Você já visitou outra cidade ? Sim/Nâo");
}

alert(
  turista +
    ",\n" +
    "Você visitou ao todo " +
    quantidade +
    " cidades:\n" +
    cidades
);
