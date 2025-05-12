import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

let conta = 0;

for ( let i = 1; i <= numero; i++ ) {
    conta = conta + i
   
}

console.log (`A soma será ${conta}`)