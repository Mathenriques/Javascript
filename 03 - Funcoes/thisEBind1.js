const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e Orientada a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()