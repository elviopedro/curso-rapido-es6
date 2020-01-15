// import { soma, sub, div, mult }  from './matematica'
import soma, { sub, div, mult }  from './matematica'
import * as funcoes from './matematica'

console.log(soma(8, 2))
console.log(sub(8, 2))
console.log(div(8, 2))
console.log(mult(8, 2))

console.log('----')

// console.log(funcoes.soma(8, 2))
console.log(funcoes.default(8, 2))
console.log(funcoes.sub(8, 2))
console.log(funcoes.div(8, 2))
console.log(funcoes.mult(8, 2))
console.log(funcoes)