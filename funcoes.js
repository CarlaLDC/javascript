import prompt from "prompt-sync";
let ler = prompt()

export function mensagemMenu ( mensagem ) {
    console.log(`
             Insira um numero
        1 – Inserir nova temperatura.
        2 – Encerrar aplicação.`)

    return ler ( )
}

export function atual ( mensagem ) {
    console.log(mensagem)
    return  ler ( )
}

export function destino ( mensagem ) {
    console.log(mensagem)
    return ler ( )
}

export function CelsiusParaKelvin (celsius) {
    let kelvin = celsius = 273
    return kelvin
 
 }

 export function CelsiusParaFahre (celsius) {
    let fahre = 1.8 * celsius + 32
    return fahre
 
 }























































