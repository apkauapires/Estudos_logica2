//nome:
let nome = prompt("Qual o seu nome?  ");
console.log(`O nome do jogador é ${nome.toUpperCase()}`);

//Saudações:
alert(`Boas vindas ao jogo do número secreto ${nome}!`);

//idade:
let idade = prompt("Qual a sua idade? ");
console.log(`A idade do jogador ${nome.toUpperCase()} é de ${idade} anos.`);
if(idade >= 18){
    alert("Você já é maior de idade, pode tirar habilitação!");
}
//dia:
let dia = prompt("Em que dia da semana esta jogando?: ")
if(dia.toLowerCase() == "sabado" || dia.toLowerCase() == "domingo" ){
    console.log(`Hoje é ${dia.toUpperCase()}`)
    alert("Bom Fim de Semana!");
}else{
    console.log(`Hoje é ${dia.toUpperCase()}`)
    alert("Boa semana!");
}

//jogo:
let pontos = 0;
let usuario = "s";
let numeroSecreto = 9;
console.log(`O número secreto gerado foi: ${numeroSecreto};`);
console.log(`Pontos do jogador ${nome}: ${pontos};`)

if(usuario.toLowerCase() == "s"){
    while(usuario.toLowerCase() != "n"){
        let chute = prompt('Escolha um número entre 1 e 10');
        console.log("Aguardando o jogador efetuar o chute...");

        if(chute < 0){
            while(chute < 0){
                console.log("O jogadr digitou um número NEGATIVO.")
                chute = prompt("O número que você digitou é inválido por ser NEGATIVO. Tente Novamente.");
            }  
        }

        if(chute != numeroSecreto){
            while(chute != numeroSecreto){
                console.log("O jogador errou o número secreto!");
                chute = prompt(`Você errou! O número secreto não é ${chute}, tente novamente: `);
            }
        }

        if (chute == numeroSecreto) {
            pontos += 50;
            console.log(`Total de pontos: ${pontos}`)
            console.log("O jogador acertou o número secreto")
            alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto}`);
            alert(`Total de pontos: ${pontos}`);
            if(pontos == 100){
                console.log("O total de pontos foram atingidos: 100 pontos.")
                alert("Parabéns, você venceu o jogo!")
                break
        }
        usuario = prompt("Deseja continuar jogando?[S/N}")
        }
    }
}

console.log(`Jogo Finalizado, Obrigado por jogar!.\nTotal de pontos: ${pontos}`)
