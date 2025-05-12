import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Calculator!
         Esse progama somará os números informados.
    `)
    return mensagem

}

export function somaNumeros ( mensagem ) {
    console.log(`
         Informe o numero para a soma.
    `)
    return Number ( ler ( ) )

}

export function perguntaDois( mensagem ) {
    console.log(`
         Informe o outro numero para a soma.
    `)
    return Number ( ler ( ) )

}

export function calculoSoma (  ) {
    let numeroUm = somaNumeros()
    let numeroDois = perguntaDois()

    let soma = numeroUm + numeroDois

    return soma
}





































