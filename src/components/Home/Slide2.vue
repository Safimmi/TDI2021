<template>
    <div class="slide">
        <div class="area">
            <h2 value="Verde">3D y Diseño Digital</h2>
        </div>
        <div class="content">
            <p>Taller digital de diseño</p>
            <p>Animación 2D</p>
            <p>Modelado 3D</p>
            <p>Render</p>
            <p>Animación 3D y dinámicas</p>
            <p @click="showModal"  >Introducción a la computación gráfica</p>
            <p>Computación gráfica</p>
            <p>Audio y video</p>
        </div>
    </div>
    <div class="main">

      <Carrusel
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div>
</template>

<style scoped>

.slide {
    /* border: 5px solid blue; */
    display: flex;
    flex-direction: column;
    
    border-start-start-radius: 20px;
    -webkit-border-start-start-radius: 20px;
    -moz-border-start-start-radius: 20px;
    -ms-border-start-start-radius: 20px;
    -o-border-start-start-radius: 20px;
    border-end-start-radius: 20px;
    -webkit-border-end-start-radius: 20px;
    -moz-border-end-start-radius: 20px;
    -ms-border-end-start-radius: 20px;
    -o-border-end-start-radius: 20px;
    
    padding: 60px ;
    background: #353755;

    position: relative;
    width: 100%;
    height: 96%;    
    
}

.slide .area h2 {
    font-family: 'Righteous';
    font-size: 43px;
    color: #EEEEEE;
    margin-bottom: 10%;
    text-align: start;
    cursor: default;
}

.slide .content {
    padding: 0 10%;
    overflow: scroll;
    overflow-x: hidden; 
}
.slide .content p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #EEEEEE;
    text-align: start;
    cursor: pointer;
}
.slide p:hover{
    color: #5BD3C7;
    text-decoration: underline;
}

li {
    list-style: none;
} 


/*Scrollbar Style*/

.content::-webkit-scrollbar {
    width: 0.5em;
}
.content::-webkit-scrollbar-track {
    background-color: #2B2D45;
    border-radius: 10px;
    margin: 20px;
}
.content::-webkit-scrollbar-thumb {
    background-color: #484A6D;
    outline: none;
    border-radius: 10px;
}

</style>

<script >
import Carrusel from '@/components/Home/Carrusel.vue'
export default {
  name: 'Home',
  components: {
    Carrusel
  },
  data() {
    return {
      isModalVisible: false
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
