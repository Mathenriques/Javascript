recordes = (pontuacao) => {
    let pontuacoes = pontuacao.split(', ')
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    let piorPartida = 1
    let quebrasDeRecorde = 0


    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quebrasDeRecorde++
        }
        if (pontuacoes[i] < piorPartida) {
            menorPontuacao = pontuacoes[i]
            piorPartida = i + 1
        }

    }

    return [quebrasDeRecorde, piorPartida]
}

let partidas = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
console.log(recordes(partidas))