// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso).


const veiculo1 = prompt("Insira o nome do seu carro")
const velocidade1 = parseFloat(prompt("Digite uma velocidade para "+ veiculo1))

const veiculo2 = prompt("Insira o nome do seu outro carro")
const velocidade2 = parseFloat(prompt("Digite uma velocidade para "+ veiculo2))

if (velocidade1 > velocidade2){
    alert("O "+ veiculo1+" é mais rapido")
}else if (velocidade2 > velocidade1){
    alert("O "+ veiculo2+ " é mais rápido")
}else if (velocidade1 === velocidade2){
    alert(veiculo1 +" e "+ veiculo2+ " tem a mesma velocidade.")
}else{
    alert("Obrigado")
}