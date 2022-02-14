var a = 3
let b = 4
const c = 5

var a = 30
/*
'let' não permite redefinição de uma variavel, logo:
    let b = 40, deve apresentar erro de sintaxe

'const' por ser definir uma constante tbm nao permite redefinição de valores
*/

console.log("var: ", a)
console.log("let: ", b)
console.log("const: ", c)