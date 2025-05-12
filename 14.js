import prompt from "prompt-sync"
let ler = prompt()

console.log('Insira um numero')
let numero = ler()

let primo = false 

if ( numero <= 1 ) {
    primo = false
}

else {
    for ( let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = true
            i = numero 
        }
    }
}

let result = '';

if ( primo == true ) {
    result = 'É primo'
}

else {
    result = 'Não é primo'
}

console.log (`O número ${numero} ${result}`)