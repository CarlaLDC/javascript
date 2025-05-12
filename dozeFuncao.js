import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Array!
         Esse progama criará o seu array e os inverterá.
    `)

    return mensagem

}

export function informeNumeros ( numero ) {
    let numeros = []
    let dobro = []

    console.log(`Informe cinco números para o array.`);

    for ( let i = 0; i < 5; i++) {
        let numero = Number ( ler ( ) )

        numeros[i] = numero 
    }

    console.log(`O dobro dos números dobro são:`)

    for ( let items of numeros ) {
        console.log(items * 2);
    }

}

