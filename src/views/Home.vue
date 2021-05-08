<template>
<div class="wrapper">
  <div class="loader">
      <Loader/>
  </div>
  <div class="home">
    <HomePage/>
  </div>
</div>
</template>

<script>
import Loader from '@/components/Home/Loader.vue'
import HomePage from '@/components/Home/HomePage.vue'

export default {
  name: 'Home',
  components: {
    Loader,
    HomePage
  }
}
</script>

<style scoped>

</style>