<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="none">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="item">
            <div class="izq">
              <div class="imagen">
                  <img src="@/assets/spider-man-triste.png"  alt="...">
              </div>
            </div>
            <div class="der">
              <div class="top">
              <div class="materia"><p3>Modelado 3D</p3></div>
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
                <h2>Modelado bien maestro</h2>
                <div class="texto">
                <div class="texto1">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptates consequatur corporis? Quis optio maxime dignissimos expedita quibusdam eius quasi fugiat voluptatibus, vel aliquid officiis perspiciatis. Dolore aliquid odit earum.</p>
                </div>
                <div class="texto2">
                <p1>Rochita</p1>
                <p1>Profesor</p1>
                <p1>2011</p1>
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
          <div class="carousel-item">
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
                <h2>Increíble render de la casa de mi papá</h2>
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
    width: 95%;
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
