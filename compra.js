import prompt from "prompt-sync"
let ler = prompt()

console.log('Informe o valor da sua compra')
let compra = Number ( ler ( ) )

console.log('Informe o do seu desconto')
let desconto = Number ( ler ( ) )

let conta = compra - desconto 

console.log (`O valor final da sua compra é ${conta} ` )
