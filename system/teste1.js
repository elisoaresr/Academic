function divisao (a, b) {
    return function (c) {
        console.log(a / b / c)
        
    }
}

divisao(6,7)(8)

function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(15, 15)(15)


////////////////////////////////////////////////////////////////////////

const notas = [9.0, 5.4, 6.2, 2.5]
    notasBaixas = notas.filter(function(notas) {  // Com CallCack
        return notas <= 7
    })

console.log(notasBaixas)    


const av1 = [ 6.5, 7.0, 1.5, 3.0, 5.5, 9.9 ]  // Sem Callback
    let rec = [] 

for(let i in av1) {
    if(av1[i] >= 7) {
        rec.push(av1[i])
    }
}

console.log(rec)


/***************************/

