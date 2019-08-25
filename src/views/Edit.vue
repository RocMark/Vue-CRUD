<template>
  <div class="edit container">
    <h1>EditPage</h1>
    <a class="btn btn-success mb-2" href="/home">Home</a>
    <h4>ID: {{ this.$route.params.id }}</h4>
    <form @submit.prevent="onSubmit()" class="form mt-3 clearfix">
      <div class="form-group">

        <input v-model.trim.lazy="blogTitle" type="text" class="form-control mb-3" placeholder="Title" required>

        <!-- <div class="dropdown mb-3">
          <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ showSelectedTagText }}
          </button>
          <div class="dropdown-menu" aria-labelledby="">
            <a v-for="tag in tags" @click="setSelectedTag(tag)" :key="tag.id" class="dropdown-item" href="#">
              {{ tag.name }}
            </a>
          </div>
        </div> -->

        <textarea v-model.trim.lazy="blogContent" class="form-control mb-3" rows="5" placeholder="Content" required></textarea>

        <input class="btn btn-success float-right" type="submit" value="送出">
      </div>
    </form>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'create',
  data() {
    return {
      blogId: 0,
      blogTitle: '',
      blogContent: '',
    }
  },
  computed: {
    ...mapState([
      'currentEditBlog'
    ]),
  },
  methods: {
    ...mapActions([
      'updateBlog'
    ]),

    // 觸發 action updateBlog & 導向首頁
    onSubmit() {
      const data = {
        id: this.blogId,
        title: this.blogTitle,
        content: this.blogContent,
      }
      // console.log('updateBlogData', data)

      // todo 有時候資料渲染不到首頁 (非同步問題? 包callback?)
      this.updateBlog(data)
      this.$router.push('/home')
    },
  },
  mounted() {
    // this.blog = this.currentEditBlog
    // console.log('currentEditBlog', this.currentEditBlog)
    this.blogId =  this.$route.params.id
    this.blogTitle = this.currentEditBlog.title
    this.blogContent = this.currentEditBlog.content
  },
}

</script>
<style lang="scss" scoped>

</style>
