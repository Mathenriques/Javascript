valorFinanceiro = (valor) => {
    novoValor = valor.toPrecision(2).replace('.', ',')
    console.log(`R$ ${novoValor}`)
}

soma1 = 3.4 + 2.1
valorFinanceiro(soma1)