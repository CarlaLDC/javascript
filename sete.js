//Crie uma função que receba um valor e uma porcentagem como parâmetros. 
//A função deve retornar o valor acrescido da percentagem indicada.

import prompt from 'prompt-sync'
let ler = prompt()

import { calculoPorcentagem, perguntaPorcentagem, perguntaValor } from './seteFuncao.js'

let final = calculoPorcentagem()

console.log(final)






