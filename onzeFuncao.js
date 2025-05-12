import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Array!
         Esse progama criará o seu array e mostrará os números pares dele.
    `)

    return mensagem

}

export function informeDezNumeros ( numero ) {
    let numeros = []
    let pares = []

    console.log(`Informe dez números para o array.`);

    for ( let i = 0; i < 10; i++) {
        let numero = Number ( ler ( ) )

        numeros[i] = numero 

            if ( numero % 2 == 0 ){
                pares[i] = numero
            }
    }

    console.log(`Os números pares são:`)

    for ( let items of pares ) {
        console.log(items);
    }

}





















