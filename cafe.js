import prompt from 'prompt-sync'
let ler = prompt();

const titulo = `
██████╗ █████╗ ██████╗ ██╗      █████╗ ███╗   ██╗███╗   ██╗ █████╗ 
██╔════╝██╔══██╗██╔══██╗██║     ██╔══██╗████╗  ██║████╗  ██║██╔══██╗
██║     ███████║██████╔╝██║     ███████║██╔██╗ ██║██╔██╗ ██║███████║
██║     ██╔══██║██╔══██╗██║     ██╔══██║██║╚██╗██║██║╚██╗██║██╔══██║
╚██████╗██║  ██║██║  ██║███████╗██║  ██║██║ ╚████║██║ ╚████║██║  ██║
╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝  ╚═╝
                                                                   
`
const subtitle = `
██████╗ ██████╗ ███████╗███████╗███████╗███████╗    ██╗
██╔════╝██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝    ██║
██║     ██║   ██║█████╗  █████╗  █████╗  █████╗      ██║
██║     ██║   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝      ╚═╝
╚██████╗╚██████╔╝██║     ██║     ███████╗███████╗    ██╗
╚═════╝ ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚══════╝    ╚═╝
                                             
`
const cafe = `
██████╗     █████╗     ███████╗    ███████╗               ██████╗ 
██╔════╝    ██╔══██╗    ██╔════╝    ██╔════╝        ██╗    ██╔══██╗
██║         ███████║    █████╗      █████╗          ╚═╝    ██████╔╝
██║         ██╔══██║    ██╔══╝      ██╔══╝          ██╗    ██╔═══╝ 
╚██████╗    ██║  ██║    ██║         ███████╗        ╚═╝    ██║     
╚═════╝    ╚═╝  ╚═╝    ╚═╝         ╚══════╝               ╚═╝     
`
const pedi = `
██████╗     ██████╗     ██████╗     ███████╗    ██████╗                ██████╗ 
██╔═══██╗    ██╔══██╗    ██╔══██╗    ██╔════╝    ██╔══██╗        ██╗    ██╔══██╗
██║   ██║    ██████╔╝    ██║  ██║    █████╗      ██████╔╝        ╚═╝    ██████╔╝
██║   ██║    ██╔══██╗    ██║  ██║    ██╔══╝      ██╔══██╗        ██╗    ██╔═══╝ 
╚██████╔╝    ██║  ██║    ██████╔╝    ███████╗    ██║  ██║        ╚═╝    ██║     
╚═════╝     ╚═╝  ╚═╝    ╚═════╝     ╚══════╝    ╚═╝  ╚═╝               ╚═╝              
`

const empada = `
███████╗    ███╗   ███╗    ██████╗      █████╗     ██████╗      █████╗        ██████╗ 
██╔════╝    ████╗ ████║    ██╔══██╗    ██╔══██╗    ██╔══██╗    ██╔══██╗    ██╗██╔══██╗
█████╗      ██╔████╔██║    ██████╔╝    ███████║    ██║  ██║    ███████║    ╚═╝██████╔╝
██╔══╝      ██║╚██╔╝██║    ██╔═══╝     ██╔══██║    ██║  ██║    ██╔══██║    ██╗██╔═══╝ 
███████╗    ██║ ╚═╝ ██║    ██║         ██║  ██║    ██████╔╝    ██║  ██║    ╚═╝██║     
╚══════╝    ╚═╝     ╚═╝    ╚═╝         ╚═╝  ╚═╝    ╚═════╝     ╚═╝  ╚═╝       ╚═╝                                                                                        
`

const magenta    =     '\x1b[35m%s\x1b[0m';
const amarelo    =     '\x1b[33m%s\x1b[0m';
const ciano      =     '\x1b[36m%s\x1b[0m';
const vermelho   =     '\x1b[31m%s\x1b[0m';
const verde      =     '\x1b[32m%s\x1b[0m';

console.log (titulo, subtitle)

console.log ( magenta, 'Bem vindos ao Carlanna Coffee!')

console.log ('Qual seu nome?')
let nome = ler()

console.clear()

console.log (cafe)




console.log ('Qual café você deseja?' )
let tipoCafe = Number(ler())

let vazio = '';

let pequeno = 1.50
let medio   = 2.50
let grande = 3.00

if (tipoCafe == 1) {
    vazio = pequeno 
}

if (tipoCafe == 2) {
    vazio = medio
}

if (tipoCafe == 3) {
    vazio = grande
}

console.log(verde, 'Item adicionado com sucesso!')

/* ----------------------------------------------- */

console.log(empada)

console.log ('O preco unitário da empada é de 2.30!')
let valorEmpada = 2.30

console.log ('Quantas empadas você vai querer?')
let qtdEmpadas = Number(ler())

let empty = '';
let vezes ='';
let total = '';
let porc ='';

if ( qtds => 6 ) {
    empty = 'Você obteve um desconto de 15%!'
    vezes = valorEmpada * qtdEmpadas
    total = vazio + vezes
    porc = total - (total * (15/100))
}

else if ( qtds => 4 ) {
    empty = 'Você obteve um desconto de 20%!'
    vezes = valorEmpada * qtdEmpadas
    total = vazio + vezes
    porc = total - (total * (20/100))
}

else {
    console.log (vermelho, 'Nada foi adicionado ao carrinho!')
}

console.log ('preco ' + porc)