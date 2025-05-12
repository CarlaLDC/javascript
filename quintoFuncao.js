// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.


import prompt from 'prompt-sync'
let ler = prompt( );


export function primo ( ) {
    console.log("Informe o número.") 
    return Number ( ler ( ) )
}

export function prima () {
   let a =  primo()
   let b = true
   let r = ''

   if ( a <= 1 ) {
    b = false
   } 

   else {

        for ( let i = 2; i < a; i++ ) {

            if ( a % i == 0) {
                b = false
                i = a
            }

        }  
    }

    return b
}