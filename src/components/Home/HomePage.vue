<template>
  <div class="wrapper">
    
    <div class="header">
      <div class="imagen">
        <img alt="Logo" src="../../assets/Brand/LogoHeaderX2.png">  
      </div>
    
      <div class="boton">
        <div v-if="usuario == false" >
          <LogInB/>
        </div>
        <div v-else>
          <miembroB/>
        </div>
      </div>
    
    </div>

    <div class="main">
      <Rozasogordo/>
      <Slide/>
    </div>
    
  </div>
</template>


<script >
import LogInB from '@/components/Home/LogInB.vue'
import miembroB from '@/components/Home/miembroB'
import Slide from '@/components/Home/Slide.vue'
import firebase from 'firebase'
import Rozasogordo from '@/components/3D/Rozasogordo.vue'
export default {
  name: 'Home',
  components: {
    LogInB,
    miembroB,
    Slide,
    Rozasogordo
  },
  data() {
    return {
      usuario: false,
    };
  },
  created() {
    var user = firebase.auth().currentUser;

    if (user) {
      this.usuario = true;
    }
    else{
      this.usuario = false;
    }
  }
}
</script>

<style scoped>

.wrapper {
  /* border: 5px solid green; */
  margin: 0;
  background: #D1D2F3;
  height: 99.9vh;
  width: 99.9vw;
  position: relative;
}

.header {
  /* border: 5px solid yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;
  
  position: relative;
  height: 15%;
}
.imagen {
  /* border: 5px solid blue; */
  display: flex;
  padding: 0;
  margin:0;
  height: 100%;
  width: 50%;
}
.imagen img{
  height: 100%;
}


.main {
  /* border: 5px solid red; */
  display: flex;
  position: relative;
  height: 85%;
}

.boton{
  /* border: 5px solid blueviolet; */
  width: 100%;
}
</style>

