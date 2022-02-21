function calculo(x, y) {
    const soma = x + y
    const subtracao = x - y
    const multiplicacao = x * y
    const divisao = x / y

    return { soma, subtracao, multiplicacao, divisao }
}

console.log(calculo(3, 2))
console.log(calculo(Math.PI, 2))
console.log(calculo(10, 3.56))