<template>
    <div class="boton">
        <router-link v-if="admin==true" to="/dashboard">
             <img alt="Inicio" src="../../assets/usuario.png">  
        </router-link>
        <router-link v-else to="/dashboardM">
             <img alt="Inicio" src="../../assets/usuario.png">  
        </router-link>
    </div>
</template>


<style scoped>

.boton {
    /* border: 5px solid cyan; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    padding: 0;
    margin:0;
    height: 100%;
    width: 50%;
}
.boton img{
    max-height: 70px;
    padding: none;
}

</style>

<script>
import firebase from 'firebase'
export default {
    data() {
    return {
      admin: null,
    };
  },
  created() {
    var user = firebase.auth().currentUser;

    if (user.email == "admin@unimilitar.edu.co") {
      this.admin = true;
    }
    else{
      this.admin = false;
    }
  }
}
</script>