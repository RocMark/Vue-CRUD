<template>
  <div id="app" class="">
    <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <router-link :to="'/home'">Link</router-link>
        <a @click="redirect('home')" class="navbar-brand" href="javascript:;">
          <!-- <img src="https://fakeimg.pl/100x100/" width="30" height="30" class="d-inline-block align-top" alt="mainNavIcon"> -->
          RocMark
        </a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item active mr-2">
              <router-link class="nav-link btn btn-info"  :to="'/home'">Home</router-link>
            </li>
            <li class="nav-item active mr-2">
              <router-link class="nav-link btn btn-success"  :to="'/create'">新增</router-link>
            </li>
            <li class="nav-item active mr-2">
              <a @click="testFunc()" class="nav-link btn btn-dark" href="javascript:;">Test</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <router-view/>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'app',
  computed: {

  },
  methods: {
    testFunc() {
    },
  },
  mounted() {
    function postData() {
      return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          console.table(res.data)
        })
        .catch((error) => { console.error(error) })
    }
    console.table('postData', postData())
  },
}

</script>

<style lang="scss">
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
