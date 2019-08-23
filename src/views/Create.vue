<template>
  <div class="create container">
    <h1>CreatePage</h1>
    <a class="btn btn-info" href="/home">Home</a>
    <form class="form mt-3 clearfix">
      <div class="form-group">
        <input type="text" class="form-control mb-3" placeholder="Title" required>
        <div class="dropdown mb-3">
          <button class="btn btn-info dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Text
          </button>
          <div class="dropdown-menu" aria-labelledby="">
            <!-- <h6 class="h4 dropdown-header">Header</h6> -->
            <a class="dropdown-item" href="#">Item1</a>
            <!-- <div class="dropdown-divider"></div> -->
          </div>
        </div>
        <textarea class="form-control mb-3" rows="5" placeholder="Content" required></textarea>
        <input class="btn btn-primary float-right" type="submit" value="Submit">
      </div>
    </form>

  </div>
</template>


<script>

export default {
  name: 'create',
  //! 需要發送取得 TagList 的 API
  created: {
    // getTagList()
  },
  methods: {
    getTagList() {

    },
  },
}

</script>
<style lang="scss" scoped>

</style>
