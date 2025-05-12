import prompt from "prompt-sync"
let ler = prompt()

console.log ('Qual nome do livro?')
let livro = ler()

console.log (`Quantas paginas tem o ${livro}`)
let paginas = Number(ler ())

console.log (`Quantos segundos voce leva para ler uma pagina`)
let segundos = Number(ler ())

let conta = (segundos * paginas)  / 3600

console.log (`Você lerá ${livro} em ${conta.toFixed(2)}`)