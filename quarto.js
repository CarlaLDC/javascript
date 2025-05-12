import prompt from 'prompt-sync'
let ler = prompt ( )

// Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes
//elementos, de tal modo que o primeiro elemento venha a ser o último depois da
//inversão;

let numeros = []
let inversao = []

console.log(`Informe dez algoritmos.`)


for ( let i = 0; i != 10; i++ ){
    let numero = Number ( ler ( ) )
    numeros[i] = numero 

}

// for ( let i = 1; i != numero; i++ ) {
//     console.log (numero - i)

// }

//     if ( numeros[i] > 0 ) {
//         numeros[i] = numeros[i] +  1
//     }
// }

console.log(`Os números invertidos ficam:`)

for ( let items of numeros ) {
    console.log ( items )
}














