import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Premiador!
         Escolha entre três numeros, e um deles será o premiado.
         Boa sorte!!
    `)
    return mensagem

}

export function numeroPremiado ( mensagem ) {
    console.log(`
        Escolha um número de 1 a 3.
    `)
    let escolha = Number ( ler ( ) )

    return escolha
}

export function resultadoPremiação ( revelacao ) {
    let resultado = numeroPremiado()

    if ( resultado == 1 ) {
        console.log(`Você ganhou uma privada!`)
    } 
    
    else if ( resultado == 2 ) {
        console.log(`Você me deve mil reais!`)
    }
    
    else if ( resultado == 3 ) {
        console.log(`Ganhou um MACBOOK + Um milhão de reais!!!`)
    } 

    else {
        console.log(`ESCOLHA!!!`)
    } 

    return resultado
}