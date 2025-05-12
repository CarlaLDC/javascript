import prompt from 'prompt-sync'
let ler= prompt()

let nomes = []

console.log('Informe cinco nomes.')

for ( let i = 0; i < 5; i++ ){
    let nome = ler ()
    nomes[i] = nome
}

for ( let items of nomes ){
    console.log(items)
}