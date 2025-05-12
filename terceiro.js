import prompt from 'prompt-sync'
let ler = prompt ( )

//Faça um algoritmo que leia 20 números e armazene em um vetor. Depois, some os 10
//primeiros elementos deste vetor;

let numeros = []
let somarDezP = []
let conta = 0

console.log(`Informe vinte algoritmos.`)

for ( let i = 0; i < 20; i++ ){
    let numero = Number ( ler (  ) )
    numeros[i] = numero

    if ( numeros[i] <= 10 ) {
        somarDezP[i] = numeros[i]
        somarDezP[i] = numeros + somarDezP[i]
      
    }
}

for ( let items of somarDezP ) {
    console.log ( items )
}














