const x = 10
// x = 20

const y = {
    nome: 'Carlos',
    idade: 27
}

y.idade = 24

console.log(y)

// ----------------------

function testNumeroPar(numero) {
    if (numero % 2 === 0) {
        let testeLet = 'Teste let!'
        var testeVar = 'Teste var!'
        console.log('O número é par!')
    } else {
        console.log('O número é par!')
    }
    // console.log(testeLet)
    console.log(testeVar)
}

testNumeroPar(90)
