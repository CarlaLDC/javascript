import prompt from 'prompt-sync'
let ler= prompt()

let posicao = []

console.log(`Informe a quantidade para o Array.`)
let quantidades = Number ( ler ( ) )

    for ( let i = 0; i < quantidades; i++ ){
        console.log(`De ${quantidades} posições.`)
        let posicoes = Number ( ler ( ) )

        posicao[i] = posicoes

    }

let arrayDobro = []
let conta = '';

    for ( let i = 0; i < posicao; i++){
        conta = posicao * 2
        arrayDobro[i] = conta
    }

console.log(`Array inicial:`)

for ( let items of posicao ) {
    console.log(items)
}

console.log(`Array dobro:`)

for ( let items of conta ) {
    console.log(items)
}












