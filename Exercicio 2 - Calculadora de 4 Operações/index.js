// Calculadora de 4 Operações

// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

// Após calcular os resultados o programa deve exibi-los na tela.

let n1 = parseFloat(prompt("Digite um número:"))
let n2 = parseFloat(prompt("Digite outro número:"))

alert("Soma: "+ (n1+n2) + 
    "\nsubtração "+ (n1 - n2)+ 
    "\nmultiplicação "+ (n1*n2)+
    "\ndivisão "+ (n1/n2))