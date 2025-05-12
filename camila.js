import prompt from 'prompt-sync'
let ler = prompt()

console.log ('Me informe a primeira idade.')
let idade1 = Number(ler())

console.log ('Me informe a segunda idade.')
let idade2 = Number(ler())

console.log ('Me informe a terceira idade.')
let idade3 = Number(ler())

let camila = '';

// Cibele nasceu antes de Camila e Celeste nasceu depois de Camila.

if ( idade1 < idade2 && idade3 > idade2  ) {
    camila = idade2 
}

else if ( idade1 > idade2 && idade1 > idade3 ) {
    camila = idade1
}

else if ( idade3 < idade2 && idade3 > idade1 ) {
    camila = idade3
}

console.log ('A idade de Camila é ' + camila )




