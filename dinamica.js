import prompt from 'prompt-sync'
let ler = prompt()

console.log('  1 - Somar'          )
console.log('  2 - Subtrair'       )
console.log('  3 - Multiplicar'    )
console.log('  4 - Dividir'        )
console.log('  5 - Potência'       )
console.log('  6 - Raiz Quadrada'  )
console.log('  0 - Sair'           )

console.log (`Informe um número para iniciar a dinâmica`)
let numero = Number ( ler ( ))

if ( numero == 1 ) {

    console.log (`Informe um número`)
    let n1 = Number ( ler ( ))  

    console.log (`Informe outro número`)
    let n2 = Number ( ler ( ))

    let soma = n1 + n2 

    console.log (`Soma: ${n1} + ${n2} = ${soma}`)

}

else if ( numero == 2 ) {

    console.log (`Informe um número`)
    let n1 = Number ( ler ( ))  

    console.log (`Informe outro número`)
    let n2 = Number ( ler ( ))

    let subtracao = n1 - n2 

    console.log (`Subtração: ${n1} - ${n2} = ${subtracao}`)

}

else if ( numero == 3 ) {

    console.log (`Informe um número`)
    let n1 = Number ( ler ( ))  

    console.log (`Informe outro número`)
    let n2 = Number ( ler ( ))

    let multiplicao = n1 * n2 

    console.log (`Multiplicação: ${n1} x ${n2} = ${multiplicao}`)

}

else if ( numero == 4 ) {

    console.log (`Informe um número`)
    let n1 = Number ( ler ( ))  

    console.log (`Informe outro número`)
    let n2 = Number ( ler ( ))

    let divisao = n1 / n2 

    console.log (`Divisão: ${n1} : ${n2} = ${divisao}`)

}

else if ( numero == 5 ) {

    console.log (`Informe a base`)
    let n1 = Number ( ler ( ))  

    console.log (`Informe o expoente`)
    let n2 = Number ( ler ( ))

    let potencia = n1 ** n2 

    console.log (`Potênciação: ${n1} elevado a ${n2} = ${potencia}`)

}

else if ( numero == 6 ) {

    console.log (`Informe um número`)
    let n1 = Number ( ler ( ))  

    function RaizQuadrada (n1) { return Math.sqrt (n1) }

    console.log (`Raiz quadrada: A raiz de ${n1} é ${RaizQuadrada(n1)}`)

}

else { }





