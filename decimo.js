import prompt from "prompt-sync";
let ler = prompt ( )

console.log (`Informe um número: `)
let numero = Number ( ler ( ) )

function pergunta (mensagem) {
    console.log (`Informe um número: `)
    return Number ( ler ( ) )
}

let conta = 1;

for ( let i = 1; i <= numero; i++ ) {
    conta = conta * i
   
}

// console.log (`O fatorial será ${conta}`)

function calculo (  ) {
    let conta = 1 
    
    for ( let i = 1; i <= numero; i++ ) {
        conta = conta * i
       
    }

    return conta
}

let fim = calculo()

console.log(fim)




