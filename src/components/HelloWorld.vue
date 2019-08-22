<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class="test">SCSS Variable Test</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
      // 注意不可使用 data/computed,props於beforeCreated建立
      default: () => { 'test' },
      // 必須符合陣列中的值 才會通過
      validator: value => (['test123'].indexOf(value) !== -1),
    },
  },
}
</script>

<style scoped lang="scss">
.test {
  color: $primary;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
