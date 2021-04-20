<template>
<div class="wrapper">
  <div class="fondo">
    <h1>Envía tu propuesta</h1>
    <form @submit.prevent="onSubmit">
      <div class="formulario">
        <div class="parte1">
          <div class="izq">
            <input id="uploadImage1" type="file" accept="image/*" name="images[1]" onchange="previewImage(1);" @change="uploadImage" required />
            <br>

            <img id="uploadPreview1" height="300" />
          </div>
          <div class="der">
            <div class="materia">
              <label>Materia</label>
              <select v-model="form.materia" class="form-select form-select-lg" aria-label="Default select example" required>
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
              <input  v-model="form.titulo" class="form-control form-control-lg"  required />
            </div>
          </div>
      </div>
      <div class="parte2">
        <label>Descripción</label>
        <textarea  v-model="form.descripcion" class="form-control" rows="4" style = "resize: none" required></textarea>
      </div>
      </div>
      <div class="boton">
        <button class="btn btn-primary btn-lg"  type="submit" @click="onUpload" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000" > Enviar </button>
      </div>
    </form>
  </div>
  <div class="salir">
    <router-link to="/"><button class="btn btn-primary btn-lg" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000" >Salir</button></router-link>
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
import { createUser } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ materia: '', titulo: '', descripcion:'', imagen:'' })
    const onSubmit = async () => {
      await createUser({ ...form })
      form.materia = ''
      form.titulo = ''
      form.descripcion = ''
      form.imagen=[]
    }
    return { form, onSubmit}
  },
  data(){
    return{
        imageData: null,
        picture: null,
        uploadValue: 0
    }
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    uploadImage(e){
      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = firebase.storage().ref('Proyectos/'+ Math.random()*100 + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.form.images.push(downloadURL);
              console.log('File available at', downloadURL);
            });
      }
    }
  }  
}
</script>