import prompt from "prompt-sync";
let ler = prompt()

import {mensagemMenu, atual, destino, CelsiusParaKelvin, CelsiusParaFahre  } from "./funcoes.js";
1
let continuar = true

while ( continuar ) {

    let escolha = mensagemMenu()

    if ( escolha == 1 ){

        atual()

        destino()

        if ( atual == 'C' || atual == 'c'  ) {
             if ( destino == 'F' || destino == 'f' ) {
                 onsole.log(`A temperatura do destino será: ${CelsiusParaFahre(temperatura)}`)
            }
 
        }

      
        else if ( atual == 'C' || atual == 'c'  ) {
            if ( destino == 'K' || destino == 'k' )
                console.log(`A temperatura do destino será: ${CelsiusParaKelvin(temperatura)}`)
            
        }
 
 

    }

    else { 
        continuar = false
        break
    }




   
}
