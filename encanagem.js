import prompt from "prompt-sync";
let ler = prompt()

console.log ('Qual seu consumo mês de janeiro?')
let janeiro = Number ( ler ( ) )

while(janeiro < 0) {
    console.log('Informação inserida errada!')
    janeiro++
}
    
console.log ('Qual seu consumo mês de fevereiro?')
let fevereiro = Number ( ler ( ) )

while(fevereiro < 0) {
    console.log('Informação inserida errada!')
    fevereiro++
}

console.log ('Qual seu consumo mês de março?')
let março  = Number ( ler ( ) )

while(março < 0) {
    console.log('Informação inserida errada!')
    março++
}

console.log ('Qual seu consumo mês de abril?')
let abril  = Number ( ler ( ) )

while(abril < 0) {
    console.log('Informação inserida errada!')
    abril++
}

console.log ('Qual seu consumo mês de maio?')
let maio = Number ( ler ( ) )

while(maio < 0) {
    console.log('Informação inserida errada!')
    maio++
}

console.log ('Qual seu consumo mês de junho?')
let junho = Number ( ler ( ) )

while(junho < 0) {
    console.log('Informação inserida errada!')
    junho++
}

console.log ('Qual seu consumo mês de julho?')
let julho = Number ( ler ( ) )

while(julho < 0) {
    console.log('Informação inserida errada!')
    julho++
}

console.log ('Qual seu consumo mês de agosto?')
let agosto = Number ( ler ( ) )

while(agosto < 0) {
    console.log('Informação inserida errada!')
    agosto++
}

console.log ('Qual seu consumo mês de setembro?')
let setembro = Number ( ler ( ) )

while(setembro < 0) {
    console.log('Informação inserida errada!')
    setembro++
}

console.log ('Qual seu consumo mês de outubro?')
let outubro = Number ( ler ( ) )

while(outubro < 0) {
    console.log('Informação inserida errada!')
    outubro++
}

console.log ('Qual seu consumo mês de novembro?')
let novembro = Number ( ler ( ) )

while(novembro < 0) {
    console.log('Informação inserida errada!')
    novembro++
}

console.log ('Qual seu consumo mês de dezembro?')
let dezembro = Number ( ler ( ) )

while(dezembro < 0) {
    console.log('Informação inserida errada!')
    dezembro++
}

console.log ('Qual seu consumo neste mês?')
let agora = Number ( ler ( ) )

let media = ( janeiro + fevereiro + março + abril + maio + junho + julho + agosto + outubro + setembro + novembro + dezembro ) / 12

let conta = media - agora 
let  contaDois = conta / media * 100

if ( contaDois > 20) {
    console.log ('Você economizou ' + contaDois)
    console.log('Você possui desconto!')
}

else if ( contaDois < 20) {
    console.log ('Você economizou ' + contaDois)
    console.log('Você não possui desconto!')
}









