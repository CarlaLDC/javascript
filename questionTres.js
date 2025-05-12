import prompt from 'prompt-sync'
let ler = prompt()

console.log(`
    Bem vindo ao Frei Hamburguer!
    |Segue o menu abaixo:
`)

console.log(`
        |1 - Novo Item
        |2 - Listar Itens
        |3 - Cancelar Item
        |4 - Total
        |0 - Sair
`)

let pedidos = []
let valor = []
let array = 1
let resultadoTotal = 0
let resultadoIndividual = 0

console.log(`Informe um numero.`)
let numero = Number ( ler ( ) )

while ( numero != 0 ){

    if ( numero == 1 ){

        console.log(`
            |BU|  X-Buguer            R$ 16,00
            |BA|  X-Bacon             R$ 18,00
            |SA|  X-Salada            R$ 22,00
            |TD|  X-Tudo              R$ 26,00
            |RF|  Refrigerante Lata   R$ 6,00
            |SU|  Suco                R$ 8,00

        `)

        console.log(`Informe um código para acresentar a sua comanda.`);

            for ( let i = 0; i < array; i++){

                pedidos[ array - 1 ] = ler ( )

                console.log(`Item adicionado`)

                console.log(`
                    |1 - Novo Item
                    |2 - Listar Itens
                    |3 - Cancelar Item
                    |4 - Total
                    |0 - Sair
            `)

            numero = Number ( ler ( ) )

                if ( numero != 1 ){
                    i = array
                    array++
                }

                else if ( numero == 1 ){
                    array++
                }

            }

    }


    else if ( numero == 2 ){
        for ( let i = 0; i <  (pedidos.length - 1 ); i++ ){


           if ( pedidos[i] == 'BU' ){
            console.log(`X-Buguer - R$ 16,00`)
           }  

           else if ( pedidos[i] == 'BA' ){
            console.log(`X-Bacon - R$ 18,00`)
           }  

           else if ( pedidos[i] == 'SA' ){
            console.log(`X-Salada - R$ 22,00`)
           }  

           else if ( pedidos[i] == 'TD' ){
            console.log(`X-Tudo - R$ 26,00`)
           }  

           else if ( pedidos[i] == 'RF' ){
            console.log(`Refrigerante Lata - R$ 6,00`)
           }  

           else if ( pedidos[i] == 'SU' ){
            console.log(` Suco - R$ 8,00`)
           }  

           else if ( pedidos[i] == 'C' ){
            console.log(`CANCELADO`)
           } 

           
           console.log(`
            |1 - Novo Item
            |2 - Listar Itens
            |3 - Cancelar Item
            |4 - Total
            |0 - Sair
    `)

         numero = Number ( ler ( ) )

        }
    }

    else if ( numero == 3 ) {

        console.log(`Informe o numero do item a ser cancelado.`)
        let cancelar = Number ( ler (  ) )

        console.log(`ITEM CANCELADO`)

        pedidos[ cancelar - 1  ] = 'C'


        console.log(`
            |1 - Novo Item
            |2 - Listar Itens
            |3 - Cancelar Item
            |4 - Total
            |0 - Sair
    `)

         numero = Number ( ler ( ) )

        }

    

    else if ( numero == 4){
        console.log(`Informe a quantidade de pessoas.`)
        let pessoas = Number( ler (  ) )

        for ( let i = 0; i < pedidos.length; i++ ){

            if ( pedidos[i] == 'BU' ){
                valor[i] =  16.00
            }  
    
             else if ( pedidos[i] == 'BA' ){
                valor[i] = 18.00
            }  
    
            else if ( pedidos[i] == 'SA' ){
                valor[i] =  22.00
            }  
    
            else if ( pedidos[i] == 'TD' ){
                valor[i] = 26.00
            }  
    
            else if ( pedidos[i] == 'RF' ){
                valor[i] =  6.00
            }  
    
            else if ( pedidos[i] == 'SU' ){
                valor[i] = 8.00
            }  
    
            else if ( pedidos[i] == 'C' ){
                valor[i] = 0
            } 

        }

        for ( let i = 0; i < valor.length; i ++ ){

            resultadoTotal = valor[i] + resultadoTotal

        }

        resultadoIndividual = resultadoTotal / pessoas

        console.log(`Total: ${resultadoTotal}`)
        console.log(`Total por pessoa: ${resultadoIndividual}`)


        numero = 0
    }

}













