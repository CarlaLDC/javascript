import prompt from 'prompt-sync'
let ler = prompt();

const carlanna = `
██████╗ █████╗ ██████╗ ██╗      █████╗ ███╗   ██╗███╗   ██╗ █████╗     
██╔════╝██╔══██╗██╔══██╗██║     ██╔══██╗████╗  ██║████╗  ██║██╔══██╗    
██║     ███████║██████╔╝██║     ███████║██╔██╗ ██║██╔██╗ ██║███████║    
██║     ██╔══██║██╔══██╗██║     ██╔══██║██║╚██╗██║██║╚██╗██║██╔══██║    
╚██████╗██║  ██║██║  ██║███████╗██║  ██║██║ ╚████║██║ ╚████║██║  ██║    
╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝  ╚═╝                                                                         
`


const coffee = `
██████╗ ██████╗ ███████╗███████╗███████╗███████╗
██╔════╝██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝
██║     ██║   ██║█████╗  █████╗  █████╗  █████╗  
██║     ██║   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝  
╚██████╗╚██████╔╝██║     ██║     ███████╗███████╗
╚═════╝ ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚══════╝                                        
`


const empadas = `
███████╗███╗   ███╗██████╗  █████╗ ██████╗  █████╗ ███████╗
██╔════╝████╗ ████║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝
█████╗  ██╔████╔██║██████╔╝███████║██║  ██║███████║███████╗
██╔══╝  ██║╚██╔╝██║██╔═══╝ ██╔══██║██║  ██║██╔══██║╚════██║
███████╗██║ ╚═╝ ██║██║     ██║  ██║██████╔╝██║  ██║███████║
╚══════╝╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝                                           
`


const pedidos = `
██████╗ ███████╗██████╗ ██╗██████╗  ██████╗ ███████╗
██╔══██╗██╔════╝██╔══██╗██║██╔══██╗██╔═══██╗██╔════╝
██████╔╝█████╗  ██║  ██║██║██║  ██║██║   ██║███████╗
██╔═══╝ ██╔══╝  ██║  ██║██║██║  ██║██║   ██║╚════██║
██║     ███████╗██████╔╝██║██████╔╝╚██████╔╝███████║
╚═╝     ╚══════╝╚═════╝ ╚═╝╚═════╝  ╚═════╝ ╚══════╝                                            
`

const preto      = '\x1b[30m%s\x1b[0m';
const vermelho   = '\x1b[31m%s\x1b[0m';
const verde      = '\x1b[32m%s\x1b[0m';
const amarelo    = '\x1b[33m%s\x1b[0m';
const azul       = '\x1b[34m%s\x1b[0m';
const magenta    = '\x1b[35m%s\x1b[0m';
const ciano      = '\x1b[36m%s\x1b[0m';



console.log(carlanna);
console.log(coffee);

console.log(magenta, 'Qual seu nome?')
let nome = ler();

console.log(verde, `\nSeja bem vindo(a) ${nome}!`);



console.log( '\n0- Nenhum'          );
console.log( '1- Pequeno (R$ 1.50)' );
console.log( '2- Médio (R$ 2.50)'   );
console.log( '3- Grande (R$ 3.00)'  );

console.log( ciano, '\nQual tamanho de café você deseja?')
let tipoCafe = Number(ler())

let cafePequeno = 1.50
let cafeMedio = 2.50
let cafeGrande = 3.00
let cafe = '';

if ( tipoCafe == 1 ) {
    cafe = 1.50
    console.log( verde, '\nAnotado!')

    console.log('\nTemos a seguinte promocao: Na compra de um café pequeno e 6 ou mais empadas, será dado um desconto de 15%!')
}

else if ( tipoCafe == 2 ) {
    cafe = 2.50
    console.log( verde, '\nAnotado!')

    console.log('\nTemos a seguinte promocao: Na compra de um café médio e 6 ou mais empadas, será dado um desconto de 15%!')
}
else if ( tipoCafe == 3 ) {
    cafe = 3.00
    console.log( verde, '\nAnotado!')

    console.log('\nTemos a seguinte promocao: Na compra de um café grande e 4 ou mais empadas, será dado um desconto de 20%!')
}
else if ( tipoCafe == 0 ) {
    cafe = 0
    console.log ( verde, '\nAnotado!')

    console.log('\nTemos empadas por R$ 2.30 (UN)');
}



console.log('Quantas empadas você vai querer?');
let qtdEmpadas = Number(ler());

let promocao = '';
let porcentagem = '';
let final = '';


if ( qtdEmpadas => 6 ) {
    promocao = (2.30 * qtdEmpadas) + cafe
    porcentagem = ( promocao * 15) /100
    final = promocao - porcentagem

    console.log ( verde, '\nAnotado!')
}

/* 
    2.30 * 6 + 2.50 = 13,80 + 2.50 = 16,30
    16,30 * 15/100 = 16.30 * 0,15 
    16.30 - 2,445 = 13,855


*/
else if ( qtdEmpadas < 4 ) {
    promocao = (2.30 * qtdEmpadas) + cafe

    console.log ( verde, '\nAnotado!')
} 

else if ( qtdEmpadas => 4 || opcao < 6 ) {
    promocao = (2.30 * qtdEmpadas) + cafe
    porcentagem = ( promocao * 20 ) /100
    final = promocao - porcentagem

    console.log ( verde, '\nAnotado!')
} 


else if ( qtdEmpadas == 0 ) {
    console.log ( verde, '\nAnotado!')
}

else {

}


console.log(pedidos)

console.log( ciano, 'Nota de pagamento')

if ( qtdEmpadas => 1 && tipoCafe == 1 ) {
    console.log('Tipo do café: ' + cafePequeno)

    console.log('Quantidade de empadas: ' + qtdEmpadas)
    
    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
}

else if ( qtdEmpadas => 1 && tipoCafe == 2 ) {
    console.log('Tipo do café: ' + cafeMedio)

    console.log('Quantidade de empadas: ' + qtdEmpadas)
    
    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
    
}

else if ( qtdEmpadas => 1 && tipoCafe == 3 ) {
    console.log('Tipo do café: ' + cafeGrande)

    console.log('Quantidade de empadas: ' + qtdEmpadas)
    
    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
    
}

else if ( qtdEmpadas => 1 && tipoCafe == 0 ) {
    console.log('Quantidade de empadas: ' + qtdEmpadas)
    
    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
    
}

else if ( qtdEmpadas == 0 && tipoCafe == 0 ) {
    console.log( vermelho, 'Nada foi colocado no carrinho!!')
    
}


else if ( qtdEmpadas == 0 && tipoCafe == 1 ) {
    console.log('Tipo do café: ' + cafePequeno)
  
    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
    
}

else if ( qtdEmpadas == 0 && tipoCafe == 2 ) {
    console.log('Tipo do café: ' + cafeMedio)

    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
    
}

else if ( qtdEmpadas == 0 && tipoCafe == 3 ) {
    console.log('Tipo do café: ' + cafeGrande)
    
    console.log('Valor descontado: ' + porcentagem)
    
    console.log('Total final: ' + final )
    
}

























