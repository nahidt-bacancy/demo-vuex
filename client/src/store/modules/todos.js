import axios from 'axios'

const state = {
    todos: [
        // {
        //     id: 1,
        //     title: "Todo 1"
        // },
        // {
        //     id: 2,
        //     title: "Todo 2"
        // }
    ]
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data);
    },
    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed:false})
    commit('newTodo', response.data)
    },
    async deleteTodo({commit}, id ){
     await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
     commit('removeTodo', id)
    },
    async filterTodos({commit}, e){
        //console.log(e);
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        //console.log(limit);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    async updateTodo({commit}, uTodo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${uTodo.id}`, uTodo);
        console.log(response.data)
        commit('updateTodo', response.data)
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, uTodo) => {
        const index = state.todos.findIndex(todo => todo.id === uTodo.id)
        if(index !== -1) {
            state.todos.splice(index, 1, uTodo)
        }
    }
};

export default {
    state,
    getters,
    actions, 
    mutations
}