import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero.')
let numero = Number ( ler( ) )

let boolean = numero == 23 || numero > 50 

console.log ('O resultado é ' + boolean);