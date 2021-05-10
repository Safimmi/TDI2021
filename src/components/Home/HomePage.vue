<template>
  <div class="wrapper">
    
    <div class="header">
      <div class="imagen">
        <img alt="Logo" src="../../assets/Brand/LogoHeaderX2.png">  
      </div>
      <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Abrir Carrusel
    </button>
      <LogInB/>
    </div>

    <div class="main">
      <Rozasogordo/>
      <Carrusel
        v-show="isModalVisible"
        @close="closeModal"
      />
      <Slide/>
    </div>
    
  </div>
</template>


<script >
import Carrusel from '@/components/Home/Carrusel.vue';
import LogInB from '@/components/Home/LogInB.vue'
import Slide from '@/components/Home/Slide.vue'
import Rozasogordo from '@/components/3D/Rozasogordo.vue'
export default {
  name: 'Home',
  components: {
    LogInB,
    Slide,
    Carrusel,
    Rozasogordo
  },
  data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
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

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
