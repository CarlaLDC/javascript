import prompt from 'prompt-sync'
let ler = prompt ( )

//Crie um algoritmo para ler 15 números inteiros e mostrar no final, os que forem maiores ou igual a 10;

let numeros = []
let maiorIgualDez = []


console.log(`Informe quinze algoritmos.`)

for ( let i = 0; i < 15; i++ ){
    let numero = Number ( ler ( ) )
    numeros[i] = numero

    if ( numeros[i] > 10 || numeros[i] == 10){
        maiorIgualDez[i] = numeros[i]
    }

}

console.log(`Os números maiores ou igual a dez são:`)

for ( let items of maiorIgualDez ) {
    console.log ( items )
}





















