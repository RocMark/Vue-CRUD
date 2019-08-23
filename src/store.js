import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const userRequest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json', },
})

export default new Vuex.Store({
  //! getters 有錯誤在試試看
  // getters: {
  //   compileNum() {
  //     return this.$store.state.testNum / 10
  //   },
  // },
  state: {
    testNum: 'storeTestNum',
    blogs: [],
    testString: 'testString',
    msg: '',
  },

  // getter 待測
  getters: {
    msg() {
      return `GetterMsg:${this.state.testNum}`
    },
  },

  //! 注意第一個 mutations 變數為 state，第二個才是資料
  mutations: {
    setAllBlogs(state, data) {
      // console.table(data)
      this.state.blogs = data
      // console.table('state', Array.isArray(this.state.blogs)) // true
      // console.log(this.state.blogs[0].content)

      // fetch-post-simple
    },
    msgMutations(state, data) {
      // console.log('msgMutations', state)
      this.state.msg = data
      console.log('this.state.msg', this.state.msg)
    },
  },

  // actions 發送 api 利用 mutations 把資料寫入 state
  actions: {
    test(context, data) {
      console.log('context', context) // context
      console.log('data', data)       // 傳入的變數
      console.log('this', this)       // 指向這個被建立的 Store
      console.log('this.state.var', this.state.var) // 取得 State 裡的變數
      console.log('contextVar', context.state.testString)

      context.commit('msgMutations', data)
    },
    getAllBlogs() {
      userRequest.get('/blogs')
        .then((result) => {
          // console.table(result.data)
          this.commit('setAllBlogs', result.data)
        })
        .catch((err) => { console.error(err) })
    },
    getBlog() {
      // ! get id 寫法查一下
      console.log('getBlog')
      return userRequest.get('/blogs/:id')
    },
    getTags() {
      console.log('getTags')
      return userRequest.get('/tags')
    },
  },

  strict: process.env.NODE_ENV !== 'production',
})
