/*       NOTAÇÔES
*
*  '||' --> OU
*  '&&' --> E
*  '!!( ^ )' --> bitwise, ou exclusivo
*  '!=' --> bitwise, ou exclusivo
*
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50polegadas = trabalho1 && trabalho2
    // const comprarTv32polegadas = !!(trabalho1 ^ trabalho2)
    const comprarTv32polegadas = trabalho1 != trabalho2
    const saudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50polegadas, comprarTv32polegadas, saudavel } // Par Chave Valor reduzido
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))