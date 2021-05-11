<template>

  <div class="modal-backdrop">
    <div v-for="{ id, materia, titulo, descripcion, estado,imagen, nombre,categoria, fecha} in proyectos" :key="id">
        <div v-if="estado == 'Publicado'" >
          <div class="modal">
            <div class="izq">
              <div class="imagen">
                <img alt="Logo" :src=imagen>
              </div>
            </div>
            <div class="der">
              <div class="top">
              <div class="materia"><p3>{{materia}}</p3></div>
              <div class="boton">
              <button
                type="button"
                class="btn-close"
                @click="close"
              >
              </button>
              </div>
              </div>
              <div class="main">
                <h2>{{titulo}}</h2>
                <div class="texto">
                <div class="texto1">
                <p>{{descripcion}}</p>
                </div>
                <div class="texto2">
                <p1>{{nombre}}</p1>
                <p1>{{categoria}}</p1>
                <p1>{{fecha}}</p1>
                </div>
                </div>
              </div>
              <div class="bottom">
                  <img alt="prev" src="../../assets/Icons/AnteriorIcon.png">
                  <img alt="next" src="../../assets/Icons/SiguienteIcon.png">
              </div>
            </div>
          </div>
        </div> 
    </div>
  </div>
  
</template>

<style scoped>
  .modal-backdrop {
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    margin: 5% 10%;
    box-shadow: 2px 2px 20px 1px;
    width: 80%;
    height: 80%;
    display: flex;
    border-radius: 60px;
  }

  .izq{
    background: #D1D2F3;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imagen{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
  }

  .imagen img{
    width: 700px;
  }

  .der{
    background: #353755;
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .top{
    margin: 0% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
  }

  .main{
    margin: 0px 10%;
    margin-top: 60px;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .main h2{
    font-family: 'Righteous';
    color: white;
    font-size: 50px;
  }

  .main p{
    font-family: 'Montserrat';
    color: white;
    font-size: 20px;
  }

  .main p1{
    font-family: 'Montserrat';
    color: white;
    font-size: 15px;
  }

  .bottom{
    height: 20%;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
  }
   .bottom img{ 
    height: 35%;
  }

  .texto{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .texto1{
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    text-align: left;
  }

  .texto2{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .materia{
    font-size: 20px;
    color: white;
    padding: 0 20px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5BD3C7;
    border-radius:10px
  }
</style>

<script>
  // import firebase from 'firebase'
  import { db } from '@/firebase'
  import { useLoadproyectos} from '@/firebase'
  export default {
    name: 'Carrusel',
    data() {
      return {
        proyectosL: []
      };
    },
    created(){
      var proyectosRef = db.collection("proyectos");
      var proyectoslist = proyectosRef.where("materia", "==", "Algebra lienal");
      this.proyectosL = proyectoslist;
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
    setup() {
      const proyectos = useLoadproyectos()
      return {proyectos}
    }
  };
</script>
