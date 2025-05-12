import prompt from "prompt-sync"
let ler = prompt()

console.log(`Informe um número`)
let numero = Number( ler ( ) )

let numerosN = Number ( )
let soma = Number ( )


    while ( numero < 0 || numero > 0  ) {

        if ( numero < 0 ) { 
            numerosN = numerosN + 1

        }

       else if ( numero > 0 ) {
            soma = numero + soma
        
        }
        
        else { }


        console.log(`Informe um número`)
        numero = Number( ler ( ) )
    }

console.log(`A soma de numeros positivos é ${soma}`)
console.log(`A quantidade de numeros negativos é ${numerosN}`)








