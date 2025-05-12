import { Condições, mensagem } from "./FunctionQuestion1.js";

let a = mensagem("Digite o modelo de carro (Popular ou Luxo):")
let b = mensagem("Digite quantos dias ira utilizar o carro alugado:")
let c = mensagem("Digite quantos Kilometros foram percorridos pelo carro:")

let d = Condições(a, b, c);

console.log(`Você escolheu o modelo ${a}, e ira utilizar o carro em ${b} dias.
Foram percorridos ${c}KM, durante a sua utilização, vc ira pagar R$${d},00 pela sua utilização!!`)