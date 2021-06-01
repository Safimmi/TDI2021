
<template>
  <div v-if="successMessage !== ''" class="mensaje"  >
      <h4>{{ successMessage }}</h4>
  </div>
  <div class="cuerpo">
     <h1>Editar información</h1>
    <div class="texto">
       <div class="formulario">
            <p>Perfil aspirante:</p>
            <textarea v-model="aspirante" rows="7" style = "resize: none" required>    </textarea>
        </div>
        <div class="formulario">
            <p>Perfil egresado:</p>
            <textarea v-model="egresado"  rows="7" style = "resize: none" required> </textarea>
        </div> 
    </div>
     <div class="boton" >
            <button @click="update()" class="btn btn-dark2">
               Guardar
            </button>
            <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
  </div>
</template>
<style scoped>
.cuerpo{ 
        background-color: white;
        border-radius: 50px;
        margin-right: 5%;
        margin-left: 5%;
        margin-top:2%;
        margin-bottom: 10%;
        padding-bottom: 3%;
        padding-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* width: 800px; */
    }
    .btn-dark2{
        background-color: #484A6D;
        border: none;
        border-radius: 30px;
        font-family: 'Montserrat', sans-serif; 
        font-size: 20px;
        font-weight: 600;
        padding: 15px 60px;
        max-height: 100%;
        color: white;
    }
    .btn-dark2:hover{
        background-color: #5d5f88;      
    }
   
    .boton {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px;
    }
    .boton button{
        margin-right: 10px;
    }
    p{                                                                                                                      
        margin: 10px;                                                                                                                                                                                                       
        font-family: 'Righteous';
        font-size: 20px;
    }

    .usuario{
        text-align: center;
    }
    .texto{
        /* border: 2px solid blue; */
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .texto p{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .formulario{
      display: flex;
      flex-direction: column;

      width: 100%;
      margin-top: 2%;
    }
    .mensaje{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 80px;
      background: rgba(255, 255, 255,0.3);
      padding: 20px;
      border-radius: 30px;
  }
    .mensaje h4{
      font-family: 'Montserrat', sans-serif;
      color: #000;
      font-weight: bolder;
      margin-bottom: 0;
      font-size: 20px;
      /* border:2px solid blue; */
      width: 100%;
      text-align: center;
    }
    h1 {
      font-family: 'Righteous';
      color: #353755;
      margin-bottom: 0;
      font-size: 50px;
    }
</style>

<script>
import { db } from '@/firebase'

export default {
  data() {
    return {
      info:{},
      aspirante:"",
      egresado: "",
      xhrRequest: false,
      successMessage: ""
    }
  },
    created(){
      
      var docRef = db.collection("informacion").doc("info");

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.info = doc.data();
              this.aspirante = this.info.aspirante;
              this.egresado = this.info.egresado;
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

    },
    methods: {
      update(){
        

        this.successMessage = "";
        this.xhrRequest = true;

        db.collection("informacion").doc("info").set({
           aspirante: this.aspirante,
           egresado: this.egresado
        })
        .then(() => {
            console.log("Document successfully updated!");
            this.xhrRequest = false;
            this.successMessage = "Datos guardados correctamente"
        });
      }
    },
}
</script>
