<template>
  <div v-for="{ id, materia, titulo, descripcion, estado, nombre, categoria,imagen} in proyectos" :key="id">
    <div v-if="estado == 'No-publicado'" >
      <div class="body">
        <div class="item">
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
              <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000" 
              type="submit" @click="updateproyecto(id)">
              Publicar
              </button>
              <button class="btn btn-dark" style="background-color: #353755; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 25px; link-hover-color:#000" 
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
    margin: 80px;
    width: 1000px; 
    border: solid 2px #aaa;
    padding: 10px;
  }
  .inf{
    display: flex;
    flex-direction: column;
    align-items:flex-start;

  }
  .botones{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
.image img{
  height:200px;
  width:200px ;
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