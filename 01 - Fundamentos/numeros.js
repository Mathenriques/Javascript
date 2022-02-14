const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.781

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(5)) // Defini o numero de casas decimais
console.log(media.toPrecision(2)) // Defini a precisão do numero
console.log(media.toExponential(2)) // Coloca em função exponencial
console.log(media.valueOf(5))

// Diferença entre Number e number
console.log("Number:", typeof Number)
console.log(typeof media, "é tipo de dado")