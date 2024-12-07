// ## 4. Cálculo de Dano

// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.


danoCausado = 0 

// Personagem de ataque:
const nomePersonagem1 = prompt("Digite o nome do personagem de ataque: ")
const poderAtaque = parseFloat(prompt("Digite a quantidade de poder de ataque do personagem: "))

// Personagemm de defesa:
const nomePersonagem2 = prompt("Digite o nome do personagem de defesa: ")
let vida = parseFloat(prompt("Digite a sua quantidade de vida: "))
const defesa = parseFloat(prompt("Digite a quantidade de defesa do personagem: "))
const escudo = prompt("O personagem possui escudo? Sim/Não ")


if (poderAtaque > defesa && escudo == "Não"){
    danoCausado = poderAtaque - defesa
} else if(poderAtaque > defesa && escudo == "Sim") {
    danoCausado = (poderAtaque - defesa) / 2
} else if(poderAtaque <= defesa){
    danoCausado = 0
}

vida -= danoCausado

alert(nomePersonagem1 + " causou " + danoCausado + " pontos de dano em " + nomePersonagem2)
alert(nomePersonagem1 +"\n"+ "Poder de ataque: "+poderAtaque + "\n\n" + nomePersonagem2 + "\n"+ "Pontos de vida: " + vida + "\n" + "Poder de defesa: " + defesa + "\n" +"Possuí escudo: "+ escudo)

