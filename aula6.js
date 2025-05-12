import prompt from 'prompt-sync'
let ler = prompt()

let largada = []
let chegada = []

  
console.log(`Informe a quantidade de pilotos.`)
let pilotos = Number ( ler( ))

for ( let i = 0; i < pilotos; i++ ){

    console.log(`Informe as posicoes iniciais.`)
    largada[i] = Number ( ler ())

}

for(let i = 0; i < pilotos; i ++){


    console.log('Informe as posicoes finais.')
    chegada[i] = Number(ler())
    
}

for(let i = 0; i < pilotos; i++){

    let d = chegada[i] - largada[i]

    if (d > 0) {
        console.log(`O piloto ${i + 1} avançou ${d} posições.`)
    }


    else if (d < 0 ) {
        console.log(`O piloto ${i + 1} retrocedeu ${-d} posições.`)
    }


    else {
        console.log(`O piloto ${i + 1} manteve a posição.`)
    }
}


















