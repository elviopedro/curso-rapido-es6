const usuario = {
    nome: 'José',
    idade: 45,
    endereco: {
        cidade: 'Caratinga',
        estado: 'MG'
    }
}

const nome  = usuario.nome
const idade  = usuario.idade
const cidade  = usuario.endereco.cidade

// const { nome, idade, endereco: { cidade } } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome(usuario) {
    console.log(usuario.nome)
}

// function mostraNome({ nome }) {
//     console.log(nome)
// }

mostraNome(usuario)