import prompt from 'prompt-sync'
let ler = prompt()

console.log ('\nSistema para atravessar uma rua\n')

console.log ('Qual cor está?')
let cor = ler ()

let semaforo =''

if (cor == 'verde') {
    semaforo = 'Não atravesse!!'
}

else if (cor == 'amarelo') {
    semaforo = 'Espere alguns segundos, que já ficará vermelho...'
}

else if (cor == 'vermelho') {
    semaforo = 'Pode atravessar!'
}

else {
    semaforo = 'Espere ficar vermelho!!' 
}


console.log (semaforo)