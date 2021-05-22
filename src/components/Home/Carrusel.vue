<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="9999999999999">
        <div class="carousel-inner">
              <div class="carousel-item active">       
                <div class="item">
                <div class="izq">
                  <div class="imagen">
                    <img src="@/assets/img1.png" class="" alt="...">
                  </div>
                </div>
                <div class="der">
                  <div class="top">
                  <div class="materia"><p3>Render</p3></div>
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
                    <h2>Render de la casa</h2>
                    <div class="texto">
                    <div class="texto1">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum accusamus odio id eum! Repellendus, quo vel blanditiis sit impedit, fugiat facere labore aspernatur eius laudantium exercitationem quia rerum cupiditate debitis.</p>
                    </div>
                    <div class="texto2">
                    <p1>Juan Pablo</p1>
                    <p1>Estudiante</p1>
                    <p1>2021</p1>
                    </div>
                    </div>
                  </div>
                    <div class="bottom">
                      <div class="prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <img src="@/assets/Icons/AnteriorIconX2.png">
                      </div>
                      <div class="next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <img src="@/assets/Icons/SiguienteIconX2.png">
                      </div>
                    </div>
                </div>
              </div>
              </div>
              
              <div class="carousel-item" v-for="{ id, materia, titulo, descripcion,fecha, nombre, categoria,imagen} in proyectos" :key="id">
                

                  <div class="item">

                
                      <div class="izq" >
                        <div class="imagen">
                            <img :src=imagen  alt="...">
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
                            <div class="prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                              <img src="@/assets/Icons/AnteriorIconX2.png">
                            </div>
                            <div class="next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <img src="@/assets/Icons/SiguienteIconX2.png">
                            </div>
                          </div>
                      </div>



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
    flex-direction: column;
    border-radius: 60px;
  }

  .carousel{
    width: 100%;
    height: 100%;
  }

  .carousel-inner{
    width: 100%;
    height: 100%;
  }
  .carousel-item{
    width: 100%;
    height: 100%;
  }

  .item{
    display: flex;
    width: 100%;
    height: 100%;
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
    width: 85%;
    height: 85%;
    border-radius: 10%;
    /* border: solid 5px yellowgreen; */
    background-color: rgba(255, 255, 255, 0.445);
  }

  .imagen img{

    max-height: 100%;
    max-width: 100%;
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
  .bottom{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 30px;
  }
  .bottom img{
    width: 100%;
    height: 100%;
  }
  .next{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    border-radius: 50px;
    cursor: pointer;
  }
  .next:hover{
    background: rgba(0, 0, 0, 0.1);
  }
  .next:active{
    background: rgba(0, 0, 0, 0.2);
  }
  .prev{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    border-radius: 50px;
    cursor: pointer;
  }
  .prev:hover{
    background: rgba(0, 0, 0, 0.1);
  }
  .prev:active{
    background: rgba(0, 0, 0, 0.2);
  }
</style>

<script>
  // import firebase from 'firebase'
  // import { db } from '@/firebase'
  import { useLoadproyectos } from '@/firebase'
  export default {
    name: 'Carrusel',
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