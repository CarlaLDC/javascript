import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

let conta = '';

for ( let i = 1 ; i <= 10; i++ ) {
    console.log ( ` ${numero} X ${i} = ${ i * numero }` )
}