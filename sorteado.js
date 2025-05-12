import prompt from "prompt-sync"
let ler = prompt()

let sorteado = parseInt(Math.random() * 1000); 
let tentativas = 10;

for (let i = 0; i < tentativas; i++) {

    console.log ('Tentativa ' + (i+1))

    console.log (' Digite seu numero: ');
    let numero = Number ( ler ( ) )

    if (numero === sorteado) {
        console.log('Parabéns! Você acertou o número sorteado.');
        break;
    } 
    
    else if (numero < sorteado) {
        console.log('Seu numero foi menor que o número premiado.');
    } 
    
    else {
        console.log('Seu numero foi maior que o número premiado.');
    }

    if (i === tentativas - 1) {
        console.log('Perdeu!');
    }
}