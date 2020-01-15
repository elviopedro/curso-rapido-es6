const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const novoArray = arr.map((item, index) => {
    return item ** 2
})

// const novoArray = arr.map(item => {
//     return item ** 2
// })

// const novoArray = arr.map(item => item ** 2)

console.log(novoArray)

const div = (a, b) => {
    return a / b
}

// const div = (a, b) => a / b

console.log(div(4, 2))

const restornaObj = obj => { name: 'João' }

// const restornaObj = obj => ({ name: 'João' })

console.log(restornaObj())
