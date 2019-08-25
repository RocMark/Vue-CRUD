<template>
  <div class="create container">
    <h1>CreatePage</h1>
    <a class="btn btn-success" href="/home">Home</a>
    <form @submit.prevent="onSubmit()" class="form mt-3 clearfix">
      <div class="form-group">

        <input v-model.trim.lazy="title" type="text" class="form-control mb-3" placeholder="Title" required>

        <div class="dropdown mb-3">
          <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ showSelectedTagText }}
          </button>
          <div class="dropdown-menu" aria-labelledby="">
            <a v-for="tag in tags" @click="setSelectedTag(tag)" :key="tag.id" class="dropdown-item" href="#">
              {{ tag.name }}
            </a>
          </div>
        </div>

        <textarea v-model.trim.lazy="content" class="form-control mb-3" rows="5" placeholder="Content" required></textarea>

        <input class="btn btn-success float-right" type="submit" value="新增">
      </div>
    </form>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'create',
  data() {
    return {
      title: 'TestAAA',
      tagSelected: false,
      tagSelectedText: 'tagA',
      tagSelectedId: 1,
      content: 'TestAAA',
    }
  },
  computed: {
    ...mapState([
      'tags'
    ]),
    showSelectedTagText() {
      if (this.tagSelected) { return this.tagSelectedText }
      return 'TagList'
    },
  },
  methods: {
    ...mapActions([
      'getAllTags',
      'createBlog'
    ]),
    setSelectedTag(tag) {
      this.tagSelected = true
      this.tagSelectedText = tag.name
      this.tagSelectedId = tag.id
    },
    onSubmit() {
      this.createBlog({
        title: this.title,
        content: this.content,
        tag: this.tagSelectedId,
      })
      this.$router.push('/home')
    },
  },
}

</script>
<style lang="scss" scoped>

</style>
