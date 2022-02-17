// Antes do ECS2015
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(3))
console.log(soma(3, 5, 9, 8, 2, 10))

console.log(soma('a', 'b', 'c'))