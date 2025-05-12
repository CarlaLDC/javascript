import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Calculator!
         Esse progama dividirá os números informados.
    `)
    return mensagem

}

export function divisaoNumeros ( mensagem ) {
    console.log(`
        Infome o número para a divisão.
    `)

    return Number ( ler ( ) )
}

export function perguntaDois ( mensagem ) {
    console.log(`
        Infome o número para a divisão.
    `)

    return Number ( ler ( ) )
}


export function divisãoCalculo ( ) {
    let numeroUm = divisaoNumeros()
    let numeroDois = perguntaDois()

    let divisao = numeroUm / numeroDois

    return divisao
}






















