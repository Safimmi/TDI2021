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

//
//import firebase from 'firebase'
//import { config } from '@/firebase'
//firebase.initializeApp(config)
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

<style>
.wrapper{
  display: block;
}

</style>