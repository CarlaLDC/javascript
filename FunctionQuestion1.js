import prompt from 'prompt-sync';
let ler = prompt();

export function mensagem(mensagem){
    console.log(mensagem)
    return ler()
}

export function Condições(n1, n2, n3){
    let luxoDias = 150.00
    let luxoKm1 = 0.30
    let luxoKm2 = 0.25
    let popularDias = 90.00
    let popularKm1 = 0.20
    let popularKm2 = 0.10    
    if(n1 == "luxo".toLowerCase()){
        let a = luxoDias * n2
        if(n3 <= 200){
            let b = n3 * luxoKm1
            let c = b + a
            return c
        }
        else{
            let d = n3 * luxoKm2
            let e = d + a
            return e
        }
    }
    else if(n1 == "popular".toLowerCase()){
        let a = popularDias * n2
        if(n3 <= 100){
            let b = n3 * popularKm1
            let c = b + a
            return c
             
        }
        else{
            let d = n3 * popularKm2
            let e = d + a
            return e
        }
    }

}