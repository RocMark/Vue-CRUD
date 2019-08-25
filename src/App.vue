<template>
  <div id="app" class="">
    <TheNav></TheNav>
    <router-view/>
  </div>
</template>


<script>
import TheNav from '@/components/TheNav.vue';

export default {
  name: 'app',
  components: {
    TheNav,
  },
}

</script>

<style lang="scss">
</style>
