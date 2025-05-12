import prompt from 'prompt-sync'
let ler = prompt()


export function bemVindo ( mensagem ) {
    console.log(`
        Bem vindo ao Frei Cinema!
        |Ingresso Inteira: 30.00
        |Ingresso Meia: 15.00
        `)
}

export function ingressoInteira ( qtdInteira ) {
    console.log(`Informe quantos ingressos tipo Inteira serão.`)

    return Number ( ler ( ) )
}

export function ingressoMeia ( qtdMeia ) {
    console.log(`Informe quantos ingressos tipo Meia serão.`)

    return Number ( ler ( ) )
}

export function diaSemana ( dia ) {
    console.log(`Qual dia da semana você verá o filme?`)

    return ler ( )
}

export function filmeNacional ( tipoFilme ) {
    console.log(`O filme é nacional?`)

    return ler ( )
}

export function filmeDesconto ( resultado ) {
    let ingressosInteira = ingressoInteira()
    let ingressosMeia = ingressoMeia()
    let diasSemana = diaSemana()
    let filmesNacional = filmeNacional()

    let precosIngressos = 0

    if ( diasSemana == 'Quarta-feira' || diasSemana == 'quarta-feira' && filmesNacional == 'sim' ) {
        precosIngressos = 5 * ( ingressosInteira + ingressosMeia )
    }

    else if ( diasSemana != 'Quarta-feira' || diasSemana != 'quarta-feira' && filmesNacional == 'não') {
        precosIngressos = ( ingressosInteira * 30 ) + ( ingressosMeia * 15 )
    }

    return precosIngressos
}