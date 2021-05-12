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
              type="submit">
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
</template>

<style>
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
</style>
<script>
import { useLoadproyectos, deleteproyecto, updateproyecto } from '@/firebase'
export default {
  setup() {
    const proyectos = useLoadproyectos()
    return { proyectos, deleteproyecto,updateproyecto }
  }
}
</script>