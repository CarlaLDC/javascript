import prompt from "prompt-sync"
let ler = prompt()


const PRETO = '\x1b[30m%s\x1b[0m';
const VERMELHO = '\x1b[31m%s\x1b[0m';
const VERDE = '\x1b[32m%s\x1b[0m';
const AMARELO = '\x1b[33m%s\x1b[0m';
const AZUL = '\x1b[34m%s\x1b[0m';
const MAGENTA = '\x1b[35m%s\x1b[0m';
const CIANO = '\x1b[36m%s\x1b[0m';
const BRANCO = '\x1b[37m%s\x1b[0m';

const freiCoffee = `
███████╗██████╗ ███████╗██╗     ██████╗ ██████╗ ███████╗███████╗███████╗███████╗██╗
██╔════╝██╔══██╗██╔════╝██║    ██╔════╝██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝██║
█████╗  ██████╔╝█████╗  ██║    ██║     ██║   ██║█████╗  █████╗  █████╗  █████╗  ██║
██╔══╝  ██╔══██╗██╔══╝  ██║    ██║     ██║   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝  ╚═╝
██║     ██║  ██║███████╗██║    ╚██████╗╚██████╔╝██║     ██║     ███████╗███████╗██╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚══════╝╚═╝
                                                                                   
`

export function bemVindo ( mensagem ) {
    console.log(`
        Bem vindo ao 
        ${freiCoffee}
        `);

        return mensagem
}

export function menuEscolha ( mensagem ) {
        console.log(AMARELO, `Deseja ver o menu?`)
        console.log(`
1 - Sim
2 - Não
            `)

        let escolha = Number ( ler( ) )

        return escolha
}

export function escolhaMenu ( escolha ) {
    let escolhaUsuario = menuEscolha()
    
    if ( escolhaUsuario === 1) {
        console.log(`Obrigada por acessar nossos serviços!
Segue o menu:`)
    }

    else if ( escolhaUsuario === 2) {
        console.log(`Poxa, até uma proxíma fez!`)
    }

    else {
        console.log(`Nenhuma opção foi escolhida, tchau :(`)
    }

}

export function menu ( opcoes ) {
    console.log(`
        1 - Café
        2 - Bolo
        3 - Rosquinha
        `)
}





























