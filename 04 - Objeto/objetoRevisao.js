// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marco do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A5',
    valor: 89000,
    proprietario: {
        nome: 'Matheus Henriques',
        idade: 21,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 51
        }
    }
}

carro.proprietario.endereco.numero = 100
console.log(carro)