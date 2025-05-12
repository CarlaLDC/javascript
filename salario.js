import prompt from 'prompt-sync'
let ler = prompt()

console.log('Me diga seu nome')
let nome = ler()

console.log('Me diga seu salário')
let salario = Number(ler())

console.log('Me diga quantos anos vc está na empresa')
let ano = Number(ler())

let escolha = '';

if (ano == 3 ) {
    escolha = (salario * 3 / 100) + salario
}

else if (ano => 3 || ano <= 10) {
    escolha = (salario * 12.5 / 100) + salario
}

else if (ano >= 10) {
    escolha = (salario * 20 / 100 )+ salario
}

else {
    escolha = 'Você foi demitido!'
}

console.log('Seu novo salário é ' + escolha )





























