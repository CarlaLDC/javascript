import prompt from "prompt-sync";
let ler = prompt()

export function pergunta ( mensagem ) {
    console.log(mensagem)

    return Number ( ler ( ) )
}

export function depositar ( saldo ) {
    let perguntas = pergunta()
    let continuar = true

    while ( continuar ){

        perguntas = pergunta(`
        Digite o valor que deseja depositar
        ( Digite C se deseja cancelar essa ação )
        `)

            if ( perguntas === 'C' ){

                perguntas = Number ( )
                    
                return saldo
            }

            else if ( perguntas > 0 ){
                
                let conta = saldo + perguntas

                return conta 
            }

            else {

                let invalido = pergunta(`Tentativa invalida, tente novamente!`)

                return invalido
            }
    }
}


export function sacar ( saldo ) {
    let perguntas = pergunta()
    let continuar  = true

    perguntas = pergunta(`
        Digite o valor que deseja sacar
        ( Digite C se deseja cancelar essa ação )
        `)

            if ( perguntas === 'C' ){

                perguntas = Number ( )
                    
                return saldo
            }

            else if ( perguntas > 0 && perguntas <= saldo){
                
                let conta = saldo - perguntas

                return conta 
            }

            else {

                let invalido = pergunta(`Tentativa invalida, tente novamente!`)

                return invalido
            }
}


export function ExibirSaldo ( saldo ) {
    return console.log(`Seu saldo atual é: R$ ${saldo}`)
}





// export function investimento(saldo){
//     let a = hum('Digite o Juros (ou "c" para cancelar):')
//     let b = hum('Digite o tempo de investimento (ou "c" para cancelar): ')
//     let c = hum('Digite o Capital Inicial (ou "c" para cancelar): ')
//     if(a === "c" && b === "c" && c === "c" )  return saldo;
//     b = Number(b);
//     a = Number(a);
//     c = Number(c);
    
//     if(b > 0 && a > 0 && c > 0 ){
//             let taxajuros = a / 100;
//             let m = c * ((1 + taxajuros)** b);
//             return m
//     }
//     else {
//         return console.log('Valor inválido. Tente novamente.');
//     }   
// }





















