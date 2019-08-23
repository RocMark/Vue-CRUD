<template>
  <div class="edit container">
    <h1>EditPage</h1>
    <h3>ID: {{ id }}</h3>
    <a href="/">Home</a>
  </div>
</template>


<script>

export default {
  name: 'edit',
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  // ! 近來在依靠傳入的變數 去發送 API (不佳吧)
  created: {

  },
}

</script>
<style lang="scss" scoped>

</style>
