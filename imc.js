import prompt from "prompt-sync"
let ler = prompt()

console.log('Informe sua altura')
let altura = Number( ler())

console.log('Informe sua peso')
let peso = Number( ler())

let conta = peso / altura**2

let classificacao = '';

if ( conta >= 40 ) {
    console.log ('Seu IMC é ' + conta)
    console.log('Sua classificacao Obesidade Grau III' )
}

else if ( conta >= 35 && conta <= 39.9 ) {
    console.log ('Seu IMC é ' + conta)
    classificacao = 'Obesidade Grau II'
}

else if ( conta >= 30 && conta <= 34.9 ) {
    console.log ('Seu IMC é ' + conta)
    classificacao = 'Obesidade Grau I'
}

else if ( conta >= 25 && conta <= 29.9 ) {
    console.log ('Seu IMC é ' + conta)
    classificacao = 'Sobrepeso'
}

else if ( conta >= 18.5 && conta <= 24.9 ) {
    console.log ('Seu IMC é ' + conta)
    classificacao = 'Peso normal'
}

else if ( conta < 18.5 ) {
    console.log ('Seu IMC é ' + conta)
    classificacao = 'Abaixo do peso'
}

console.log(classificacao)