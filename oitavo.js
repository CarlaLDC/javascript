import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

let conta = '';
let linhas = '';

for ( let i = 1; i <= numero; i++ ) {
    process.stdout.write ( '* ' )

    for ( let i = 2; i <= numero; i++ ) {
        process.stdout.write ( '* ' )  
    }
    
    console.log( )
    
}

