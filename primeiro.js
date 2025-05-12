import prompt from 'prompt-sync'
let ler = prompt ( )

//Crie um algoritmo para ler 10 números inteiros e mostrar os números pares deste vetor;

let numeros = []
let pares = []

console.log(`Informe dez algoritmos.`)

for ( let i = 0; i < 10; i++ ){
    let numero = Number ( ler ( ) )
    numeros[i] = numero

    if ( numeros[i] % 2 == 0 ){
        pares[i] = numeros[i]
    }

}

console.log(`Os números pares são:`)

for ( let items of pares ) {
    console.log ( items )
}



































