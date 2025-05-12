import prompt from 'prompt-sync'
let ler = prompt()

let a = []
let nm = Number(ler())
for(let i = 0; i < nm; i++){
    a[i] = Number(ler())
}
if (a[2] > a[1] && a[2] > a[0] ) {
        console.log('Ordem crescente.')
    }
    else if (a[0] > a[1] && a[0] > a[2]) {
        console.log('Ordem decrescente')
    }
    else {
        console.log('Desordenados')
    }
