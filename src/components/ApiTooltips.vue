<template>
  <div class="api-tooltips alert alert-success alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" >&times;</button>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ApiTooltips',
  props: {
    msg: {
      type: String,
      required: true,
      default() {
        return 'Default'
      },
    },
  },
  //* msg 進來寫入 & 決定樣式
  mounted() {

  },
}
</script>

<style scoped lang="scss">

</style>
