<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"><br> -->
    <span v-for="(users) in users" :key="users.id">
      {{ users.name }}
    </span>

    <form class="form-inline mt-3 mb-3">
      <div class="form-group">
        <input type="text" class="form-control mr-2" placeholder="請輸入關鍵字">
        <button class="btn btn-info">搜尋</button>
      </div>
    </form>

    <!-- BlogList Compo -->
    <ul class="list-group">
      <!-- BlogPost Compo -->
      <li class="list-group-item">
        <h5>ID: 1</h5>
        <h5>Title: 1d561d56</h5>
        <h5>Tag: 8705</h5>
        <p>Content: lorem40</p>
        <button class="btn btn-info mr-2">編輯</button>
        <button class="btn btn-danger">刪除</button>
      </li>
    </ul>

    <BlogPostVue blog="blogData">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>


<script>
// @ is an alias to /src
import BlogPostVue from '@/components/BlogPostVue.vue'

export default {
  name: 'home',
  data() {
    return {
      users: [],
      blogData: {
        id: 1,
        title: '15ds165a',
        tag: 1546,
        content: 'lorem40',
      },
    }
  },
  components: {
    BlogPostVue,
  },
  created() {
    this.$store.dispatch('getUsers')
      .then((result) => {
        this.users = result.data
        console.table(result.data)
      })
      .catch((err) => { console.error(err) })
  },
}
</script>
<style lang="scss" scoped>

</style>
