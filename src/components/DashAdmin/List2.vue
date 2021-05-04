<template>
<h1> Publicados </h1>
  <div v-for="{ id, materia, titulo, descripcion, estado} in proyectos" :key="id">
    <div v-if="estado == 'Publicado'" >
      <div class="body">
        <div class="item">
          <div class="inf">
            <h2> {{materia}} </h2>
            <h3> {{titulo}} </h3>
            <p> {{descripcion}} </p>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<style>

  .item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 80px;
    width: 1000px; 
  }
  .inf{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    margin: 10px;
  }

</style>
<script>
import { useLoadproyectos} from '@/firebase'
export default {
  setup() {
    const proyectos = useLoadproyectos()
    return { proyectos}
  }
}
</script>