<template>
  <div v-for="item in lista" :key="item.id">
      <div class="body" >
        <div class="item" style="margin-left:30% ; margin-right:30%">
          <div class="image">
            <img :src=item.data.imagen >
          </div>
          <div class="inf">
            <h2> {{item.data.materia}} </h2> <br>
            <h3> {{item.data.titulo}} </h3>
            <p> {{item.data.descripcion}} </p> <br>
            <p> {{item.data.nombre}} </p>
            <p> {{item.data.categoria}} </p>
          </div>
          <div class="botones">
              <button class="btn btn-dark1" 
              type="submit" >
              ver
              </button>
              <button v-if="estado=='En espera'" class="btn btn-dark"
              type="submit" >
              {{item.data.estado}}
              </button> 
              <button v-else class="btn btn-dark9"
              type="submit" >
              {{item.data.estado}}
              </button> 
          </div>
        </div>
      </div>
  </div>    
  <div v-if="!lista.length" class="prueba">
    <div class="item">
      <h4>Aún no ha enviado ningún proyecto. </h4>
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
.item h4{
  font-family: 'Montserrat', sans-serif;
  color: #000;
  font-weight: bolder;
  margin-bottom: 0;
  font-size: 20px;
  /* border:2px solid blue; */
  width: 100%;
  text-align: center;
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
            userid:'',
            dataUsuario: {},
            lista: []
        }
    },
    created(){
      
      this.user = firebase.auth().currentUser;
            var docRef = db.collection("usuarios").doc(this.user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    this.dataUsuario = doc.data();
                    this.userid = this.user.uid;

                    this.lista=[];
                      var proyectosL = db.collectionGroup('proyectos').where('usuario', '==', this.userid );
                        proyectosL.get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                this.lista.push({id: doc.id, data: doc.data()});    
                            });
                                    
                        });
                    
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

    }
}
</script>