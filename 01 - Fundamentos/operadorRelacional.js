// Uma operação com esse tipo de operador retorna sempre verdadeiro ou falso
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', '3' > 2)
console.log('06)', '3' < 4)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2) // Comparam endereço de memória
console.log('10)', d1 === d2) // Comparam endereço de memória
console.log('11)', d1.getTime() == d2.getTime()) // Retorna o number
console.log('12)', d1.getTime() === d2.getTime()) // Retorna o number

console.log('13)', undefined == null)
console.log('14)', undefined === null)