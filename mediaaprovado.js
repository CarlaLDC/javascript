import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Me informe suas três notas')
let n1 = Number ( ler ( ) )
let n2 = Number ( ler ( ) )
let n3 = Number ( ler ( ) )

let media = ( n1 + n2 + n3 ) / 3 

let aprovado = media >= 6

console.log ('A media do aluno é ' + media )
console.log ('O aluno passou? ' + aprovado )