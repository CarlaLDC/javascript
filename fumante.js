import prompt from 'prompt-sync'
let ler = prompt()

console.log('Me diga quantos cigarros tu fumas por dia')
let qtds= Number(ler())

console.log('Me diga há quantos anos tu fumas? ')
let anos = Number(ler())

let diasFumados = anos * 365;

let minutosPerdidos = qtds * diasFumados * 10;

let horasPerdidas = minutosPerdidos / 60;

let diasPerdidos = horasPerdidas / 24;

console.log('Ele perderá ' + diasPerdidos);
