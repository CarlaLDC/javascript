import prompt from "prompt-sync";
let ler = prompt()

import { Dados, String, StringNumber } from './funcaoKilometragem.js'

// Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
// tabela a seguir:
//  - Carros populares (aluguel de R$90 por dia)
//  - Até 100Km percorridos: R$0,20 por Km
//  - Acima de 100Km percorridos: R$0,10 por Km
//  - Carros de luxo (aluguel de R$150 por dia)
//  - Até 200Km percorridos: R$0,30 por Km
//  - Acima de 200Km percorridos: R$0,25 por Km
// 90 reais o aluguel por dia

const regras = { 
    CarroPopular : 90.00,
    CarroLuxo : 150.00,
    KiloPopularVinte : 0.20,
    KiloPopularDez : 0.10,
    KiloLuxoTrinta : 0.30,
    KiloLuxoVinteC : 0.25
}


let tipoCarro =       String ( `Qual seu carro é popular ou de luxo?` )
let qtdAluguel =  String ( `Quantos dias de aluguel?` )
let qtdKilometragem = String ( `Quantos KM foram percorridos?` )


if ( tipoCarro == 'Popular' || tipoCarro == 'popular' ) {

    if ( qtdKilometragem <= 100 ) {
        let conta = ( qtdKilometragem * 0.20 ) + ( qtdAluguel * 90 )
          
         console.log( conta )
    }

    // regras.KiloPopularVinte
    // regras.conta

    else if ( qtdKilometragem > 100 ) {
        let conta = ( qtdKilometragem * 0.10 ) + ( qtdAluguel * 90 )
          
         console.log( conta )
    }
    
    // regras.KiloPopularDez
    // regras.CarroPopular
}

else if ( tipoCarro == 'Luxo' || tipoCarro == 'luxo' ) {
    
    if ( qtdKilometragem <= 200 ) {
        let conta = ( qtdKilometragem * 0.30 ) + ( qtdAluguel * 150 )
         
        console.log( conta )
    }

    // regras.KiloLuxoTrinta
    // regras.CarroLuxo

    else if ( qtdKilometragem > 200 ) {
        let conta = ( qtdKilometragem * 0.25 ) + ( qtdAluguel * 150 )
        
        console.log( conta )
        
    }

    // regras.KiloLuxoVinteC
    // regras.CarroLuxo

}

// const updatePedido = new Dados ( tipoCarro, qtdAluguel, qtdKilometragem, conta )
// console.log( updatePedido )


