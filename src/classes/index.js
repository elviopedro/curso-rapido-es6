class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

// class TodoList extends List{
//     constructor() {
//         this.todos = []
//     }

//     add(data) {
//         this.todos.push(data);
//         console.log(this.todos);
//     }
// }

class TodoList extends List {
    constructor() {
        super()
        this.vingadores = ['Hulk', 'Homem de Ferro', 'Capitão América']
    }

    listaVingadores() {
        console.log(this.vingadores)
    }
}

var Tarefas = new TodoList()

document.getElementById('add').onclick = function() {
    Tarefas.add('Noava tarefa!')
}

Tarefas.listaVingadores()

// ------------------------------------------------------------------------------

class Marvel {
    constructor() {
        this.vingadores = ['Hulk', 'Homem de Ferro', 'Capitão América']
    }

    static listaVingadores() {
        // var vingadores = ['Hulk', 'Homem de Ferro', 'Capitão América']
        // console.log(vingadores)
        console.log(this.vingadores)
    }
}

Marvel.listaVingadores()