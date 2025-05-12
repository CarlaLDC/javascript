import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero.')
let numero = Number ( ler( ) )

let boolean = numero < 5 || numero > 10

console.log ('O resultado é ' + boolean);
