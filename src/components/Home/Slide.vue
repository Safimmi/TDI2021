<template>

    <div class="slide2">
        <div class="area">
            <h2 value="Verde">Ciencias Básicas </h2>
        </div>
        <div class="content">
            <p @click="cmate()">Matemáticas básicas</p>
            <p @click="cdifer()">Cálculo diferencial</p>
            <p @click="cintegral()">Cálculo integral</p>
            <p @click="cvectorial()">Cálculo vectorial</p>
            <p @click="cecuaciones()">Ecuaciones diferenciales</p>
            <p @click="calgebra()">Álgebra lineal</p>
            <p @click="cprob()">Probabilidad y estadística</p>
            <p @click="cmetod()">Métodos numéricos</p>
            <p @click="cmeca()">Física mecánica</p>
            <p @click="celect()">Física electricidad y magnetismo</p>
            <p @click="coptica()">Física óptica y acústica</p>
            <p @click="cquimi()">Química</p>
        </div>
    </div>

    <div class="carrusel" v-if="isModalVisible">
      
        <div class="modal-backdrop" >
          <div class="modal">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="9999999999999">
              <div class="carousel-inner" >
                    <div class="carousel-item active">       
                      <div class="item">
                      <div class="izq">
                        <div class="imagen">
                          <img src="@/assets/img1.png" class="" alt="...">
                        </div>
                      </div>
                      <div class="der">
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
                        <div class="main">
                          <h2>Render de la casa</h2>
                          <div class="texto">
                          <div class="texto1">
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum accusamus odio id eum! Repellendus, quo vel blanditiis sit impedit, fugiat facere labore aspernatur eius laudantium exercitationem quia rerum cupiditate debitis.</p>
                          </div>
                          <div class="texto2">
                          <p1>Semestre: {{matedata.semestre}}</p1>
                          <p1>Creditos: {{matedata.creditos}}</p1>
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
       this.asign='Matemáticas básicas'; 
       this.clista();
    },
    cdifer(){
       this.asign='Cálculo diferencial'; 
       this.clista();
    },
    cintegral(){
       this.asign='Cálculo integral'; 
       this.clista();
    },
    cvectorial(){
       this.asign='Cálculo vectorial'; 
       this.clista();
    },
    cecuaciones(){
       this.asign='Ecuaciones diferenciales'; 
       this.clista();
    },
    calgebra(){
       this.asign='Álgebra lineal'; 
       this.clista();
    },
    cprob(){
       this.asign='Probabilidad y estadística'; 
       this.clista();
    },
    cmetod(){
       this.asign='Métodos numéricos'; 
       this.clista();
    },
    cmeca(){
       this.asign='Física Mecánica'; 
       this.clista();
    },
    celect(){
       this.asign='Física electricidad y magnetismo'; 
       this.clista();
    },
    coptica(){
       this.asign='Física óptica y acústica'; 
       this.clista();
    },
    cquimi(){
       this.asign='Química'; 
       this.clista();
    }
  }
}
</script>
