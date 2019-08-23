<template>
  <div class="home container">

    <form class="form-inline mt-3 mb-3">
      <div class="form-group">
        <input type="text" class="form-control mr-2" placeholder="請輸入關鍵字">
        <button class="btn btn-info mr-2">搜尋</button>
      </div>
    </form>

    {{ blogs }}
    <h1>{{ anotherName }}</h1>

    <BlogList msg="BlogPost Test" :blogs="blogs"></BlogList>

  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import BlogList from '@/components/BlogList.vue'

export default {

  name: 'home',
  computed: {
    ...mapState({
      blogs: 'blogs',
      stateMsg: 'msg',
      anotherName: 'testString',
    }),
    // ...mapGetters([
    //   'msg'
    // ]),
  },
  methods: {
    ...mapActions({
      getAllBlogs: 'getAllBlogs',
      test: 'test',
    }),
  },
  mounted() {
    this.getAllBlogs()
    this.test('SomeText')
    // console.log(this.blogs) // 怪怪的待測
  },
  components: {
    BlogList,
  },
}
</script>

<style lang="scss" scoped>

</style>
