

import prompt from "prompt-sync"
let ler = prompt()

console.log('Insira o peso em Kg')
let pesoKg = ler()

console.log(`O peso em gramas é ${pesoKg * 1000}`)

