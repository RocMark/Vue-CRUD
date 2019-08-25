<template>
  <div class="the-nav container-fluid p-0">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="javascript:;">RocMark</a>
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active mr-2">
            <router-link class="nav-link btn btn-info"  :to="'/home'">Home</router-link>
          </li>
          <li class="nav-item active mr-2">
            <router-link class="nav-link btn btn-success"  :to="'/create'">Create</router-link>
          </li>
          <li class="nav-item active mr-2">
            <a @click="testFunc()" class="nav-link btn btn-dark" href="javascript:;">Test</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNav',
  methods: {
    testFunc() {
      this.$router.go('home')
    },
  },
}
</script>

<style scoped lang="scss">

</style>
