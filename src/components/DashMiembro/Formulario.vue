<template>
<div class="wrapper">
  <div class="fondo">
    <h1>Envía tu propuesta</h1>
    <form >
      <div class="formulario">
        <div class="parte1">
          <div class="izq">
            <input id="uploadImage1" type="file" accept="image/*" name="images[1]" onchange="previewImage(1);" @change="onFileSelected" required />
            <br>
            <img id="uploadPreview1"  height="180"/>
          </div>
          <div class="der">
            <div class="materia">
              <label>Materia</label>
              <select v-model="materia" class="form-select form-select-lg" aria-label="Default select example" required>
                <option selected></option>
                <option value="Matemáticas básicas">Matemáticas básicas</option>
                <option value="Calculo diferencia">Calculo diferencial</option>
                <option value="Cálculo integral">Cálculo integral</option>
                <option value="Cálculo integral">Cálculo integral</option>
                <option value="Calculo vectorial">Calculo vectorial</option>
                <option value="Ecuaciones diferenciales">Ecuaciones diferenciales</option>
                <option value="Algebra lineal">Algebra lineal</option>
                <option value="Probabilidad y estadística">Probabilidad y estadística</option>
                <option value="Métodos numéricos">Métodos numéricos</option>
                <option value="Cálculo integral">Física mecánica</option>
                <option value="Física electricidad y magnetismo">Física electricidad y magnetismo</option>
                <option value="Física óptica y acústica">Física óptica y acústica</option>
                <option value="Química">Química</option>
              </select>
            </div>
            <div class="titulo">
              <label>Título</label>
              <input  v-model="titulo" class="form-control form-control-lg"  required />
            </div>
          </div>
      </div>
      <div class="parte2">
        <label>Descripción</label>
        <textarea  v-model="descripcion" class="form-control" rows="4" style = "resize: none" required></textarea>
      </div>
      </div>
    </form>
      <div class="boton">
        <button class="btn btn-primary btn-lg" @click="setUp()" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000" > Enviar </button>
      <!-- <a @click="setUp()"> ENVIAR </a> -->
      </div>
      <a :href=picture > link </a>
      <img :src=picture > 
  </div>
  </div>
</template>

<style>
.salir {
  display: flex;
  padding-left: 2%;
  padding-top: 1%;
}
.fondo h1 {
  font-family: 'Righteous';
  color: #353755;
  margin-bottom: 0;
  font-size: 50px;
}
.fondo label {
  font-family: 'Righteous';
  color: #525365;
  font-size: 20px;
}
.fondo {
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: 1% 15%;
  padding: 1.5%;
}
.parte1 {
  display: flex;
  justify-content: space-between;
}
.der {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
}
.formulario {
  margin: 8% 0 4% 0;
}
.parte2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2%;
}
.boton {
  display: flex;
  justify-content: flex-end;
}
.titulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.materia {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
</style>

<script>
import firebase from 'firebase'
import { db } from '@/firebase'

export default {
  
  data(){
    return{
        imageData: null,
        picture: null,
        uploadValue: 0,        
        materia: null,
        titulo: null,
        descripcion: null,
        estado:"No-publicado",
        nombre: "",
        categoria: "",
        usuario:"",
        imagen:null
    }
  },
  methods:{
      onFileSelected(event){
        this.slectedFile = event.target.files[0];
      },
      setUp(){
        //IMAGEN
        const sotorageref=firebase.storage().ref(`/ProyectImages/${this.slectedFile.name}`);
        const task=sotorageref.put(this.slectedFile);
        task.on('state_changed',snapshot =>{
          let percentage = (snapshot.bytesTransfered/snapshot.totalBytes)*100;
          this.uploadValue = percentage;
        }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
          task.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture = url;
                //DATOS
                var user = firebase.auth().currentUser;

                db.collection("proyectos").add({
                    titulo: this.titulo,
                    materia: this.materia,
                    descripcion: this.descripcion,
                    estado: this.estado,
                    imagen: this.picture,
                    nombre: user.displayName,
                    usuario: user.email,
                    categoria: user.photoURL

                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                }); 
          });
        });
      }
  }      
}
</script>