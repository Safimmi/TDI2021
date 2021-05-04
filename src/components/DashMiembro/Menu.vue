<template>
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
              <button class="btn btn-dark" style="background-color: #1e1f30; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 30px; link-hover-color:#000" 
              type="submit" >
              Cerrar sesión
              </button>
            </div>
    </div>
    <div class="footer">
        <HomeB/>
    </div>
    
</template>
<script>
import HomeB from '@/components/Registro/HomeB.vue'
import firebase from 'firebase'


import { useLoadproyectos} from '@/firebase'
export default {
    name: 'DashAdministrador',
    components: {HomeB},
    
    data(){
    return{
        imageData: null,
        picture: null,
        uploadValue: 0,        
        materia: null,
        titulo: null,
        descripcion: null,
        estado:"No-publicado",
        nombre: "",
        categoria: "",
        usuario:"",
        imagen:null
    }
    },
    methods:{
        getdatos(){
            var user = firebase.auth().currentUser;
            this.nombre= user.displayName,
            this.usuario= user.email,
            this.categoria= user.photoURL
        }
    },
    setup() {
    const proyectos = useLoadproyectos()
    return { proyectos }
    }
}
</script>
<style scoped>
    *{
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