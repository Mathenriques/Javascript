function tratarErroELancar(erro) {
    // throw new Error('')
    throw 'mensagem'
}

function imprimirNomeComExclamacao(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeComExclamacao(obj)