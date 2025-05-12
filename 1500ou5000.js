import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero.')
let numero = Number ( ler( ) )

let boolean = numero <= 1500 || numero > 5000 

console.log ('O resultado é ' + boolean);