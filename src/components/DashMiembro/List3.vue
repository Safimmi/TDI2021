<template>
  <div v-for="{ id, materia, titulo, descripcion, estado, nombre, categoria,imagen, usuario} in proyectos" :key="id">
    <div v-if="user.uid==usuario">
      <div class="body" >
        <div class="item" style="margin-left:30% ; margin-right:30%">
          <div class="image">
            <img :src=imagen >
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
              type="submit" >
              ver
              </button>
              <button v-if="estado=='En espera'" class="btn btn-dark"
              type="submit" >
              {{estado}}
              </button> 
              <button v-else class="btn btn-dark9"
              type="submit" >
              {{estado}}
              </button> 
          </div>
        </div>
      </div>
      </div>
     <div v-else class="mensaje">
      <p> Aún no has enviado ningun proyecto. </p> 
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
    width: 300px;
  }
  .btn-dark{
    background-color:#4c4f79;
    color: white;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px 30px;
    cursor: default;
  }
  .btn-dark9{
    background-color:#62e2d5a4;
    color: white;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px 30px;
    cursor: default;
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
.mensaje{
    background: #5bd3c744;
    margin: 1% 10%;
    padding: 5px 40px;
    border-radius: 20px;

    font-family: 'Montserrat';
    color: #202233;
    font-size: 15px;
 }

</style>
<script>
import firebase from "firebase";
import { db} from '@/firebase'
import { useLoadproyectos, deleteproyecto, updateproyecto } from '@/firebase'
export default {
  setup() {
    const proyectos = useLoadproyectos()
    return { proyectos, deleteproyecto,updateproyecto }
  },
  data(){
        return{
            usuario:[],
            user:null
        }
    },
    created(){
        this.user = firebase.auth().currentUser;
            console.log(this.user.displayName,);
            this.usuario=[]
            db.collection("usuarios")
            .get()
            .then((r) => {
                r.docs.map((item) => {
                this.usuario.push({
                    id: item.id,
                    data: item.data(),
                });
                });
            });
    }
}
</script>