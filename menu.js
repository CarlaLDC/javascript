import prompt from 'prompt-sync'
let ler = prompt();
import { perguntaConvertida, perguntaSigla, perguntaSiglaDois, menu, conversao } from './funcao.js';
let v = []

let continuar = true;

while (continuar) {

    for (;;) {

        let a = perguntaConvertida( );

            if ( a === "parar" ) {
                continuar = false;
                break;
            }

        let b = perguntaSigla( );

            if (b === "parar") {
                continuar = false;
                break;
            }

        let c = perguntaSiglaDois( );

            if ( c === "parar" ) {
                continuar = false;
                break;
            }

        let ordem = [a, b, c];

        v.push(ordem);
    }

console.log("Deseja ver a lista?");
let resposta = ler();

    if (resposta.toLowerCase() === "sim") {
        menu();
    }

    let respostaDois= ler()


    if ( respostaDois == "1" ) {
        continue;
    }

    else if ( respostaDois == 2 ) {

            let result = conversao( v[0], v[1], v[2] );

            console.log( result ); 
    }
}

