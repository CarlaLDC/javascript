import prompt from 'prompt-sync'
let ler = prompt()

console.log('Me diga a quantiadade de reais em sua carteira!')
let din = ler()

let conta = din / 5.45

console.log('Sua quantidade de dolares é ' + conta)