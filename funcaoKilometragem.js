import prompt from "prompt-sync";
let ler = prompt()

export function  Dados ( CarroPopular, qtdAluguel, qtdKilometragem, Total ) {
    this.tipo = CarroPopular,
    this.aluguel = qtdAluguel,
    this.kilo = qtdKilometragem,
    this.total = Total
}

export function String ( mensagem ) {
    console.log(mensagem)

    return ler ( )
}

export function StringNumber ( mensagem ) {
    console.log(mensagem)

    return  Number ( ler ( ) ) 
}

