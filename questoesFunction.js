import prompt from 'prompt-sync';
let read = prompt();

export function Musicas (Genero, Artista, Musica, Duração, Vizualização) {
  this.genero = Genero;
  this.artista = Artista;
  this.nome = Musica;
  this.tempo = Duração;
  this.vizu = Vizualização;
}

export function String(mensagem) {
  console.log(mensagem);
  return read();
}

export function Numberstring(mensagem) {
  console.log(mensagem);
  return Number(read());
}

export function Opções () {
  console.log(`
    Qual das 10 musicas deseja alterar?
    1 - Sheesh
    2 - ABCD 
    3 - Penelope
    4 - My Love all mine
    5 - Rockstar
    6 - Drama
    7 - Do i wanna know
    8 - Girls
    9 - True Story
    10 - Eternal sunshine
    `)
  return Numberstring()
}

export function Alterações(pergunta) {
  while (true) {
    console.log(
      
    `Bem vindo ao seu Studio!
    O que deseja deletar da Lista de Informações?
    1 - Genero
    2 - Artista
    3 - Nome da Musica
    4 - Duração
    5 - Vizualizações
    0 - Sair`);

    let pergunta1 = Numberstring('Escolha uma opção: ');

    if (pergunta1 === 0) {
      break;
    } 
    
    else if (pergunta1 === 1) {
      delete pergunta.genero;
    } 
    
    else if (pergunta1 === 2) {
      delete pergunta.artista;
    } 
    
    else if (pergunta1 === 3) {
      delete pergunta.nome;
    } 
    
    else if (pergunta1 === 4) {
      delete pergunta.tempo;
    } 
    
    else if (pergunta1 === 5) {
      delete pergunta.vizu;
    } 
    
    else {
      console.log('Opção inválida. Tente novamente.');
    }

    console.log(pergunta);
  }

}





