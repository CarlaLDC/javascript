import prompt from 'prompt-sync'
let ler = prompt()

let numeros = []

console.log(`Informe um número`)
let numero = Number(ler())

for(let i = 0; i <= 10; i++){
    console.log(` ${numero} X ${i} = ${numero * i} `)

    numeros[i] = numero
}















