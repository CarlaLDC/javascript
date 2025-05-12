import prompt from 'prompt-sync'
let ler = prompt()

import { bemVindo, informeDezNumeros } from './onzeFuncao.js'

bemVindo()

let fim = informeDezNumeros()

console.log(fim)
