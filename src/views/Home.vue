<template>
  <div class="home container">

    <form class="search-bar form-inline mt-3 mb-3">
      <div class="form-group">
        <input type="text" class="form-control mr-2" placeholder="請輸入關鍵字" />
        <button class="btn btn-info mr-2">搜尋</button>
      </div>
    </form>

    <!-- <SearchBar></SearchBar> -->

    <ApiTooltips msg="Default"></ApiTooltips>

    <BlogList msg="BlogPost Test" :blogs="blogs"></BlogList>

  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import BlogList from '@/components/BlogList.vue';
import ApiTooltips from '@/components/ApiTooltips.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'home',
  //! 處理一下 Delete / Edit 傳過來的 成功訊息
  computed: {
    ...mapState({
      blogs: 'blogs',
      tags: 'tags',
    }),
  },
  methods: {
    ...mapActions({
      getAllBlogs: 'getAllBlogs',
      getAllTags: 'getAllTags',
    }),
  },
  mounted() {
    this.getAllBlogs();
    this.getAllTags();
  },
  components: {
    BlogList,
    ApiTooltips,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
</style>
