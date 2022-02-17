function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2100))
console.log(criarProduto('Lapis', 1.67))
console.log(criarProduto('Carro', 100000))