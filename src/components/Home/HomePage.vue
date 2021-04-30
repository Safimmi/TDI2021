<template>
<body>
<div class="wrapper">
  <div class="header">
    <div class="imagen">
    <img alt="Logo" src="../../assets/logo.png">  
    </div>
    <LogInB/>
  </div>
  <div class="main">
    <Rozasogordo/>
    
    <Slide/>
  </div>
  <Formulario/>
</div>
</body>
</template>


<script>
import LogInB from '@/components/Home/LogInB.vue'
import Slide from '@/components/Home/Slide.vue'
import Rozasogordo from '@/components/3D/Rozasogordo.vue'
export default {
  name: 'Home',
  components: {
    LogInB,
    Slide,
    Rozasogordo
  }
}
</script>

<style>
body {
  margin: 0;
  background: #e0e4ee;
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
  justify-content: flex-end;
  height: 750px;
}




</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
