let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

/* Explicação:
*
*  Não gera problema pois não estão no mesmo escopo,
*  o "let" possui escopo global, função e bloco
*  sendo o ultimo o do caso acima
*/