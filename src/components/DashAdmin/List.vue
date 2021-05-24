<template>
  <div v-for="{ id, materia, titulo, descripcion, estado, nombre, categoria,imagen} in proyectos" :key="id">
    <div v-if="estado == 'No-publicado'">
      <div class="body">
        <div class="item">
          <div class="image">
            <img :src=imagen>
          </div>
          <div class="inf">
            <h2> {{materia}} </h2> <br>
            <h3> {{titulo}} </h3>
            <p> {{descripcion}} </p> <br>
            <p> {{nombre}} </p>
            <p> {{categoria}} </p>
          </div>
          <div class="botones">
              <button class="btn btn-dark1" 
              type="submit" @click="veritem(id)">
              Ver
              </button>
              <button class="btn btn-dark2"
              type="submit" @click="updateproyecto(id)">
              Publicar
              </button>
              <button class="btn btn-dark3" 
              type="submit" @click="deleteproyecto(id)">
              Rechazar 
              </button> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ver" v-if="isModalVisible">

      <div class="modal-backdrop" >
        <div class="modal">  

          <div class="carousel-item active">
            

              <div class="itemc">

            
                  <div class="izq" >
                    <div class="imagen">
                        <img :src=item.imagen  alt="...">
                    </div>
                  </div>

                  <div class="der">
                    <div class="top">
                    <div class="materia"><p3>{{item.materia}}</p3></div>
                    <div class="boton">
                    <button
                      type="button"
                      class="btn-close"
                      @click="closeModal()"
                    >
                    </button>
                    </div>
                    </div>
                    <div class="main">
                      <h2>{{item.titulo}}</h2>
                      <div class="texto">
                      <div class="texto1">
                      <p>{{item.descripcion}}</p>
                      
                      </div>
                      <div class="texto2">
                      <p1>{{item.nombre}}</p1>
                      <p1>{{item.categoria}}</p1>
                      <p1>{{item.fecha}}</p1>
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
  .body
  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 80px;
    width: 1000px; 
    border: solid 4px rgba(0, 0, 0,0.2);
    background: rgba(255, 255, 255,0.3);
    padding: 10px;
  }
  .inf{
    margin: 0 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;

  }
  .botones{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 20px;
  }
  .btn-dark1{
    background-color: #353755;
    color: white;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px 30px;
  }
  .btn-dark1:hover{
    background-color: #4c4f79;
    color: white;
  }

  .btn-dark2{
    background-color: #353755;
    color: white;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px 30px;
  }
  .btn-dark2:hover{
    background-color: #78ccac;
    color: white;
  }

  .btn-dark3{
    background-color: #353755;
    color: white;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px 30px;
  }
  .btn-dark3:hover{
    background-color: #BA605D;
    color: white;
  }
  .body h2 {
  font-family: 'Righteous';
  color: #353755;
  margin-bottom: 0;
  font-size: 30px;
}
  .body h3 {
  font-family: 'Montserrat', sans-serif;
  color: #000;
  font-weight: bolder;
  margin-bottom: 0;
  font-size: 20px;
}
 .body p {
  font-family: 'Montserrat', sans-serif;
  color: #000;
  margin-bottom: 0;
  font-size: 20px;
  text-align: left;
}
.image{
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img{
  max-height:200px;
  max-width:200px ;
}

/* CARRUSEL */
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

  .itemc{
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
import { db } from '@/firebase'
import { useLoadproyectos, deleteproyecto, updateproyecto } from '@/firebase'
export default {
  setup() {
    const proyectos = useLoadproyectos()
    return { proyectos, deleteproyecto,updateproyecto }
  },
  data() {
    return {
       isModalVisible: false,
       item: {}
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    veritem(id){
      this.item = {};
      var docRef = db.collection("proyectos").doc(id);
      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.item = doc.data();
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      this.showModal();
    }
  },
}
</script>