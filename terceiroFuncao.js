import prompt from 'prompt-sync'
let ler = prompt()

export function numerosInformados ( mensagem ) {
    console.log("Quantos numeros serao informados?")
    return Number ( ler ( ) )
}

export function repetirPergunta ( mensagem ) { 
    console.log("Informe o número.") 
    return Number ( ler ( ) )
}

export function calculo (){
    let vetorDois = []
    let a = numerosInformados()

    for ( let i = 0; i < a; i++ ) {

      let n2 =  repetirPergunta() 
        vetorDois[i]= n2
    } 

    let somados = 0

    for ( let items of vetorDois){
        somados = somados + items
    }

    let divisao = somados / a

    console.log(`
    A soma dos números é: ${somados}
    A divisao dos números é: ${divisao}                
    `)


}

// export function mensagemFinal ( mensagem ) {
//     let resultadoSoma = calculo()
//     let resultadoDivisao = 
    
//     console.log(`
//         A soma dos números é: ${somados}
//         A divisao dos números é: ${divisao}                
//     `)
// }








