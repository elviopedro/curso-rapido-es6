const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ok'), 2000)
})

minhaPromise()
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error(err)
    })

async function executaPromise() {
    const response = await minhaPromise()
    console.log(response)
    console.log(await minhaPromise())
}

// const  executaPromise = async () => {
//     const response = await minhaPromise()
//     console.log(response)
//     console.log(await minhaPromise())
// }

// Async function
executaPromise()