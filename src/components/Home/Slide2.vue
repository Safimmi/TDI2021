<template>

    <div class="slide2">
        <div class="area">
            <h2 value="Verde">3D y Diseño Digital </h2>
        </div>
        <div class="content">
            <p @click="cmate()">Taller digital de diseño</p>
            <p @click="cdifer()">Animación 2D</p>
            <p @click="cintegral()">Modelado 3D</p>
            <p @click="cvectorial()">Render</p>
            <p @click="cecuaciones()">Animación 3D y dinámicas</p>
            <p @click="calgebra()">Introducción a la computación gráfica</p>
            <p @click="cprob()">Computación gráfica</p>
            <p @click="cmetod()">Audio y video</p>
        </div>
    </div>

    <div class="carrusel" v-if="isModalVisible">
      
        <div class="modal-backdrop" >
          <div class="modal">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="9999999999999">
              <div class="carousel-inner" >
                    <div class="carousel-item active">       
                      <div class="item">
                      <div class="der1">
                        <div class="top">
                        <div class="materia"><p3>{{asign}}</p3></div>
                        <div class="boton">
                        <button
                          type="button"
                          class="btn-close"
                          @click="closeModal()"
                        >
                        </button>
                        </div>
                        </div>
                        <div class="main1">
                          <h2>Carrusel de Proyectos</h2>
                          <div class="infomateria">
                          <h2>{{asign}}</h2>
                          <h3>Semestre: {{matedata.semestre}}</h3>
                          <h3>Créditos: {{matedata.creditos}}</h3>
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
                    
                    <div class="carousel-item" v-for="item in lista" :key="item.id">
                      

                        <div class="item">

                      
                            <div class="izq" >
                              <div class="imagen">
                                  <img :src=item.data.imagen  alt="...">
                              </div>
                            </div>

                            <div class="der">
                              <div class="top">
                              <div class="materia"><p3>{{item.data.materia}}</p3></div>
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
                                <h2>{{item.data.titulo}}</h2>
                                <div class="texto">
                                <div class="texto1">
                                <p>{{item.data.descripcion}}</p>
                                
                                </div>
                                <div class="texto2">
                                <p1>{{item.data.nombre}}</p1>
                                <p1>{{item.data.categoria}}</p1>
                                <p1>{{item.data.fecha}}</p1>
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
    
    </div>

</template>

<style scoped>

.slide2 {
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

.slide2 .area h2 {
    font-family: 'Righteous';
    font-size: 43px;
    color: #EEEEEE;
    margin-bottom: 10%;
    text-align: start;
    cursor: default;
}

.slide2 .content {
    padding: 0 10%;
    overflow: scroll;
    overflow-x: hidden; 
}
.slide2 .content p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #EEEEEE;
    text-align: start;
    cursor: pointer;
}
.slide2 p:hover{
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

  .der1{
    background: #353755;
    display: flex;
    width: 100%;
    height: 100%;
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

  .main1{
    margin: 0px 10%;
    margin-top: 60px;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  .main h2{
    font-family: 'Righteous';
    color: white;
    font-size: 50px;
  }

  .main1 h2{
    margin-top: 50px;
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

  .infomateria{
    background: white;
    margin-top: 50px;
    padding: 40px;
    border-radius: 20px;
  }

  .infomateria h2{
    color: #353755;
    margin-top: 0px;
  }

  .main h3{
    font-family: 'Righteous';
    color: #353755;
    font-size: 40px;
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

<script >
import { db } from '@/firebase'

export default {
  name: 'Home',
  data() {
    return {
      isModalVisible: false,
      asign:'',
      lista: [],
      matedata: {}
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    clista(){

      this.lista=[];
      var proyectosL = db.collectionGroup('proyectos').where('estado', '==', 'Publicado').where('materia', '==', this.asign);
        proyectosL.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.lista.push({id: doc.id, data: doc.data()});              
            });
        });

      var docRef = db.collection("materias").doc(this.asign);
      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.matedata = doc.data();
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

      this.showModal();
    },

    cmate(){
       this.asign='Taller digital de diseño'; 
       this.clista();
    },
    cdifer(){
       this.asign='Animación 2D'; 
       this.clista();
    },
    cintegral(){
       this.asign='Modelado 3D'; 
       this.clista();
    },
    cvectorial(){
       this.asign='Render'; 
       this.clista();
    },
    cecuaciones(){
       this.asign='Animación 3D y dinámicas'; 
       this.clista();
    },
    calgebra(){
       this.asign='Introducción a la computación gráfica'; 
       this.clista();
    },
    cprob(){
       this.asign='Computación gráfica'; 
       this.clista();
    },
    cmetod(){
       this.asign='Audio y video'; 
       this.clista();
    }
  }
}
</script>
