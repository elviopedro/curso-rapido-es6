// REST

const usuario = {
    nome: 'João',
    idade: 56,
    sexo: 'Masculino'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

const arr = [1, 3, 4, 8, 10]

const [ a, b, ...c ] = arr

console.log(a, b, c)

function soma(...params) {
    return params.reduce((total, proximo) => total + proximo)
}

// function soma(a, b, ...c) {
//     return a + b + c.reduce((total, proximo) => total + proximo)
// }

console.log(soma(10, 5, 7))

// SPREAD

const arr1 = [1, 2, 3]

const arr2 = [4, 5, 6]

const arrConcatenado = [...arr1, ...arr2]

console.log(arrConcatenado)

const usuario2 = { nome: 'Ana', ...usuario }
// const usuario2 = { ...usuario, nome: 'Ana' }

console.log(usuario2)