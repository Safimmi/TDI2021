<template>
    <div class="wrapper">

        <div class="usuario">
            <img alt="usuario" style="width:100px; height:100px;" src="../../assets/usuario.png"> 
        </div>

        <div class="informacion" >
            <h3>{{user.displayName}}</h3>
            <h4>{{user.photoURL}}</h4>
        </div>

        <div class="botones">
            <div class="boton1" v-if="user.displayName!='Marlon Pinto'">
                <router-link to="/perfilmiembro">
                    <button class="btn btn-dark" style="background-color: #1e1f30; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 30px; link-hover-color:#000" 
                    type="submit" >
                        Editar Perfil
                    </button>
                </router-link>
            </div>

            <div class="boton1" v-else>
                <router-link to="/perfiladmin">
                    <button class="btn btn-dark" style="background-color: #1e1f30; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 30px; link-hover-color:#000" 
                    type="submit" >
                        Editar Perfil
                    </button>
                </router-link>
            </div>

            <div class="boton2">
                <button class="btn btn-dark" @click="salir()" style="background-color: #1e1f30; border: none; border-radius: 30px;font-family: 'Montserrat', sans-serif; padding: 10px 30px; link-hover-color:#000" 
                type="submit" >
                    Cerrar sesión
                </button>
            </div>
            <button @click="mostrarlista()">Lista</button>
            <button @click="mostrarformulario()">Formulario</button>
            
        </div>

        <div class="funciones">
            <div class='mas' v-if="user.displayName!='Marlon Pinto'">
                <img alt="Formulario" style="width:50px ; height:50px" src="../../assets/Icons/PlusIcon.png">
            </div>

            <div class="footer">
                <HomeB2/>
            </div>
        </div>

    </div>

</template>

<script>
import HomeB2 from '@/components/Registro/HomeB2.vue'
import firebase from "firebase";
import { useLoadusuarios} from '@/firebase'
import { db} from '@/firebase'
export default {
    name: 'DashAdministrador',
    components: {HomeB2},
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
        },
        mostrarlista:function() {

            var x = document.getElementById("Lista3ID");
            var y = document.getElementById("formularioMiembroID");
            x.style.display = "block";
            y.style.display = "none";
        },
        mostrarformulario:function() {

            var x = document.getElementById("Lista3ID");
            var y = document.getElementById("formularioMiembroID");
            y.style.display = "block";
            x.style.display = "none";
        },
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
    },
    
}
</script>

<style scoped>
    .wrapper{
        background:#353755;
        height: 100%;
        width: 20%;
        position: fixed;
    }
    .footer{
        text-align: right;
    }
    .boton1{
       margin: 5px; 

    }
    .boton2{
       margin: 5px; 
    }
    .botones{
        text-align: left;
    }
    .usuario{
        margin-bottom: 30px;
        margin-bottom: 50px;
    }
    .informacion{
        font-family: 'Righteous';
        color:white;
        text-align: left;
        padding: 20px;
        padding-right:5px;
    }
    .funciones{
        text-align: right;
        margin-top:200px;
    }
    .mas{
        margin-bottom: 20px;
    }

</style>