import prompt from 'prompt-sync'
let ler = prompt()

export function bemVindo ( mensagem ) {
    console.log(`
         Bem-vindo ao Frei Calculator!
         Esse progama mostrará os numeros pares entre dois numeros.
    `)
    return mensagem

}

export function perguntaUm ( mensagem ) {
    console.log(`
        Informe um número
    `)
    return Number ( ler ( ) )

}

export function perguntaDois( mensagem ) {
    console.log(`
        Informe outro número
    `)
    return Number ( ler ( ) )

}

export function resultadoPares ( resultado ) {
    let numeroUm = perguntaUm()
    let numeroDois = perguntaDois()

    while(numeroUm < numeroDois){
        if(numeroUm % 2 == 0){
            console.log(numeroUm);
        };
        numeroUm++
    }

}








