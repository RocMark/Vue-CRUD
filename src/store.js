import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const userRequest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json', },
})

// 關閉 Prettier & phpfmt
export default new Vuex.Store({
  // getters 等同於 state 的 computed 可以先做運算
  // mapGetter/mapState 用以簡化呼叫多個變數的過程

  // 將 this.varA 映射為 store.state.varA
  // computed: mapState(['varA,varB'])
  getters: {
    // doneTodos: state => { return state.todos.filter(todo => todo.done) }
  },
  state: {

  },
  actions: {
    getUsers() {
      return userRequest.get('/users')
    },
  },
  mutations: {

  },
  strict: process.env.NODE_ENV !== 'production',
})
