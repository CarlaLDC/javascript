import prompt from "prompt-sync";
let ler = prompt()

export function  Informacoes ( nomeAluno, idadeAluno, serieAluno, Notas ) {
    this.nome = nomeAluno,
    this.idade = idadeAluno,
    this.serie = serieAluno
    this.media = Notas
}

export function String ( mensagem ) {
    console.log(mensagem)

    return ler ( )
}

export function StringNumber ( mensagem ) {
    console.log(mensagem)

    return  Number ( ler ( ) ) 
}

