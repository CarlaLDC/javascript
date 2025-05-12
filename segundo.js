import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

let conta = '';

for ( let i = 1; i != numero; i++ ) {
    console.log (numero - i)

}