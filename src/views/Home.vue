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
// @ is an alias to /src
import Loader from '@/components/Loader.vue'
import HomePage from '@/components/HomePage.vue'
export default {
  name: 'Home',
  components: {
    Loader,
    HomePage
  }
}
</script>

<style>
.wrapper{
  display: block;
}

</style>