import prompt from 'prompt-sync'
let ler = prompt()

let tarefas = []

console.log('Quais são suas tarefas?')
let quais = ler()

while (quais !== 'sair') {
    tarefas.push(quais)
    quais = ler()

}
console.log(tarefas) 















