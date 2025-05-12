import prompt from "prompt-sync"
let ler = prompt()

console.log('Insira a cor numero 1')
let cor1 = ler()

console.log('Insira a cor numero 2')
let cor2 = ler()


let corprimaria = false

if(cor1 == 'azul' || cor1 == 'amarelo' || cor1 == 'vermelho'){
    if(cor2 == 'azul' || cor2 == 'amarelo' || cor2 == 'vermelho')
        corprimaria = true
    
}
else 
    corprimaria = false


if(corprimaria){
    console.log('Certinho')
}
else
    console.log('Invalido')