// Conversor de Medidas

// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

const valor = parseFloat(prompt("Digite um valor em métros 'm'"));

const converter = prompt(
  "Escolha umas das opções para o valor ser convertido: \nA. milímetro (mm)\nB. centímetro (cm)\nC. decímetro (dm)\nD. decâmetro (dam)\nE. hectômetro (hm)\nF. quilômetro (km)"
);

switch (converter) {
  case "A":
    alert(valor * 1000 + " (mm)");
    break;
  case "B":
    alert(valor * 100 + " (cm)");
    break;
  case "C":
    alert(valor * 10 + " (dm)");
    break;
  case "D":
    alert(valor / 10 + " (dam)");
    break;
  case "E":
    alert(valor / 100 + " (hm)");
    break;
  case "F":
    alert(valor / 1000 + " (km)");
  default:
    alert("Opção invalida");
}

// a milímetro (mm)

// b centímetro (cm)

// c decímetro (dm)

// d decâmetro (dam)

// e hectômetro (hm)

// f quilômetro (km)

// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
