const valores = [7.7, 8, 0, 12, 9.432]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
console.log(valores)