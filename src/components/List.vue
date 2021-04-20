<template>
  <div class="card mt-4">
     <img class="preview" :src="picture">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Materia</th>
          <th scope="col">Titulo</th>
          <th scope="col">Descripción</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, materia, titulo, descripcion} in users" :key="id">
          <td>{{ materia }}</td>
          <td>{{ titulo }}</td>
          <td>{{ descripcion }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Rechazar
            </button>
          </td>
         <!-- <td><img :src= "captura.png"></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'
export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>