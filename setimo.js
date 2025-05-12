import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

let conta = '';

if ( numero >= 1) {

    for ( let i = 1; i <= numero; i++ ) {
        process.stdout.write ( '* ' )
    }

}

else { 
    console.log ( ` Linha Inválida ` )
    
}

