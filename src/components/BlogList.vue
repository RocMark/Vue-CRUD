<template>
  <ul class="blog-list list-group">
    <BlogPost :blog="">
  </ul>
</template>

<script>
import BlogPost from '@/components/BlogPost'

export default {
  name: 'BlogList',

  // todo 接收 Props

  data() {
    return {
    }
  },
  computed: {

  },
  components: {
    BlogPost,
  },
}
</script>

<style scoped lang="scss">

</style>
