/*
1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

4.Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.

5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, 
mostre um alerta de boas-vindas usando esse nome.
*/
//Saudações:
alert('Boas vindas ao jogo do número secreto');

//nome:
let nome = prompt("Qual o seu nome?  ")
console.log(`O nome do jogador é${nome}`)
//idade:
let idade = prompt("Qual a sua idade? ")
console.log(`A idade do jogador ${nome} é de ${idade} anos.`)
if(idade >= 18){
    alert("Você já é maior de idade, pode tirar habilitação!")
}
//dia:
let dia = prompt("Em que dia da semana esta jogando?: ")
dia.toUpperCase
if(dia == "SABADO" && dia == "DOMINGO" ){
    alert("Bom Fim de Semana!")
}else{
    alert("Boa semana!")
}

//jogo:
let numeroSecreto = 9;
console.log(`O número secreto gerado foi: ${numeroSecreto}`)

let chute = prompt('Escolha um número entre 1 e 10');
console.log("Aguardando o jogador efetuar o chute...")

if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto}`);
    console.log("O jogador acertou o número secreto");
}else{
    while (chute != numeroSecreto){
        chute = prompt(`Você errou! O número secreto não é ${chute}, tente novamente: `)
        console.log("O jogador errou o número secreto!")
    }
}
