const notas = [8.0, 7.5, 6.2, 5.0, 6.5, 2.0]
    let resultado = []

for(let i in notas) {
    if(notas[i] > 7) {
        resultado.push(notas[i])
    }   
}    

console.log(resultado)


const av2 = [8.0, 7.5, 6.2, 5.0, 6.5, 2.0]
    let result = []

for(let i in av2) {
    if(av2[i] <= 5) {
        result.push(av2[i])
    }
}
console.log(result)