//Implemente uma função que inverta a ordem dos elementos em um array. 
//Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.


import prompt from 'prompt-sync'
let ler = prompt()

export function pergunta1(){
    console.log("Digite quantos elementos você ira digitar:")
    return Number(ler())
} 

export function pergunta2(){
    let v = []
    let Vinvertido = []
    let a = pergunta1()
    for ( let i = 0; i <= a ; i++ ){
        console.log("Digite os Elementos")
        let elementos = ler();
        v[i]=elementos
    }
    for (let i = 0; i < v.length; i++) {
        Vinvertido[i] = v[v.length - 1 - i];
    }
    
    for (let item of Vinvertido) {
        console.log(item);
    }
}


















