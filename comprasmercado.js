import prompt from "prompt-sync"
let ler = prompt()

let soma = Number ( )

console.log ('Informe o valor do produto')
let valor = Number ( ler ( ) )

while ( valor < 0 || valor > 0 ) {

    console.log ('Informe o valor do produto')
    valor = Number ( ler ( ) )

    if ( valor > 0 ) {
        soma = valor + soma
    }

    else if ( valor < 0  ) {
        valor = valor - 1
    }

    else {}
    

}

console.log (soma)