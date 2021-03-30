<template>
<div class="wrapper">
  <div class="header">
    <LogInB/>
  </div>
  <div class="main">
    <Slide/>
  </div>
</div>
</template>

<script>
import LogInB from '@/components/LogInB.vue'
import Slide from '@/components/Slide.vue'
export default {
  name: 'Home',
  components: {
    LogInB,
    Slide
  }
}
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  background: #FAF6FF;
  size: 1920px 1080px;
}
.header {
  display: flex;
  align-items: center;
}
.main {
  display: flex;
  justify-content: flex-end;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
