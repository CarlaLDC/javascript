import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

console.log (`Informe outro número: `)
let numeroDois = Number ( ler ( ) )

let conta = '';

for ( let i = numero; i <= numeroDois; i++) {
    console.log ( i )
}