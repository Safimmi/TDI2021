<script>
  export default {
    name: 'Carrusel',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="izq">
        <div class="imagen">
          <img alt="Logo" src="../../assets/img1.png">
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
          <h2>The haunting of Hill house</h2>
          <div class="texto">
          <div class="texto1">
          <p>Hice créditos de apertura en 3D inspirados en la serie de Netflix The heunting of hill house. Muestra la recreación de diferentes estancias de la propia casa.</p>
          </div>
          <div class="texto2">
          <p1>Sofía Zamora</p1>
          <p1>Estudiante</p1>
          <p1>2021</p1>
          </div>
          </div>
        </div>
        <div class="bottom">
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