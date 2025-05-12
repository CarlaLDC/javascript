
import prompt from 'prompt-sync'
let ler = prompt();

let qtdHomensMaiorQueTrinta = 0;
let qtdMulherMenorQueDezoito = 0;
let somaIdades = 0;

let continuar = true;

let voltas = 0;

let idadeAtual = 0;

let pessoaMaisVelha = "";

while (continuar) {
  console.log('Informe seu nome: ');
  let nome = ler();

  console.log('Informe sua idade: ');
  let idade = Number(ler());

  if (idade > idadeAtual) {
    idadeAtual = idade;
    pessoaMaisVelha = nome;
  }

  somaIdades = somaIdades + idade;

  console.log("Digite seu genero: ");
  let genero = ler();

    if (genero === "homem" && idade > 30) {
        qtdHomensMaiorQueTrinta++;
    }
  
    else if (genero === "mulher" && idade < 18) {
        qtdMulherMenorQueDezoito++;
    }

  console.log("Deseja continuar ? ");
  let opcao = ler()

    if (opcao === "nao") {
        continuar = false;
    }

    voltas++;
}

let mediaIdade = somaIdades / voltas;

console.log(`A media de idade do grupo é ${mediaIdade}`);
console.log(`A pessoa mais velha é ${pessoaMaisVelha}`);
console.log(`A Quantidade de homens com mais de 30 anos é ${qtdHomensMaiorQueTrinta}`);
console.log(`A Quantidade de mulheres com menos de 18 anos é ${qtdMulherMenorQueDezoito}`);
