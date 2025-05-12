import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-Vindo ao Frei Cupido
          Este progama achará seu tipo ideal

    `)

    return mensagem
}

export function perguntaUm ( mensagem ) {
    console.log(`
         Qual é a altura ideal para você?
    `)

    let altura = Number ( ler ( ) )

    return mensagem
}

export function perguntaDois ( mensagem ) {
    console.log(`
         Prefere loiro ou moreno?
    `)

    let cabelo = Number ( ler ( ) )
    
    return mensagem

}

export function resultadoIdeal ( mensagem ) {
   let preferencia = perguntaDois()
   let altura = perguntaUm()

   if ( altura => 1.80 && preferencia == 'Loiro') {
        console.log(`Você gosta de pessoas como: Ryan Gosling`)
   }

   else if ( altura => 1.70 && preferencia == 'Moreno') {
        console.log(`Você gosta de pessoas como: Shawn Mendes`)
   }

   else if ( altura <= 1.60 && preferencia == 'Loiro') {
        console.log(`Você gosta de pessoas como: Seth Green`)
   }

   else if ( altura <= 1.65 && preferencia == 'Moreno') {
        console.log(`Você gosta de pessoas como: Bruno Mars`)
   }

   else {
        console.log(`Você vai morrer sozinha`)
   }
}




















