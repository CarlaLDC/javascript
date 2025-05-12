import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Informe a sua temperatura')
let temperatura = Number(ler())

let result = temperatura >= 37.3 

console.log ('Você está com febre ? ' + result )