import prompt from 'prompt-sync'
let ler = prompt()

const yellow = '\x1b[33m%s\x1b[0m';

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei-Positivo!
         Esse progama aplicará a educação positiva em você.
    `)
    return mensagem

}

export function perguntaUm ( mensagem ) {
    console.log(yellow, `Você prefere:
    1 - Morrer agora ou
    2 - Daqui cinco minutinhos? `)

   return ler (  )
}

export function condicaoUm ( ) {
   let pergunta = perguntaUm()
   
    if ( pergunta == 1 ) {
        console.log(`Você morreu hihihihi`)
    } 
    
    else if ( pergunta == 2 ) {
        console.log(yellow, `Você prefere:
        1 - Estudar ou
        2 - Ser ninguém na vida? `)
    }

    else {
        console.log(`ESCOLHA!!`)
    }
}















































