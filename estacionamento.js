import prompt from "prompt-sync";
let ler = prompt()

let vagas = 50;
let estacionados ='';

let continuarEstacionando = true

while ( continuarEstacionando ) {

    console.log(`Temos essa quantidade de carros estacionados: ${estacionados}`)

    console.log('Quantos carros entraram na última hora?')
    let carros = Number ( ler ( ) )

        if ( carros == 0 ) {
            console.log('Muito obrigado por usar nosso sistema!')
            continuarEstacionando = true
        }

        else if ( estacionados + carros > vagas ) {
            console.log (' Não é possível estacionar tantos veiculos')

        }

        else {
            estacionados = estacionados + carros
            
            if ( estacionados <= vagas ) {
                console.log('Muito obrigado por usar nosso sistema')
                continuarEstacionando = true
            }

        }
}






