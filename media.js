import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Me informe suas notas')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let media = ( n1 + n2 + n3 ) /3 

console.log ( 'A sua média é ' + media )