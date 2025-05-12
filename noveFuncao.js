import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Random!
         Adivinhe o numero sortido em 5 tentativas.

         O número já foi sorteado!
    `)
    return mensagem

}

export function numeroSortido ( numero ) {
    let sortido = parseInt(Math.random() * 10)

    return sortido
}

export function tentativas ( tentativa ) {
    let sortido = numeroSortido()

    console.log(`Informe um numero.`)

    for ( let i = 0; i < 5; i++){
        let escolha = Number( ler ( ) )

        if ( escolha === sortido ) {

            console.log(`
            Voce acertou!!
            O numero era: ${sortido}
                `)
            
            break
                
        }

        else {
            console.log(`Tente novamente`)
        }
    }
}