<template>
  <div id="app" class="">
    <div id="nav">
      <div class="btn-group" role="group">
        <router-link to="/">Home</router-link> |
        <router-link  to="/create">Create</router-link> |
        <router-link  to="/edit">Edit</router-link> |
        <router-link  to="/email">Email</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
