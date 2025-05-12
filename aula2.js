import prompt from 'prompt-sync'
let ler = prompt()

let armazenados = []

console.log(`Informe a quantidade de numeros`)
let numero = Number(ler())

for(let i = numero; i >= 1; i--){
    console.log(`Informe ${numero} posições.`)
    armazenados[i] = Number(ler())
}

console.log(armazenados)









