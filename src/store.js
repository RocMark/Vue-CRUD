import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const userRequest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json', },
})

export default new Vuex.Store({
  state: {
    blogs: [],
    tags: [],
    currentEditBlog: {},
  },

  //* 注意第一個 mutations 變數為 state，第二個才是資料
  mutations: {
    setAllBlogs(state, data) {
      this.state.blogs = data
    },
    setAllTags(state, data) {
      this.state.tags = data
    },
    currentEditBlog(state, data) {
      console.log('currentEditBlog', data)
      this.state.currentEditBlog = data
    },
  },

  // actions 發送 api 利用 mutations 把資料寫入 state
  actions: {
    getAllTags() {
      userRequest.get('/tags')
        .then((result) => {
          this.commit('setAllTags', result.data)
        })
        .catch((err) => { console.error(err) })
    },
    getAllBlogs(context, data) {
      userRequest
        .get('/blogs')
        .then((result) => {
          this.commit('setAllBlogs', result.data)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    getBlog(context, id) {
      userRequest.get(`/blogs/${id}`)
        .then((result) => {
          // console.table('getBlogAction', result.data)
          this.commit('currentEditBlog', result.data)
        })
        .catch((err) => { console.error(err) })
    },

    createBlog(context, data) {
      console.log('createBlog', data)

      userRequest.post('/blogs', data)
        .then((res) => {
          console.table('createBlog', res.data)
        })
        .catch((error) => { console.error(error) })
    },

    // 資料進來了 待寫 API
    updateBlog(context, data) {
      console.log('updateBlog', data)
      const { id, } = data

      userRequest.put(`/blogs/${id}`, data)
        .then((res) => {
          console.table(res.data)
        })
        .catch((error) => { console.error(error) })
    },

    deleteBlog(context, id) {
      console.log('deleteBlog', id)

      userRequest.delete(`/blogs/${id}`)
        .then((res) => {
          console.table(res)
        })
        .catch((error) => { console.error(error) })
    },
  },

  strict: process.env.NODE_ENV !== 'production',
})
