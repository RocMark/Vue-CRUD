<template>
  <form @submit="searchBlog()" class="search-bar form-inline mt-3 mb-3">
    <div class="form-group">
      <input v-model="keyWord" type="text" class="form-control mr-2" placeholder="請輸入關鍵字" />
      <button class="btn btn-info mr-2">搜尋</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchBlog() {
      // this.keyWord

    },
  },
}
</script>

<style scoped lang="scss">
.tl {
  border: .5px solid #f50057;
}
</style>
