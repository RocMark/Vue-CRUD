<template>
  <li class="blog-post list-group-item">
    <h5>ID: {{ blog.id }}</h5>
    <h5>Title: {{ blog.title }}</h5>
    <h5>Tag: {{ blog.tag }}</h5>
    <p>Content: {{ blog.content }}</p>
    <button @click="redirectToEdit(blog)" class="btn btn-info mr-2">編輯</button>
    <button @click="deletePost(blog.id)" class="btn btn-danger">刪除</button>
  </li>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'BlogPost',

  props: {
    blog: {
      type: Object,
      required: true,
      default() {
        return {
          id: 99999,
          title: 'Not Found',
        }
      },
    },
  },

  methods: {
    ...mapMutations([
      'currentEditBlog'
    ]),
    ...mapActions([
      'deleteBlog'
    ]),
    //! 查一下是否可以把資料全部傳過去 不用寫在路由上
    // ? 我用將要編輯的資料 先存在 Vuex 再去取
    redirectToEdit(data) {
      this.currentEditBlog(data)

      this.$router.push({
        name: 'edit',
        // ? 只能傳 route 定義的???
        params: {
          id: this.blog.id,
          // blog: this.blog, // 沒吃到
        },
      })
    },
    deletePost(id) {
      this.deleteBlog(id)
      //! go 會進行刷新頁面
      this.$router.go('home')
    },
  },

}
</script>

<style scoped lang="scss">

</style>
