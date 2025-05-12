import prompt from "prompt-sync"
let ler = prompt()

let maisVelha = Number ( )
let maisJovem = Number ( )
let mediaGrupo = Number ( )
let homemTrinta = Number ( )
let mulherM18 = Number ( ) 

let qtdPessoas = Number ( )

// while ( continuarExecutando != 'nao' ) {

//     console.log('Qual seu nome?')
//     let nome = ler ()

//     console.log('Qual sua idade?')
//     let idade = Number ( ler ( ) )

//     console.log('Qual seu genero?')
//     let genero = ler ( )

//         if ( genero == 'homem' && idade > 30 ){
//             homemTrinta = homemTrinta + 1

//         }

//         else { console.log() }

//         if ( genero == 'mulher' && idade < 18 ){
//             mulherM18 = mulherM18 + 1 
//         } 

//     console.log ('Deseja continuar?')
//     continuarExecutando = ler ( )

  
// }

let nome = '';
let genero = '';
let idade = '';
let continuarExecutando = false

while ( continuarExecutando != 'nao' ) {

    console.log('Qual seu nome?')
    let nome = ler ()

    console.log('Qual sua idade?')
    let idade = Number ( ler ( ) )

    console.log('Qual seu genero?')
    let genero = ler ( )

    console.log ('Deseja continuar?')
    continuarExecutando = ler ( )

    if ( genero == 'homem' && idade > 30 ){
        homemTrinta = homemTrinta + 1
        
    }
        
    else { console.log() }
        
    if ( genero == 'mulher' && idade < 18 ){
        mulherM18 = mulherM18 + 1 
    } 

    else { console.log() }
    

}



// console.log(`O nome da pessoa mais velha é: ${maisVelha}`)
// console.log(`O nome da mulher mais jovem é: ${maisJovem}`)
console.log(`A media de idade é: ${mediaGrupo}`)
console.log(`Homens com mais de 30 anos: ${homemTrinta}`)
console.log(`Mulheres tem menos de 18 anos: ${mulherM18}`)

console.log (`pessoas: ${qtdPessoas}`)




