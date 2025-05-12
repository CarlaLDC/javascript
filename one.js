import prompt from 'prompt-sync'
let ler= prompt()

let numeros = []

console.log('Informe cinco números')

for ( let i = 0; i < 5; i++){
    let numero = Number ( ler ( ) )
    numeros[i] = numero

}

for ( let items of numeros ){
    console.log(items)
}