import prompt from "prompt-sync";
let ler = prompt()

import { menuPrincipal, escolhaNumero } from './menu.js';
import { ExibirSaldo, depositar, sacar } from './financeiro.js';

// |1 - Depositar
// |2 - Sacar
// |3 - Exibir saldo
// |4 - Sair

let saldo = 0

menuPrincipal()

let continuar = true


while ( continuar ){
    let escolha = escolhaNumero()

    if ( escolha == 1 ){
        saldo = depositar ( saldo );

    }

    else if ( escolha == 2 ){
        saldo = sacar ( saldo );

    }

    else if ( escolha == 3 ){
        ExibirSaldo ( saldo );

    }

    else if ( escolha == 4 ){
        console.log(`Até uma proxima`)
        break

    }

        console.log( saldo )


}



// else if (opcao === '5') {
//     console.log('Saindo...');
//     break
// } else {
//     console.log('Opção inválida. Tente novamente.');
// }

