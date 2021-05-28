<template>
  <div v-for="{ id, materia, titulo, descripcion, estado, nombre, categoria,imagen} in proyectos" :key="id">
    <div v-if="estado == 'En espera'">
      <div class="body">
        <div class="item">
          <div class="images">
          <div class="image">
            <img :src=imagen>
          </div>
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
      <div class="modal-backdrop">
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
                      <button class="btn btn-dark" 
                      type="submit" @click="showModal2()">
                      <img src="../../assets/Icons/EditIcon.png">
                      </button>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </div>


  <div class="edit" v-if="isModalVisible2">
    <div class="modal-backdrop" >
      <div class="modal2">  
          <div class="cerrar">
          <button
            type="button"
            class="btn-close"
            @click="closeModal2()"
          >
         </button>
         </div>
        <div class="fondo">
        <h1>Editar Propuesta</h1>
        <div class="formulario" id="myForm">
        <form>
          <div class="parte1">
            <div class="izq2">
              <input id="uploadImage1" type="file" accept="image/*" name="images[1]" class="form-control form-control-lg" onchange="previewImage(1);" @change="onFileSelected"  />
              <br>

              <img v-if="!upimg" :src=item.imagen>
              <img v-else id="uploadPreview1" />

            </div>
            <div class="der2">
              <div class="titulo">
                <label>Título:</label>
                <input  v-model="titulo" class="form-control form-control-lg"   />
              </div>
              <div class="titulo">
                <label>Fecha de realización:</label>
                <input  v-model="fecha" class="form-control form-control-lg"  />
              </div>
              <div class="titulo">
                <label>Materia:</label>
                <select v-model="materia" class="form-select form-select-lg " aria-label="Default select example"  >
                  <option selected></option>
                  <option value="Matemáticas básicas">Matemáticas básicas</option>
                  <option value="Calculo diferencial">Calculo diferencial</option>
                  <option value="Cálculo integral">Cálculo integral</option>
                  <option value="Calculo vectorial">Calculo vectorial</option>
                  <option value="Ecuaciones diferenciales">Ecuaciones diferenciales</option>
                  <option value="Algebra lineal">Algebra lineal</option>
                  <option value="Probabilidad y estadística">Probabilidad y estadística</option>
                  <option value="Métodos numéricos">Métodos numéricos</option>
                  <option value="Física Mecánica">Física mecánica</option>
                  <option value="Física electricidad y magnetismo">Física electricidad y magnetismo</option>
                  <option value="Física óptica y acústica">Física óptica y acústica</option>
                  <option value="Química">Química</option>

                  <option value="Taller digital de diseño">Taller digital de diseño</option>
                  <option value="Animación 2D">Animación 2D</option>
                  <option value="Modelado 3D">Modelado 3D</option>
                  <option value="Render">Render</option>
                  <option value="Animación 3D y dinámicas">Animación 3D y dinámicas</option>
                  <option value="Introducción a la computación gráfica">Introducción a la computación gráfica</option>
                  <option value="Computación gráfica">Computación gráfica</option>
                  <option value="Audio y video">Audio y video</option>

                  <option value="Programación 1">Programación 1</option>
                  <option value="Programación 2">Programación 2</option>
                  <option value="Programación 3">Programación 3</option>
                  <option value="Expresión gráfica">Expresión gráfica</option>
                  <option value="Dibujo">Dibujo</option>
                  <option value="Introducción a la ingeniería">Introducción a la ingeniería</option>
                  <option value="Metodología de la investigación">Metodología de la investigación</option>
                  <option value="Seminario de investigación">Seminario de investigación</option>
                </select>
              </div>
            </div>
        </div>
        <div class="parte2">
          <label>Descripción:</label>
          <textarea  v-model="descripcion" class="form-control" rows="4" style = "resize: none" ></textarea>
        </div>
        </form>
        </div>
        </div>
        <div class="boton2">
          <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
              <span class="sr-only"></span>
          </div>
          <button @click="update()" class="btn btn-primary btn-lg" style="background-color: #5bd3c7; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 15px 30px; link-hover-color:#000">
              <span v-if="! xhrRequest">Guardar</span>
              <span v-if="xhrRequest">Guardar</span>
          </button>
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
    background: rgba(255, 255, 255,0.3);
    padding: 20px;
    border-radius: 30px;
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
  .btn-dark{
    margin-top: 50px;
    background-color: #5BD3C7;
    color: #353755;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px 30px;
  }
  .btn-dark:hover{
    background-color: #4fbbb0;
  }
  .btn-dark:active{
    background-color: #449e95;
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
  width: 200px;
  height: 200px;
  border-radius: 10%;
  background-color: rgba(255, 255, 255, 0.445);
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
    max-height: 99%;
    max-width: 99%;
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
  /* ---------------------------------- EDITAR -------------------------------------------- */
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
  display: flex;
  flex-direction: column;
  margin: 0 80px;
}
.parte1 {
  display: flex;
  justify-content: space-between;
  
}
.izq2{
  /* border: 2px solid yellowgreen; */
  width: 50%;
}
.izq2 input{
  width: 480px;
}
.izq2 img{
  max-height: 180px;
  max-width: 500px;
}
.der2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}
.formulario {
  margin: 5% 0 4% 0;
  padding: 0% 5% 0% 5%;
  
}
.parte2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2%;
}
.boton2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 80px;
}

.titulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.alert-success{
    background: #fff;
    opacity: 0.7;
    margin: 10px;
    padding: 5px 20px;

    font-family: 'Montserrat';
    color: #353755;
    font-size: 20px;
}
.cerrar{
  display: flex;
  justify-content: flex-end;
  padding: 1.5% 3%;
}
.modal2{
  background: white;
  margin: 5% 0%;
  box-shadow: 2px 2px 20px 1px;
  width: 80%;
  height: 80%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 60px;

}

</style>

<script>
import firebase from 'firebase'
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
        isModalVisible2: false,
        xhrRequest: false,
        item: {},
        imageData: null,
        picture: null,
        upimg: false,
        uploadValue: 0, 
        proyectoid: '',
        materia: '',
        titulo: '',
        fecha: '',
        descripcion: '',

    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showModal2() {

      this.titulo = this.item.titulo;
      this.materia = this.item.materia;
      this.fecha = this.item.fecha;
      this.descripcion = this.item.descripcion;
      this.imagen=this.item.imagen;
      this.isModalVisible = false;
      this.isModalVisible2 = true;
    },
    closeModal2() {
      this.isModalVisible2 = false;
      this.isModalVisible = true;
      this.upimg=false;
    },
    veritem(id){
      var docRef = db.collection("proyectos").doc(id);
      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.item = doc.data();
               this.showModal();
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      this.proyectoid=id;
    },
    onFileSelected(event){
        this.slectedFile = event.target.files[0];
        this.upimg = true;
    },
    update(){
      
      this.xhrRequest = true;
     
      if(this.upimg == true){
        const sotorageref=firebase.storage().ref(`/Proyectos/${this.slectedFile.name}`);
        const task=sotorageref.put(this.slectedFile);
        task.on('state_changed',snapshot =>{
          let percentage = (snapshot.bytesTransfered/snapshot.totalBytes)*100;
          this.uploadValue = percentage;
        }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
          task.snapshot.ref.getDownloadURL().then((url)=>{
               
            db.collection("proyectos").doc(this.proyectoid).set({
                titulo: this.titulo,
                materia: this.materia,
                fecha: this.fecha,
                descripcion: this.descripcion,
                imagen: url,
                estado: this.item.estado,
                categoria: this.item.categoria,
                nombre: this.item.nombre,
                usuario: this.item.usuario
            })
            .then(() => {
              this.xhrRequest = false;
              this.veritem(this.proyectoid);
              this.closeModal2();
              this.upimg = false;
            })

          });
        });
   

      }
      else{

            db.collection("proyectos").doc(this.proyectoid).set({
                titulo: this.titulo,
                materia: this.materia,
                fecha: this.fecha,
                descripcion: this.descripcion,
                imagen: this.item.imagen,
                estado: this.item.estado,
                categoria: this.item.categoria,
                nombre: this.item.nombre,
                usuario: this.item.usuario
            })
            .then(() => {
              this.xhrRequest = false;
              this.veritem(this.proyectoid);
              this.closeModal2();
            })
      }
             
      
    }
  },
}
</script>