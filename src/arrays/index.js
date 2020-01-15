const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const novoArray = arr.map(function(item, index) {
    return item ** 2
})

console.log(novoArray)

const arrReduce = arr.reduce(function(total, proximo) {
    return total + proximo
})

console.log(arrReduce)

const arrFilter = arr.filter(function(item) {
    return item % 2 !== 0
})

console.log(arrFilter)

const arrFind = arr.find(function(item) {
    // return item === 9
    return item === 10
})

console.log(arrFind)