import prompt from "prompt-sync"
let ler = prompt()

console.log('Insira o valor em gramas, seu beta')
let qtdGramas = ler()
let valorUnico
if(qtdGramas < 1000){
    valorUnico = 3.50
}
else if(qtdGramas >= 1000){
    valorUnico = 3
}
else
    console.log('Invalido')

let valorTotal = valorUnico*(qtdGramas / 100)

console.log(valorTotal)