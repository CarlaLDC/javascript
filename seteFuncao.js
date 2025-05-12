import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Calculator!
         Esse progama calculará a tabuada do número inserido.
    `)
    return mensagem

}


export function tabuadaNumero ( numero ) {
    console.log(`Informe um número.`)
    let escolha = Number ( ler ( ) )

    return escolha
}

export function calculoTabuada ( resultado ) {
    let numero = tabuadaNumero()
    
    for ( let i = 0; i <= 10; i++ ) {
        console.log(`${numero} X ${i} = ${numero * i} `)
    }
}