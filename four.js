import prompt from 'prompt-sync'
let ler= prompt()

let posicao = []

console.log(`Informe a quantidades de numeros no Array.`)
let quantidades = Number ( ler ( ) )

    for ( let i = 0; i < quantidades; i++ ) { 
        console.log(`De ${quantidades} posições.`)
        let posicoes = Number ( ler ( ) )

        posicao[i] = posicoes
    }

console.log(`Você digitou ${quantidades} números.`)

for ( let items of posicao ){
    console.log(items)
}

