<template>
    <div class="wrapper">
    <div class="usuario">
        <img alt="usuario" style="width:100px; height:100px;" src="../../assets/usuario.png"> 
    </div>
    
    <div class="botones">
         <div class="boton1">
              <button class="btn btn-dark" style="background-color: #1e1f30; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 30px; link-hover-color:#000" 
              type="submit" >
              Editar Perfil
              </button>
            </div>
            <div class="boton2">
              <button class="btn btn-dark" @click="salir()" style="background-color: #1e1f30; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 30px; link-hover-color:#000" 
              type="submit" >
              Cerrar sesión
              </button>
            </div>
    </div>
    <div class="footer">
        <HomeB/>
    </div>
    </div>
</template>
<script>
import HomeB from '@/components/Registro/HomeB.vue'
import firebase from "firebase";
import { useLoadusuarios} from '@/firebase'
export default {
    name: 'DashAdministrador',
    components: {HomeB},
    methods:{
        setup() {
        const usuarios = useLoadusuarios()
        return { usuarios }
        },
        salir(){
            firebase.auth().signOut().then(() => {
                this.$router.replace('/')
            }).catch((error) => {
               console.log(error)
            });
        }

    }
}
</script>
<style scoped>
    .wrapper{
        background:#353755;
    }
    .footer{
        text-align: left;
    }
    .boton1{
       margin: 5px; 
    }
    .boton2{
       margin: 5px; 
    }
    .usuario{
        margin-bottom: 30px;
    }

</style>