import prompt from "prompt-sync"
let ler = prompt()

 
console.log('Insira a nota 1')
let nota1 = Number(ler())

    while(nota1 < 0 || nota1 > 10) {
        console.log('Insira uma nota válida!')
        nota1 = Number(ler())
    }

console.log('Insira a nota 2')
let nota2 = Number(ler())

    while(nota2 < 0 || nota2 > 10) {
        console.log('Insira uma nota válida!')
        nota2 = Number(ler())
    }

console.log('Insira a nota 3')
let nota3 = Number(ler())

    while(nota3 < 0 || nota3 > 10) {
        console.log('Insira uma nota válida!')
        nota3 = Number(ler())
    }

let media = ( nota1 + nota2 + nota3 ) / 3


    console.log(`\nMédia calculada! \nA média é ${media}`)







