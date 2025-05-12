import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Me informe seu salário base')
let salario = Number (ler())

console.log ('Informe a porcentagem do seu bonus mensal')
let bonus = Number (ler())

console.log('Informe o valor do seu desconto do mês')
let desconto = Number (ler())

let conta = salario * bonus / 100

let conta2 = conta + salario

let conta3 = conta2 - desconto

console.log ('Seu salário liquido é de R$ ' + conta3 )