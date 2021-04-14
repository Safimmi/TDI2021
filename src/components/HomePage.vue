<template>
<body>
<div class="wrapper">
  <div class="header">
    <div class="imagen">
    <img alt="Logo" src="../assets/Logo.png">  
    </div>
    <router-link to="/about"><LogInB/></router-link>
  </div>
  <div class="main">
    <Modelos/>
    <Slide/>
  </div>
</div>
</body>
</template>


<script>
import LogInB from '@/components/LogInB.vue'
import Slide from '@/components/Slide.vue'
import Modelos from '@/components/Modelos.vue'
export default {
  name: 'Home',
  components: {
    LogInB,
    Slide,
    Modelos
  }
}
</script>

<style>
body {
  margin: 0;
  background: #d2dcf5;
}
.wrapper {
  display: flex;
  align-items: center;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  /*border: 2px solid yellow;*/
}
.imagen {
  display: flex;
  width: 175px;
  height: 104px;
  margin: 20px 0px;
}
.main {
  display: flex;
  justify-content: space-between;
  height: 750px;
}
</style>