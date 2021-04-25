<template>
<div class="wrapper">
<div class="loader">
    <Loader/>
  </div>
  <div class="home">
    <HomePage/>
    <Rozasogordo/>
    <Formulario />
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Loader from '@/components/Loader.vue'
import HomePage from '@/components/HomePage.vue'
import Formulario from '@/components/Formulario.vue'
export default {
  name: 'Home',
  components: {
    Loader,
    HomePage,
    Formulario
  }
}
</script>

<style>
.wrapper{
  display: block;
}

</style>