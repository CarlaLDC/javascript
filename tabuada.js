import prompt from "prompt-sync"
let ler = prompt()

console.log('Insira um numero')
let numero = ler()

for(let i = 0; i <= 10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`)
}