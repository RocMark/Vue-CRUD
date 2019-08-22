<template>
  <li class="blog-post-vue list-group-item">
    {{ blogData }}
    <h5>ID: 1</h5>
    <h5>Title: 1d561d56</h5>
    <h5>Tag: 8705</h5>
    <p>Content: lorem40</p>
    <button class="btn btn-info mr-2">編輯</button>
    <button class="btn btn-danger">刪除</button>
  </li>
</template>

<script>
export default {
  name: 'BlogPostVue',

  // todo 接收 Props

  data() {
    return {
      blog: {
        id: 1,
        title: '15ds165a',
        tag: 1546,
        content: 'lorem40',
      },
    }
  },
  computed: {

  },
}
</script>

<style scoped lang="scss">

</style>
