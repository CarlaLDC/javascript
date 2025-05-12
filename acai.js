import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Quantos açaí você vai querer?')
let qtdpequeno = Number(ler())
let qtdmedio = Number(ler())
let qtdgrande= Number(ler())

let soma = ( qtdpequeno * 13.50 ) + ( qtdmedio * 15 ) + ( qtdgrande * 17.50 )

console.log ('Total á pagar é ' + soma )
