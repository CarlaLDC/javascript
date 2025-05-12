import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Informe o tamanho dos lados do primeiro retangulo')
let lado1 = Number ( ler ( ) )
let lado2 = Number ( ler ( ) )

let multiplicacao = lado1 * lado2 

console.log ('Informe o tamanho do segundo retangulo')
let lado3 = Number ( ler ( ) )
let lado4 = Number ( ler ( ) )

let vezes = lado3 * lado4 

let boolean = multiplicacao == vezes

console.log ('O primeiro retângulo possuí área ' + multiplicacao)
console.log ('O segundo retângulo possuí área ' + vezes)
console.log ('Eles são iguais? ' + boolean)


