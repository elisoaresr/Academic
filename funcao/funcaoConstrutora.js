function Carro(velocidadeMaxima = 200, delta =5) {
    //atributoPrivado
    let velocidadeAtual = 0


//métodoPúblico
this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
    }else {
        velocidadeAtual = velocidadeMaxima
    }
}

//métodoPúblico
this.getVelocidadeAtual = function () {
    return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

