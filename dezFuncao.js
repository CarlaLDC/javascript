import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Array!
         Esse progama criará o seu array.
    `)
    return mensagem

}

export function numerosInformados ( mensagem ) {
    let numeros = []
    
    console.log(`Informe três números.`)

    for ( let i = 0; i < 3; i++ )   {

        let numero = Number ( ler ( ) )
        numeros[i] = numero

    }

    return numeros
}

export function resultadoFinal ( resultado ) {
    let numeros  = numerosInformados()
    
    console.log(`Os números do seu array:`)

    for ( let items of numeros ) {
        console.log ( items )
    }
}




