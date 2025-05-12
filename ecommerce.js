import prompt from 'prompt-sync'
let ler = prompt()

let continuarExecutando = false

let contaCinco = '';
let contaDez = '';
let contaVinte = '';
let contaCinquenta = '';
let contaCem = '';
let contaDuzentos = '';

let qtdCinco = '';
let qtdDez = '';
let qtdVinte = '';
let qtdCinquenta = '';
let qtdCem = '';
let qtdDuzentos= '';


console.log('Informe quantas notas de R$5 serão.')
let cinco = Number ( ler ( ) )

    while ( cinco < 0 ) {
        console.log('Obrigado por utilizar nosso sistema! Volte sempre.')
        
        qtdCinco = qtdCinco + 1 
    }


console.log('Informe quantas notas de R$10 serão.')
let dez = Number ( ler ( ) )

   while ( dez < 0 ) {
        console.log('Obrigado por utilizar nosso sistema! Volte sempre.')
        
        qtdDez = qtdDez + 1
    }



console.log('Informe quantas notas de R$20 serão.')
let vinte = Number ( ler ( ) )

   while ( vinte < 0 ) {
        console.log('Obrigado por utilizar nosso sistema! Volte sempre.')
        
        qtdVinte = qtdVinte + 1
    }



console.log('Informe quantas notas de R$50 serão.')
let cinquenta = Number ( ler ( ) )

   while ( cinquenta < 0 ) {
        console.log('Obrigado por utilizar nosso sistema! Volte sempre.')
        
        qtdCinquenta = qtdCinquenta + 1
    }



console.log('Informe quantas notas de R$100 serão.')
let cem = Number ( ler ( ) )

   while ( cem < 0 ) {
        console.log('Obrigado por utilizar nosso sistema! Volte sempre.')
    
        qtdCem = qtdCem + 1
   
    }


console.log('Informe quantas notas de R$200 serão.')
let duzentos = Number ( ler ( ) )

   while ( duzentos < 0 ) {
        console.log('Obrigado por utilizar nosso sistema! Volte sempre.')

        qtdDuzentos = qtdDuzentos + 1

    }

    
let qtdNotas = cinco + dez + vinte + cinquenta + cem + duzentos     

if ( qtdNotas > 200 ) {
    console.log ('Não podemos guardar mais de 200 notas!')

}

else if ( qtdNotas < 200 ) {

    let conta = ( cinco * 5 ) + ( dez * 10 ) + ( vinte * 20 ) + ( cinquenta * 50 ) + ( cem * 100 ) + ( duzentos * 200 )

    console.log(`Quantidade de notas: ${qtdNotas}`)
    console.log(`Valor total: ${conta}`)

}

else { }
























