<template>
  <li class="blog-post list-group-item">
    <h5>ID: {{ blog.id }}</h5>
    <h5>Title: {{ blog.title }}</h5>
    <h5>Tag: {{ blog.tag }}</h5>
    <p>Content: {{ blog.content }}</p>
    <button @click="redirectToEdit()" class="btn btn-info mr-2">編輯</button>
    <button @click="deletePost()" class="btn btn-danger">刪除</button>
  </li>
</template>

<script>
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
    // 傳送該筆資料的 id
    //!  查一下是否可以把資料全部傳過去 不用寫在路由上
    redirectToEdit() {
      this.$router.push({
        name: 'edit',
        params: { id: this.post.id, },
      })
    },
    deletePost() {
      // 發送 刪除 API 渲染本頁即可

    },


  },

}
</script>

<style scoped lang="scss">

</style>
