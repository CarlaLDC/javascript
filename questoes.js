import { Musicas, Alterações, Opções } from './questoesFunction.js';

const musica01 = new Musicas("KPOP", "Babymonster", "Sheesh", "2:50", "46MI")
console.log(musica01)

const musica02 = new Musicas("KPOP", "Nayeon", "ABCD", "2:42", "11MI")
console.log(musica02)

const musica03 = new Musicas("BPOP", "BIN, Vitão, Malibu", "Penelope", "2:51", "17MI")
console.log(musica03)

const musica04 = new Musicas("POP", "Mitski", "My Love all mine", "2:17", "8,7MI")
console.log(musica04)

const musica05 = new Musicas("KPOP", "Lisa", "Rockstar", "2:51", "69MI")
console.log(musica05)

const musica06 = new Musicas("KPOP", "Aespa", "Drama", "3:34", "209MI")
console.log(musica06)

const musica07 = new Musicas("POP", "Artic Monkeys", "Do i wanna know", "04:42", "224MI")
console.log(musica07)

const musica08 = new Musicas("POP", "Girl in red", "Girls", "03:21", "50MI")
console.log(musica08)

const musica09 = new Musicas("POP", "Ariana Grande", "True Story", "2:43", "30MI")
console.log(musica09)

const musica10 = new Musicas("POP", "Ariana Grande", "Eternal sunshine", "3:30", "614MI")
console.log(musica10)



const opcao = Opções();

if (opcao == 1) {
  Alterações(musica01);
  console.log(musica01);
} 

else if (opcao == 2) {
  Alterações(musica02);
  console.log(musica02);
} 

else if (opcao == 3) {
  Alterações(musica03);
  console.log(musica03);
} 

else if (opcao == 4) {
  Alterações(musica04);
  console.log(musica04);
} 

else if (opcao == 5) {
  Alterações(musica05);
  console.log(musica05);
} 

else if (opcao == 6) {
  Alterações(musica06);
  console.log(musica06);
} 

else if (opcao == 7) {
  Alterações(musica07);
  console.log(musica07);
} 

else if (opcao == 8) {
  Alterações(musica08);
  console.log(musica08);
} 

else if (opcao == 9) {
  Alterações(musica09);
  console.log(musica09);
} 

else if (opcao == 10) {
  Alterações(musica10);
  console.log(musica10);
} 

else {
  console.log("Opção de música inválida");
}