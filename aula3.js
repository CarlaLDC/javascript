import prompt from 'prompt-sync'
let ler = prompt()

let a = []
let dobro = []

let nm = Number(ler())
for(let i = 0; i < nm; i++){
    a[i] = Number(ler())
    dobro[i] = a[i] * 2
}

console.log('Você digitou os numeros', a)
console.log('O dobro de cada numero',dobro)

