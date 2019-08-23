<template>
  <ul class="blog-list list-group">
    <BlogPost v-for="blog in blogs" v-bind:blog="blog" v-bind:key="blog.id"></BlogPost>
  </ul>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'BlogList',
  props: {
    msg: {
      type: String,
      required: true,
      default() {
        return 'Default Msg'
      },
    },
    blogs: {
      type: Array,
      required: false,
    },
  },
  components: {
    BlogPost,
  },
}
</script>

<style scoped lang="scss">

</style>
