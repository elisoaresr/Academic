const pilotos = ['Vettel', 'Alonso', 'Raikkoen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Vertappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicitonar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1) //massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
