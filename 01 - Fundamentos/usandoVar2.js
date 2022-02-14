var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

/* Explicação:
*
*  Não gera problema pois não estão no mesmo escopo,
*  o "var" possui escopo global e função,
*  sendo o ultimo o do caso acima
*/